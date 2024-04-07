const express = require("express");
const { check } = require("express-validator");

const TemplateController = require("../controllers/template-controllers");

const router = express.Router();

router.get("/", TemplateController.getAllUserTemplates);
router.get("/:id", TemplateController.getTemplate);
router.put("/:id", TemplateController.updateTemplate);
router.post("/", TemplateController.createUserTemplate);
router.delete("/:id", TemplateController.deleteUserTemplate);
module.exports = router;
