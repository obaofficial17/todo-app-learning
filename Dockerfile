# Step 1: Ingest a lightweight, official Linux image pre-packaged with Node.js
FROM node:20-alpine

# Step 2: Create and isolate the folder directory where our code lives inside the container
WORKDIR /app

# Step 3: Copy over your package tracking manifests first
COPY package*.json ./

# Step 4: Run the package manager installation script loop inside the isolated image filesystem
RUN npm install

# Step 5: Copy the remaining project files (server.js, index.html, style.css, app.js)
COPY . .

# Step 6: Inform Docker that the internal application container engine listens on port 3000
EXPOSE 3000

# Step 7: Define the final execution command array to ignite your Express server
CMD ["npm", "start"]