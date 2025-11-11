# Stage 1: Build the React app
FROM node:18 AS build
WORKDIR /app

# Copy package files and install dependencies
COPY app/frontend/package*.json ./
RUN npm install

# Copy all frontend source files
COPY app/frontend/ ./

# Inject environment variable for API base URL
ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=$REACT_APP_API_URL

# Build React app
RUN npm run build

# Stage 2: Serve via Nginx
FROM nginx:alpine

# Copy built app from previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Use your custom nginx config if it exists
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]