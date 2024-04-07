const Template = require("../models/template");
const jwt = require("jsonwebtoken");
const TemplateCard = require("../models/template-card");

const getAllUserTemplates = async (req, res) => {
  console.log('req.headers["authorization"]', req.headers["authorization"]);
  let user = checkJWTtoken(req.headers["authorization"]);
  if (user.success) {
    user = user.decoded;
    console.log("user", user);
    const data = await Template.find({ user: user.userId });
    res.json({ data });
  } else {
    console.log("user", user);
    res.json({ user });
  }
};

const getTemplate = async (req, res) => {
  let user = checkJWTtoken(req.headers["authorization"]);
  if (user.success) {
    const data = await Template.findOne({ _id: req.params["id"] });
    res.json({ data });
  } else {
    res.json({ user });
  }
};

const updateTemplate = async (req, res) => {
  let user = checkJWTtoken(req.headers["authorization"]);
  if (user.success) {
    return await Template.findOneAndUpdate(
      { _id: req.params["id"] },
      { name: req.body["templateName"] }
    );
  } else {
    res.json({ user });
  }
};

const createUserTemplate = async (req, res) => {
  let user = checkJWTtoken(req.headers["authorization"]);
  if (user.success) {
    const payload = {
      templateName: req.body["templateName"],
      plan: req.body["plan"],
      user: user.userId,
    };
    return await Template.create(payload);
  } else {
    res.json({ user });
  }
};

const deleteUserTemplate = async (req, res) => {
  let user = checkJWTtoken(req.headers["authorization"]);
  if (user.success) {
    await TemplateCard.deleteMany({ template: req.params.id });
    return await Template.findOneAndDelete({ _id: req.params.id });
  } else {
    res.json({ user });
  }
};

const checkJWTtoken = (token) => {
  if (!token) {
    return { success: false, message: "Token is required." };
  }
  try {
    console.log('token',token);
    console.log('process.env.TOKEN_KEY',process.env.TOKEN_KEY);
    const decoded = jwt.decode(token, process.env.TOKEN_KEY, { complete: true });
    return { success: true, decoded };
  } catch (err) {
    console.log('err',err);
    return { success: false, message: "Invalid token" };
  }
};

exports.getAllUserTemplates = getAllUserTemplates;
exports.createUserTemplate = createUserTemplate;
exports.deleteUserTemplate = deleteUserTemplate;
exports.getTemplate = getTemplate;
exports.updateTemplate = updateTemplate;
