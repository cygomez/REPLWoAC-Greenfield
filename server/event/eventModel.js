/***

  Crash Model

***/
  
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var crashSchema = new Schema({

  timeStamp: { type: Date, default: Date.now }, //need to parse this when fetch

  location : Schema.Types.Mixed,//investigate format google api returns

  witness: { 
    firstname : String,
    lastName : String,
    phone: String
  },

  accidentPhotoUrls : Array,

  otherPartyInfo: {
    otherUser : Schema.Types.Mixed,
    licensePhotoUrl : String,
    insuranceCardPhotoUrl : String,
    licensePlatePhotoUrl : String
  }

});

var Crash = mongoose.model("Crash", crashSchema);

module.exports = Crash;




