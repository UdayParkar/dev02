# Build stage
FROM node:18 AS build
WORKDIR /app

# Copy package files and install
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Set environment variable for build
ARG REACT_APP_API_BASE_URL
ENV REACT_APP_API_BASE_URL=$REACT_APP_API_BASE_URL

# Build the React app
RUN npm run build

# Run stage
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Optional: remove default Nginx config and use your own
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
