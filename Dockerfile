# base « linux »
FROM node:16.14-alpine

# définir notre répertoire de travail
WORKDIR /app

# copier tous nos fichiers
COPY . /app

# installe le projet et ses dépendences
RUN npm install --silent
# installe `react-scripts` en global
RUN npm install react-scripts@5.0.1 -g --silent

# expose le port 3000
EXPOSE 3000

# démarre notre application
CMD [ "npm", "start" ]
