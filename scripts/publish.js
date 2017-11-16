const aws = require('aws-sdk');
const s3 = require('s3-client');
const path = require('path');

var BUCKET_NAME = 'married-at-first-sight';
var BUCKET_REGION = 'ap-southeast-2';

aws.config.update({
  region: BUCKET_REGION,
});

const client = s3.createClient({ s3Client: new aws.S3() });

var params = {
  localDir: path.resolve('./build'),
  deleteRemoved: true,
  s3Params: {
    Bucket: BUCKET_NAME,
  },
};
const uploader = client.uploadDir(params);

uploader.on('error', function(err) {
  console.error("unable to sync:", err.stack);
});
uploader.on('progress', function() {
  console.log("progress", uploader.progressAmount, uploader.progressTotal);
});
uploader.on('end', function() {
  console.log("done uploading");
});
