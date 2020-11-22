const express=require("express");
const app=express();
const axios=require("axios")
const mongoose=require("mongoose")
const db=require("./models/burc.js")
mongoose.connect("mongodb+srv://veritabaniBaglantisi.mongodb.net/<dbname>?retryWrites=true&w=majority")
//EJS BAŞLANGICI
app.set('views','./views')
app.set('view engine','ejs')

app.use(express.static("public"));
  
  app.get('/balik',async(req,res)=>{
    let fish=await db.findOne({burcAdi:"balik"})
    res.render('balik',{
      yorum:fish.yorum,
      tarih:fish.tarih,
      gezegen:fish.gezegen,
      motto:fish.motto,
      element:fish.element
    });
  })
  app.get('/koc',async(req,res)=>{
    let koc=await db.findOne({burcAdi:"koc"})
    res.render('koc',{
      yorum:koc.yorum,
      tarih:koc.tarih,
      gezegen:koc.gezegen,
      motto:koc.motto,
      element:koc.element
    });
  })
  app.get('/aslan',async(req,res)=>{
    let aslan=await db.findOne({burcAdi:"aslan"})
    res.render('aslan',{
      yorum:aslan.yorum,
      tarih:aslan.tarih,
      gezegen:aslan.gezegen,
      motto:aslan.motto,
      element:aslan.element
    });
  })
  app.get('/ikizler',async(req,res)=>{
    let ikizler=await db.findOne({burcAdi:"ikizler"})
    res.render('ikizler',{
      yorum:ikizler.yorum,
      tarih:ikizler.tarih,
      gezegen:ikizler.gezegen,
      motto:ikizler.motto,
      element:ikizler.element
    });
  })

  app.get('/boga',async(req,res)=>{
    let boga=await db.findOne({burcAdi:"boga"})
    res.render('boga',{
      yorum:boga.yorum,
      tarih:boga.tarih,
      gezegen:boga.gezegen,
      motto:boga.motto,
      element:boga.element
    });
  })

  app.get('/yay',async(req,res)=>{
    let yay=await db.findOne({burcAdi:"yay"})
    res.render('yay',{
      yorum:yay.yorum,
      tarih:yay.tarih,
      gezegen:yay.gezegen,
      motto:yay.motto,
      element:yay.element
    });
  })

 app.get('/basak',async(req,res)=>{
    let basak=await db.findOne({burcAdi:"basak"})
    res.render('basak',{
      yorum:basak.yorum,
      tarih:basak.tarih,
      gezegen:basak.gezegen,
      motto:basak.motto,
      element:basak.element
    });
  })
 app.get('/yengec',async(req,res)=>{
    let yengec=await db.findOne({burcAdi:"yengec"})
    res.render('yengec',{
      yorum:yengec.yorum,
      tarih:yengec.tarih,
      gezegen:yengec.gezegen,
      motto:yengec.motto,
      element:yengec.element
    });
  })
 app.get('/kova',async(req,res)=>{
    let kova=await db.findOne({burcAdi:"kova"})
    res.render('kova',{
      yorum:kova.yorum,
      tarih:kova.tarih,
      gezegen:kova.gezegen,
      motto:kova.motto,
      element:kova.element
    });
  })
 app.get('/oglak',async(req,res)=>{
    let oglak=await db.findOne({burcAdi:"oglak"})
    res.render('oglak',{
      yorum:oglak.yorum,
      tarih:oglak.tarih,
      gezegen:oglak.gezegen,
      motto:oglak.motto,
      element:oglak.element
    });
  })
 app.get('/terazi',async(req,res)=>{
    let terazi=await db.findOne({burcAdi:"terazi"})
    res.render('terazi',{
      yorum:terazi.yorum,
      tarih:terazi.tarih,
      gezegen:terazi.gezegen,
      motto:terazi.motto,
      element:terazi.element
    });
  })
 app.get('/akrep',async(req,res)=>{
    let akrep=await db.findOne({burcAdi:"akrep"})
    res.render('akrep',{
      yorum:akrep.yorum,
      tarih:akrep.tarih,
      gezegen:akrep.gezegen,
      motto:akrep.motto,
      element:akrep.element
    });
  })
app.listen(3000);
