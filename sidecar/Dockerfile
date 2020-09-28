###################################################
#
# Build OS Setup Stage
#
###################################################
FROM node:12-alpine AS os

WORKDIR /home/build

COPY ./package*.json ./

###################################################
#
# Install Stage
#
###################################################
FROM os AS build

RUN npm ci

COPY . .

###################################################
#
# Production Stage
#
###################################################
FROM node:12-alpine

WORKDIR /home/app

COPY --from=build /home/build /home/app

EXPOSE 8000

CMD [ "node", "./src/index.js" ]