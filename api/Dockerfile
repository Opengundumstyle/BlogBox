# Use an official Node.js runtime as the base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install --production

# Copy the backend source code to the container
COPY . .

# Expose the port on which your backend listens (replace 3000 with your desired port)
EXPOSE 3000

# Define the command to run your backend application
CMD [ "node", "index.js" ]