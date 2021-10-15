#!/bin/node
const listAreas = require('../src/list.areas.json');
const data = require('../public/geojson/areas/mexico_states.json');
const centroid = require('@turf/centroid').default;
const fetch = require('node-fetch');





const key = 'mexico-state';
const areaParams = listAreas[key].data;

async function launch(){

	let res = 0
	let i = 0;
//  const data = await fetch(areaParams.urlArea).then((r)=>{
// 		if(r.ok){
// 			return r.json();
// 		}
// 	})

	// For Each feature in the data
	for(const feature of data.features){
		// Get Center of the feature
		const centerPoint = centroid(feature);
		const nominatimQueryParams =
      areaParams && areaParams.nominatimQueryParams
          ? areaParams.nominatimQueryParams
          : {
                zoom: 5,
                addressdetails: 1,
                extratags: 1,
            };
		// Call nominatim 
		const urlNominatim = 'https://nominatim.openstreetmap.org/reverse?format=json&lat='+centerPoint.geometry.coordinates[1]+'&lon='+centerPoint.geometry.coordinates[0]+'&'+new URLSearchParams(
              nominatimQueryParams
          );
						console.log((i++)+") "+urlNominatim);
		const dataNominatim=	await fetch(urlNominatim).then((r)=>{
			if(r.ok){
				return r.json();
			}
		})
		try{
			let areaName = areaParams.nominatimResultPath.split('.').reduce((o, i) => o ? o[i] : undefined, dataNominatim);

			if(areaName === undefined)
				areaName = areaParams.nominatimFallbackResultPath.split('.').reduce((o, i) => o[i], dataNominatim);

			if(areaName  !== feature.properties[areaParams.pathKey]){
				console.error("Feature doesn't match with config - ",areaName,'|',feature.properties[areaParams.pathKey]);
				res = 1
			}
		}catch(e){
			console.error(dataNominatim, e);
			res = 1
		}

	}

	process.exit(res);
}

launch();
