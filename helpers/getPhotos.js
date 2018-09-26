const AWS = require('aws-sdk');
const db = require('../server/connection.js');
require('dotenv').config({ path: `${process.env.HOME}/.dotenv/airfec_reload/.env` });

AWS.config.update({
  accessKeyId: process.env.AWS_AKID,
  secretAccessKey: process.env.AWS_SAK,
  region: 'us-east-1',
});

const urlReplacer = (arrayOfUrls) => {
  const currentUrl = urls => urls[Math.floor(Math.random() * urls.length)];
  for (let i = 0; i < 1001; i += 1) {
    const sql = `UPDATE photos SET url='${currentUrl(arrayOfUrls)}' WHERE id='${i}'`;
    db.dbManipulator(sql, (err) => {
      if (err) {
        console.error(err);
      }
    });
  }
};
const validUrlsGenerator = (urls) => {
  urlReplacer(urls.map(img => `https://s3.us-east-1.amazonaws.com/airfec2/${img.Key}`));
};

const updatePhotos = () => {
  const bucketParams = {
    Bucket: 'airfec2',
  };

  const s3 = new AWS.S3();

  s3.listObjects(bucketParams, (err, data) => (err ? console.error('Error', err) : validUrlsGenerator(data.Contents)));
};

module.exports.updatePhotos = updatePhotos;
