# vue-pwa-docker

> A demo progressing web app by using vue js , with a testing by doing dockerize

## Setup PWA

```
$ vue add pwa 
```

**create manifest.json**

```
{
    "short_name":"pwa-vue-docker",
    "name":"Vue Js PWA with Docker",
    "icon": [
        {
            "src":"/img/icons/android-chrome-192x192.png",
            "type":"image/png",
            "sizes":"192x192"
        },
        {
            "src":"/img/icons/msapplication-icon-144x144.png",
            "type":"image/png",
            "sizes":"144x144"
        }
    ],
    "start_url":"/",
    "background_color": "#63B884",
    "display":"standalone",
    "scope": "/",
    "theme_color": "#63B884"

}
```

## Setup Docker

**Created Dockerfile**

```
FROM node:lts-alpine

RUN npm install -g http-server

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8181
CMD [ "http-server", "dist" ]

```

## Project setup
```
yarn install
```

**Compiles and hot-reloads for development**
```
yarn serve
```

**Compiles and minifies for production**
```
yarn build
```

**Customize configuration** <br/>
See [Configuration Reference](https://cli.vuejs.org/config/).
