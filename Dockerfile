ARG PORT=4000
FROM node:14-alpine AS node
WORKDIR /src
COPY package*.json ./
# Install all dependencies
RUN npm i 
# Copy the rest of the code
COPY . .   
# Invoke the build script to transpile ts code to js
RUN npm run build
# Open desired port
EXPOSE ${PORT}

CMD ["npm", "start"]