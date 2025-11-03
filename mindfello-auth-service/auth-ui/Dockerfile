# -----------------------------
# Stage 1: Build React App (Vite)
# -----------------------------
FROM node:20-alpine AS builder
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source files
COPY . .

# Build production files
RUN npm run build

# -----------------------------
# Stage 2: Serve using Nginx
# -----------------------------
FROM nginx:stable-alpine

# Copy built app from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Replace default Nginx config (optional but recommended)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Run Nginx
CMD ["nginx", "-g", "daemon off;"]