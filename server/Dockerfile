# FROM node
FROM node:14-alpine

WORKDIR /usr/src/server

# COPY package.json ./
# COPY package-lock.json ./

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001

# ENTRYPOINT ["npm", "start"]
# CMD ["npm", "start"]

CMD ["npm", "start"]

# current dir, then do:
# docker build -t my-express .

# Run it by using:
# docker run -p 3001:3001 test-app 