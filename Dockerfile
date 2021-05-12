FROM node:16

#RUN mkdir /src

RUN npm install nodemon -g

WORKDIR /

EXPOSE 3000

CMD cd app && npm start