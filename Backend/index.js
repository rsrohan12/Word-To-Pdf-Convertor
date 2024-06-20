const express = require('express')
const multer  = require('multer')
const docxConverter = require('docx-pdf');
const path = require('path')
const cors = require('cors')

const app = express()
const port = 3000

app.use(cors())

//Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files.
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname ) // show the original name of file 
  }
})

const upload = multer({ storage: storage })
app.post('/convertFile', upload.single('file'),(req, res, next)=> { // we use this "file" name in form, used in frontend
  try {
    if (!req.file) {
      return res.status(400).json({
        message: "No file uploaded",
      })
    }
    // defining output file path
    let outputPath = path.join( // first selected file is uploaded in uploads and then converted into pdf and stored in files folder
      __dirname,
      "files",
      `${req.file.originalname}.pdf`) // show the original name of file after uploading
    docxConverter(req.file.path, outputPath, (err,result) => {
      if(err){
        console.log(err);
        return res.status(500).json({
          message: "Error converting docx to pdf"
        })
      }
      res.download(outputPath, () => {
        console.log("File downloaded");
      })
    });
    
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error"
    })
  }
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})