const multer = require("multer");
const path = require("path");

const diskStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "assets"));
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const fileFilter = (req,file,cb) =>{
  if( file.mimetype ==='image/png'||
      file.mimetype ==='image/jpg'||
      file.mimetype ==='image/jpeg'){
        cb(null,true)
      }else{
        cb(null,true)
      }
}




module.exports = diskStorage;
