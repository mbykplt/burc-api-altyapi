const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://veritabaniBaglantisi.mongodb.net/<dbname>?retryWrites=true&w=majority",{ useNewUrlParser: true });
const burclar= mongoose.Schema({
  _id:mongoose.Schema.Types.ObjectId,
  burcAdi:String,
  tarih:String,
  motto:String,
  gezegen:String,
  element:String,
  yorum:String
})
module.exports=mongoose.model("burclar",burclar)
