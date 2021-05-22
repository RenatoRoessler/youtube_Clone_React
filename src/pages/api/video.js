import nc from "next-connect";
import upload from 'src/utils/upload'

const handler = nc()
  .use(upload.single('file'))

  .post((req, res) => {
    // receer nossa imagem e outros dados pelo endpoint
    // inser no banco de daoos MONGOBD
    const {title, authorName, authorAvatar, videoUrl} = req.body
    

    res.json({ hello: "world" });
  })

  .patch(async (req, res) => {
    throw new Error("Throws me around! Error can be caught and handled.");
  });

export default handler;




