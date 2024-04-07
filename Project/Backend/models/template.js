const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const template = new Schema({ 
  templateName: { type: String, required: true },
  plan : { type: String, required: true },
  user: {  type: ObjectId, required:true},
}, {
  timestamps: true // Adding timestamps option
});

template.plugin(uniqueValidator);

module.exports = mongoose.model("Template", template);
