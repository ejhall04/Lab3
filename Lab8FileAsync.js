const fs = require('fs');
const fsPromises = fs.promises;
async function getFileContent() {
    let filehandle = null;
    try {
  
        // Using the filehandle method
        filehandle = await fsPromises.open('stylesheet.css', 'r+');
  
        var fileContent = await filehandle.readFile("utf8");
          
        console.log(fileContent);
    } catch (e) {
        console.log("Error", e);
    }
}
  
getFileContent().catch((error) => {
    console.log("Error", error)
});