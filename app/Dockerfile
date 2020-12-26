FROM node:alpine

WORKDIR /usr/app

COPY --chown=node package.json yarn.lock ./

RUN yarn install

COPY --chown=node . .