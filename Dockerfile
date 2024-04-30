ARG NODE_VERSION=18.19.0
FROM node:${NODE_VERSION}-alpine as base

WORKDIR /app

FROM base as build

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
# Run the build script.
RUN npm run tailwind:build
RUN npm run build
EXPOSE 3000
ENTRYPOINT ["npm", "run", "start:prod"]
