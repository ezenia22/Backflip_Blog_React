const stream = require("stream");
const express = require("express");
const multer = require("multer");
const path = require("path");
const { google } = require("googleapis");

const uploadRouter = express.Router()
const upload = multer()

const KEYFILEPATH = path.join(__dirname + "credentials.json")
const SCOPES = ['https://www.googleapis.com/auth/drive']

const auth = new google.auth.GoogleAuth ({
    keyFile: KEYFILEPATH,
    scopes: SCOPES
})

const uploadFile = async (fileObject) => {
    const bufferStream = new stream.PassThrough()
    bufferStream.end(fileObject.buffer)
    const {data} = await google.drive({
        version: 'v3',
        auth: auth
    }).files.create({
        media:{
            mimeType: fileObject.mimeType,
            body: bufferStream, 
        },
        requestBody:{
            name: fileObject.originalname,
            parents:['1kJOi9_oGJE-DsvJrlzZlZOmjcWDLl7IB']
        },
        fields:"id,name"
    })
    console.log(`Uploaded file ${data.name} ${data.id}`)
}

uploadRouter.post('/upload', upload.single(),async (req,res) => {
    try {
        const {body,files} = req

        for(let f=0;f<files.length;f++ ){
            await uploadFile(files[f])
        }
        console.log(body)
        res.status(200).send("Form submitted")
    } catch (f) {
        res.send(f.message)
    }
})

module.exports = uploadRouter;