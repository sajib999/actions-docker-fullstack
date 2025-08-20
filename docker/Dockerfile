# ---- Build Stage ----
FROM node:18-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source
COPY . .

# Build Next.js (skip if plain Node.js)
RUN npm run build

# ---- Production Stage ----
FROM node:18-bullseye-slim

WORKDIR /app

# Copy only the necessary files
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Expose port
EXPOSE 3000

# Start app
CMD ["npm", "start"]

