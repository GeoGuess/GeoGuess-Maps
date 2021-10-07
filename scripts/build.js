#!/bin/node

const maps = require("../src/list.maps.json");
const areas = require("../src/list.areas.json");
const path = require("path");
const fs = require("fs");

const directoryPath = path.join(__dirname, "../src/locale/");
fs.readdir(directoryPath, main);

function main(err, files) {
  //handling error
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }

  let i18nContent = [];

  //listing all files using forEach
  files.forEach(function (file) {
    const lang = {
      code: file.split(".")[0],
      content: require(`../src/locale/${file}`),
    };
    i18nContent.push(lang);
  });
  const res = {
    maps: [],
    areas: [],
  };

	
	function getContent(maps, mapKey, type) {
		let map = maps[mapKey]
		for (const key of ["name", "description"]) {
			map[key] = i18nContent.reduce((acc, lang) => {
				if (lang.content[type][mapKey]) {
          acc[lang.code] = lang.content[type][mapKey][key];
        }
        return acc;
      }, {});
    }
		return map
	}

  for (const mapKey in maps) {
    const map = getContent(maps, mapKey, 'maps');
    res.maps.push(map);
  }
	
	for (const areaKey in areas) {
    const area = getContent(areas, areaKey, 'areas');
    res.areas.push(area);
  }

  console.log(JSON.stringify(res, null, 0));
}
