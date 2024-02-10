const express = require("express");
const qrcode = require("qrcode");


const app = express();


app.get("/generateQR", async (req, res)=>{
    try {
        
        const url = req.query.url || 'https://example.com';

        const newQr = await qrcode.toDataURL(url);

        res.send(`<img src=${newQr} alt='qr'></img>`)

    } catch (error) {
        res.status(500);
        res.json({
            remark:"Internal server error"
        })
    }
})


const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})