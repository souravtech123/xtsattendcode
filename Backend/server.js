import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import qrcode from 'qrcode'
import link from './model/code.model.js'

const app = express();
const port = 3000 ;

app.use(express.json())
app.use(cors())

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/code')
}

main();




app.post('/' , (req , res) => {

    const code =  new link(req.body)
    code.save();

    res.json({message : "link uploaded"})

   
})
app.get('/qrcode' , async (req , res) => {
    const qrData = await link.findOne({});

    qrcode.toDataURL(qrData.link , function (err, url) {
        res.json({Qrcode : url})
      })
})



app.listen(port , () => {
    console.log("Server is running");
})