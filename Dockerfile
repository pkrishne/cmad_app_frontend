FROM node:10.15-alpine
WORKDIR /opt/frontend
COPY . /opt/frontend
RUN npm install
EXPOSE 3000
CMD npm start
