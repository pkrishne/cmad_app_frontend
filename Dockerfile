FROM node:4-alpine
WORKDIR /opt/frontend
COPY . /opt/frontend
RUN npm install
EXPOSE 3000
CMD npm start
