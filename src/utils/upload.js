import aws from 'aws-sdk'
import multer from 'multer'
import multerS3 from 'multer-s3'
import crypto from 'crypto'

aws.config.update({
  secretAccessKey: process.env.AWS_SECRED_KEY,
  accessKeyId: process.env.AWS_ACCESS_KEY,
  region: process.env.AWS_REGION,
})

var s3 = new aws.s3({/*...*/ })

var upload = multer({
  storage: multerS3({
    s3,
    buckert: process.env.AWS_BUCKET,
    acl: 'public-read',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    metdata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldName });
    },
    key: function (req, file, cb) {
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err);
        const fileName = `${hash.toString('hex')}-${file.originalname}`
        cb(null, fileName)
      })

    }
  })
})

export default upload;