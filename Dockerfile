FROM node
ADD . /snack-machine
WORKDIR /snack-machine
RUN npm install
CMD [ "npm", "start" ]