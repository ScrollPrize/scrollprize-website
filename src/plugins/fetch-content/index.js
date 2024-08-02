const fs = require("fs");
const path = require("path");
const https = require("https");
const crypto = require("crypto");

function fetchContent(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });
      res.on("end", () => {
        resolve(data);
      });
    }).on("error", (err) => {
      reject(err);
    });
  });
}

function md5(content) {
  return crypto.createHash("md5").update(content).digest("hex");
}

module.exports = function (context, options) {
  const cacheDir = path.join(context.siteDir, ".docusaurus");
  const cacheFile = path.join(cacheDir, "awesome-scroll-tools.md");
  const hashFile = path.join(cacheDir, "awesome-scroll-tools.md.hash");

  return {
    name: "fetch-content",
    async loadContent() {
      const url = "https://raw.githubusercontent.com/ScrollPrize/awesome-scroll-tools/main/README.md";
      
      try {
        const content = await fetchContent(url);
        const newHash = md5(content);
        
        if (!fs.existsSync(cacheDir)) {
          fs.mkdirSync(cacheDir, { recursive: true });
        }

        let oldHash = "";
        if (fs.existsSync(hashFile)) {
          oldHash = fs.readFileSync(hashFile, "utf8");
        }

        if (newHash !== oldHash) {
          fs.writeFileSync(cacheFile, content);
          fs.writeFileSync(hashFile, newHash);
          console.log("Content updated successfully");
        } else {
          console.log("Content unchanged, using cached version");
        }
      } catch (error) {
        console.error("Error updating content:", error);
      }
    },
  };
};