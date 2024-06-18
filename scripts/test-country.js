#!/bin/node
const data = require('../public/geojson/maps/palestine.json');
const fetch = require('node-fetch');





async function launch(){

	// For Each feature in the data
	for(const point of data.features){

		// Call nominatim 
		const urlNominatim = 'https://nominatim.openstreetmap.org/reverse?format=json&email=dqdsq@yopmail.com&lat='+point.geometry.coordinates[1]+'&lon='+point.geometry.coordinates[0];
					
		const dataNominatim=	await fetch(urlNominatim).then((r)=>{
			if(r.ok){
				return r.json();
			}
		})
		console.log(dataNominatim.address.country_code, point.geometry.coordinates[1], point.geometry.coordinates[0])

		if(!dataNominatim.address.country_code || dataNominatim.address.country_code !== 'ps'){
			console.error('Error fetching data from Nominatim', point);
			process.exit(1);
		}

	}

	process.exit(2);
}

launch();
