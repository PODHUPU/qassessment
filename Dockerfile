#Base Image
FROM node:10-alpine
RUN apk add python make g++ bash

#Setup Repo and Install dependencies
RUN mkdir -p repo
COPY package.json repo
RUN cd repo && yarn install --frozen-lockfile --production --silent

#Copy src to repo
COPY . repo
WORKDIR /repo

ENTRYPOINT [ "/bin/sh" ]