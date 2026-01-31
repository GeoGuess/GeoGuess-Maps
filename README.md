# GeoGuess-Maps

[![Validate JSONs and deploy](https://github.com/GeoGuess/GeoGuess-Maps/actions/workflows/ci.yml/badge.svg)](https://github.com/GeoGuess/GeoGuess-Maps/actions/workflows/ci.yml)
[![GitHub](https://img.shields.io/github/license/GeoGuess/GeoGuess-Maps)](https://github.com/GeoGuess/GeoGuess-Maps/blob/master/LICENSE) 
[![Discord](https://img.shields.io/discord/758443244387303435?color=7289DA&label=discord&logo=discord&logoColor=FFFFFF)](https://discord.gg/9GXm6RT)
[![Crowdin](https://badges.crowdin.net/geoguess/localized.svg)](https://translate.geoguess.games/project/geoguess)
[![jsDelivr](https://img.shields.io/jsdelivr/gh/hm/GeoGuess/GeoGuess-Maps?label=jsDelivr&color=orange)](https://cdn.jsdelivr.net/gh/GeoGuess/GeoGuess-Maps@latest/maps.json)

List of community map for [GeoGuess](https://github.com/GeoGuess/Geoguess).


## CDN Access

The `maps.json` file is available via jsDelivr CDN for fast and reliable access:

- **Latest version (recommended)**: `https://cdn.jsdelivr.net/gh/GeoGuess/GeoGuess-Maps@latest/maps.json`
- **From main branch**: `https://cdn.jsdelivr.net/gh/GeoGuess/GeoGuess-Maps@main/maps.json`
- **From gh-pages**: `https://cdn.jsdelivr.net/gh/GeoGuess/GeoGuess-Maps@gh-pages/maps.json`
- **Specific version**: `https://cdn.jsdelivr.net/gh/GeoGuess/GeoGuess-Maps@{version}/maps.json`

The CDN automatically caches and serves the file with high performance worldwide.

## Create Map

1. Follow documentation here https://geoguess.games/guide/dev/maps.html
2. Add map in `src/list.maps.json` with id
```js 
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
```js
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
