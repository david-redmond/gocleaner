# Use an official Node.js image as a base
FROM node:18-alpine

# Set working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json/yarn.lock
COPY package*.json ./

# Install dependencies
RUN npm install --force

# Copy the rest of the application
COPY . .

# Define an argument for build-time environment variables
ARG REACT_APP_DISABLE_REDIRECT

# Make the build-time variable available to the build process
ENV REACT_APP_DISABLE_REDIRECT=${REACT_APP_DISABLE_REDIRECT}

# Build the Next.js app
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Define a runtime environment variable
ENV REACT_APP_DISABLE_REDIRECT=${REACT_APP_DISABLE_REDIRECT}

# Start the app
CMD ["npm", "start"]
