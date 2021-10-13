# GeoGuess-Maps

[![Validate JSONs and deploy](https://github.com/GeoGuess/GeoGuess-Maps/actions/workflows/ci.yml/badge.svg)](https://github.com/GeoGuess/GeoGuess-Maps/actions/workflows/ci.yml)
[![GitHub](https://img.shields.io/github/license/GeoGuess/GeoGuess-Maps)](https://github.com/GeoGuess/GeoGuess-Maps/blob/master/LICENSE) 
[![Discord](https://img.shields.io/discord/758443244387303435?color=7289DA&label=discord&logo=discord&logoColor=FFFFFF)](https://discord.gg/9GXm6RT)
[![Crowdin](https://badges.crowdin.net/geoguess/localized.svg)](https://translate.geoguess.games/project/geoguess)

List community map for [GeoGuess](https://github.com/GeoGuess/Geoguess).


## Create Map

1. Follow documentation here https://geoguess.games/guide/dev/maps.html
2. Add map in `src/list.maps.json` with id
```json
    
    "id": {// id: object
        "name": string,
        "description": string,
        "author":  string,
        "imageUrl": urlString (width = 500 & heigth = 230),
        "url": urlGeoJSON
    }
```
3. Generate i18n keys with `npm install && npm run generate`


## Create Area

1. Follow documentation here https://geoguess.games/guide/dev/areas.html
2. Add area in `src/list.areas.json` with id
```json
    
    "id": {// id: object
        "name": string,
        "description": string,
        "author":  string,
        "imageUrl": urlString (width = 500 & heigth = 230),
        "data": AreasModeObject // details here : https://geoguess.games/guide/dev/areas.html#areasmodeobject
    }
```
3. Generate i18n keys with `npm install && npm run generate`




Please note we have a [code of conduct](https://github.com/GeoGuess/Geoguess/blob/master/CODE_OF_CONDUCT.md), please follow it in all your interactions with the project.