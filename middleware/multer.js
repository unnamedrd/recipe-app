//middleware to define storage configuration in GridFS-Storage

const util = require("util");
const multer = require("multer");


module.exports = multer({
  storage: multer.diskStorage({}), 
  fileFilter: (req, file, cb) => {
    let ext = path.extname(file.originalname);
    if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
      cb(new Error("File type is not supported"), false);
      return;
    }
    cb(null, true);
  },
  
});

