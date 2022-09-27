FROM node:16.15.1

WORKDIR /bristo/backend

COPY package.json .

RUN npm install

COPY . .

EXPOSE 4000
ENV PORT=4000
ENV CLOUD_NAME=expert-shire
ENV API_KEY=424229448227125
ENV API_SECRET=nNGmbyC5GhDiZDHY7uAk2v6gSDQ
ENV MONGODB_URI_DEV=mongodb://mongodb:27017/pictify-db


CMD ["npm", "start"]

