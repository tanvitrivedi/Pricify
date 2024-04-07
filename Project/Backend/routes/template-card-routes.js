const express = require("express");

const TemplateCardController = require("../controllers/template-cards");

const router = express.Router();

router.post("/", TemplateCardController.createTemplate);
router.get("/:userId", TemplateCardController.getAllCardsByUser);
router.get("/get/:id", TemplateCardController.getTemplateById);
router.patch("/:templateId", TemplateCardController.updateTemplate);
router.delete("/:id", TemplateCardController.deleteTemplate);

module.exports = router;
