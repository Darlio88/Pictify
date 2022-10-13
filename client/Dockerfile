FROM node

WORKDIR /pictify/frontend

COPY package.json .

RUN npm install

COPY . .

ENV REACT_APP_CLOUD_NAME='expert-shire'
ENV REACT_APP_BASE_URL='http://localhost:4000'
ENV NODE_ENV=production 

EXPOSE 3000

CMD [ "npm", "start" ]

