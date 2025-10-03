FROM node:18-alpine AS production
WORKDIR /app
COPY package*.json ./
RUN npm install
EXPOSE 5000
CMD ["npm", "run", "pm2"]
