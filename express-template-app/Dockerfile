FROM node:16.15

ENV MONGO_URI="mongodb://admin:password@172.17.0.2:27017/"

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 8080
CMD ["npm", "run", "start"]