FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build


FROM node:18-alpine AS production
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma 
EXPOSE 5000
CMD ["npm", "run", "server"]
