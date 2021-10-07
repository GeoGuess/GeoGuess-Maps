#!/bin/node

const maps = require("../src/list.maps.json");
const areas = require("../src/list.areas.json");

const res = {
  maps: {},
  areas: {},
};

function getContent(map){
  return {
    name: map.name,
    description: map.description,
  }
}


// Maps
for (const mapKey in maps) {
  const map = maps[mapKey];
  res.maps[mapKey] = getContent(map);
}

// areas
for (const areaKey in areas) {
  const area = areas[areaKey];
  res.areas[areaKey] = getContent(area);
}



console.log(JSON.stringify(res, null, 2));
