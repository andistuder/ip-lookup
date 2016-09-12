# IP Lookup

A very basic web service to allow IP lookup against GeoLite2 City data.

## Install

```
npm install
```

Download [GeoLite2 City](https://dev.maxmind.com/geoip/geoip2/geolite2/) into `data/GeoLite2-City.mmdb`

## Boot

```
node server.js
```

## Docker

A basic `Dockerfile` exists. It manages the download of the Geo2-City data on build.

In production this would need to be extended to use [GeoIP Update program](http://dev.maxmind.com/geoip/geoipupdate/) to ensure that the lasted IP data is available.
