const path = require('path');
const express = require('express');
const multer = require('multer');
const File = require('../model/file');
const requestFile = require('../model/requestFile');
const Router = express.Router();
const { unlink } = require('fs/promises');
const axios = require('axios');

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, './files');
    },
    filename(req, file, cb) {
      cb(null, `${new Date().getTime()}_${file.originalname}`);
    }
  }),
  limits: {
    fileSize: 1000000 // max file size 1MB = 1000000 bytes
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpeg|jpg|png|pdf|doc|docx|xlsx|xls)$/)) {
      return cb(
        new Error(
          'only upload files with jpg, jpeg, png, pdf, doc, docx, xslx, xls format.'
        )
      );
    }
    cb(undefined, true); // continue with upload
  }
});

Router.post(
  '/upload',
  upload.single('file'),
  async (req, res) => {
    try {
      const { title, description, receiver} = req.body;
      const { path, mimetype } = req.file;
      console.log(title, description, path, mimetype, receiver);
      const file = new File({
        title,
        description,
        file_path: path,
        file_mimetype: mimetype,
        receiver: receiver
      });
      console.log(file);
      await file.save();
      res.send('file uploaded successfully.');
    } catch (error) {
      res.status(400).send('Error while uploading file. Try again later.');
    }
  },
  (error, req, res, next) => {
    if (error) {
      res.status(500).send(error.message);
    }
  }
);

Router.get('/getAllFiles/:currentAccount', async (req, res) => {
  // const {receiver} = req.params
  try {
    console.log(req.params.currentAccount);
    const files = await File.find({receiver: req.params.currentAccount});
    const sortedByCreationDate = files.sort(
      (a, b) => b.createdAt - a.createdAt
    );
    res.send(sortedByCreationDate);
  } catch (error) {
    res.status(400).send('Error while getting list of files. Try again later.');
  }
});

Router.post('/requestFile', async(req, res) => {
  try {
    const {title, description, receiver} = req.body;
    console.log(title, description, receiver);
    const request = new requestFile({
      title: title,
      description: description,
      receiver: receiver
    });
    console.log('a')
    await request.save();
    console.log('b');

    res.send('request send successfully');

  } catch (error) {
    res.status(400).send("Request can't be send");
  }
});

Router.get('/allRequest/:receiver', async(req, res) => {
  try {
    const request = await requestFile.find({receiver: receiver});
    res.send(request);
  } catch (error) {
    res.status(400).send("Request can't be displayed");
  }
})

Router.get('/download/:id', async (req, res) => {
  try {
    const file = await File.findById(req.params.id);
    res.set({
      'Content-Type': file.file_mimetype
    });
    res.sendFile(path.join(__dirname, '..', file.file_path));
    try {
      axios.delete(`http://localhost:3030/delete/${req.params.id}`);
    } catch(error){
      console.log('File not deleted!!');
    }
  } catch (error) {
    res.status(400).send('Error while downloading file. Try again later.');
  }
});

Router.delete('/delete/:id', async(req, res) => {
  try {
    const file = await File.findById(req.params.id);
    console.log(path.join(__dirname, '..', file.file_path))
    await unlink(path.join(__dirname, '..', file.file_path));
    // console.log(`File ${filePath} has been deleted.`);
    await File.deleteOne({_id: req.params.id});
    console.log('File deleted from the server also');
    res.status(200).send("Successful");
  } catch (error) {
    res.status(400).send('Error while deleting a file. Try again later.');
  }
});

module.exports = Router;
