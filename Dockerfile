# Use the official Node.js image from the Docker Hub
FROM node:14

# Set the working directory
WORKDIR /index

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port on which the app will run
EXPOSE 3001

# Command to start the application
CMD ["node", "index.js"]
