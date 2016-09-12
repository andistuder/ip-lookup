FROM node:6.2.2
EXPOSE 3002

WORKDIR /app

RUN wget --no-verbose --directory-prefix data http://geolite.maxmind.com/download/geoip/database/GeoLite2-City.mmdb.gz \
  && gunzip data/GeoLite2-City.mmdb.gz

COPY package.json package.json

RUN npm install
RUN npm install -g pm2@1.1.3

COPY server.js server.js

ENV PORT=3002

CMD pm2 start -x server.js --no-daemon
