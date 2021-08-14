const multer = require("multer");

const fileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './assets/images');
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" +Date.now()+ file.originalname
    );
  },
});

const upload = multer({
  storage: fileStorage
})
// const fileFilter = (req,file,cb) =>{
//   if( file.mimetype ==='image/png'||
//       file.mimetype ==='image/jpg'||
//       file.mimetype ==='image/jpeg'){
//         cb(null,true)
//       }else{
//         cb(null,true)
//       }
// }

module.exports = upload;
