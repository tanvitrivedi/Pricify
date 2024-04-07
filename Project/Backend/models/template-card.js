const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const Schema = mongoose.Schema;

const ObjectId = Schema.Types.ObjectId;

// Define your predefined button object

const first = {
  title: "Card 1",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, seddo",
  price: "10",
  services: [],
  bgColor: "#fff",
  btnText: "Buy",
  btnColor: "#ea4c89",
  btnLink: "https://www.google.com",
};
const second = {
  title: "Card 2",
  description: "",
  price: "10",
  services: [],
  bgColor: "#fff",
  btnText: "Buy",
  btnColor: "#ea4c89",
  btnLink: "https://www.google.com",
};
const third = {
  title: "Card 3",
  description: "",
  price: "10",
  services: [],
  bgColor: "#fff",
  btnText: "Buy",
  btnColor: "#ea4c89",
  btnLink: "https://www.google.com",
};

const templateCard = new Schema({
  templateName: { type: String, default: "" },
  fontStyle: { type: String, default: "Inter, sans-serif" },
  headerTitleSize: { type: String, default: "16px" },
  subscribtionType: { type: String, default: "monthly" },
  currency: { type: String, default: "$" },
  first: {
    type: Object,
    default: first,
  },
  second: {
    type: Object,
    default: second,
  },
  third: {
    type: Object,
    default: third,
  },
  user: { type: ObjectId, required: true },
  createdAt: { type: Date, default: Date.now }, // Set default value to current timestamp
  updatedAt: { type: Date, default: Date.now }, // Set default value to current timestamp
});

templateCard.pre("findOneAndUpdate", function (next) {
  this.update({}, { $set: { updatedAt: new Date() } });
  next();
});
templateCard.plugin(uniqueValidator);

module.exports = mongoose.model("TemplateCard", templateCard);
