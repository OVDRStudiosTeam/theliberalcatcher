const fs = require('fs');
const path = require('path');

const buildTime = new Date().toISOString();

const htmlFilePath = path.join(__dirname, 'index.html');
let htmlContent = fs.readFileSync(htmlFilePath, 'utf8');

htmlContent = htmlContent.replace('{{BUILD_TIME}}', buildTime);

fs.writeFileSync(htmlFilePath, htmlContent);

console.log('Build time injected:', buildTime);
