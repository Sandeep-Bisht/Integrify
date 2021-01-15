# pull official base image
FROM node:12.9.1 as node

# set working directory
WORKDIR /app

RUN mkdir client_app

WORKDIR /app/client_app

COPY . .

RUN npm install

#RUN ng build 
RUN npm run build

RUN ls

FROM nginx:alpine

RUN rm /usr/share/nginx/html/*

WORKDIR /etc/nginx/conf.d
COPY --from=node /app/client_app/default.conf default.conf

WORKDIR /usr/share/nginx/html
COPY --from=node /app/client_app/dist/. .
