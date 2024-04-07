const HttpError = require("../models/http-error");
const TemplateCard = require("../models/template-card");
const jwt = require("jsonwebtoken");

const getAllCardsByUser = async (req, res, next) => {
  try {
    let user = checkJWTtoken(req.headers["authorization"]);
    const userId = req.params.userId;
    if (user.success) {
      const templates = await TemplateCard.find({ user: userId }).sort({
        updatedAt: -1,
      });
      return res.status(200).json({
        templates: templates.map((template) =>
          template.toObject({ getters: true })
        ),
      });
    } else {
      return next(new HttpError("Token is expired, please login again", 400));
    }
  } catch (err) {
    const error = new HttpError(
      "Fetching users failed, please try again later.",
      500
    );
    return next(error);
  }
};

const getUserTemplates = async (req, res, next) => {
  try {
    let user = checkJWTtoken(req.headers["authorization"]);
    if (user.success) {
      user = user.decoded;
      const data = await TemplateCard.find({ user: user.userId }).sort({
        updatedAt: -1, // Sorting by updatedAt field in descending order
      });
      return res.json({ data });
    } else {
      throw new HttpError("Invalid token", 400);
    }
  } catch (err) {
    const error = new HttpError(
      "Fetching user templates failed, please try again later.",
      500
    );
    return next(error);
  }
};

const updateTemplate = async (req, res, next) => {
  try {
    let user = checkJWTtoken(req.headers["authorization"]);
    const templateId = req.params.templateId;
    const cardData = req.body.template;
    if (user.success) {
      // Find the template by its _id and update its properties
      const updatedTemplate = await TemplateCard.findByIdAndUpdate(
        templateId,
        cardData,
        { new: true } // To return the updated document
      );

      if (!updatedTemplate) {
        // If the template with the provided ID is not found
        throw new HttpError("Template not found", 404);
      }

      return res.json({ data: updatedTemplate });
    } else {
      throw new HttpError("Invalid token", 400);
    }
  } catch (err) {
    const error = new HttpError(
      "Updating template failed, please try again later.",
      500
    );
    return next(error);
  }
};

const createTemplate = async (req, res, next) => {
  try {
    let user = checkJWTtoken(req.headers["authorization"]);
    if (user.success) {
      let template = req.body.template;
      console.log(user.decoded);
      const newTemplate = new TemplateCard({
        ...template,
        user: user?.decoded?.userId,
      });
      await newTemplate.save();
      return res.status(200).json({ template: newTemplate });
    } else {
      throw new HttpError("Invalid token", 400);
    }
  } catch (err) {
    console.log("err", err);
    const error = new HttpError(
      "Creating cards failed, please try again later.",
      500
    );
    return next(error);
  }
};

const getTemplateById = async (req, res, next) => {
  try {
    // Get the template ID from request parameters
    const templateId = req.params.id;

    // Find the template by ID
    const template = await TemplateCard.findById(templateId);

    // If template not found, return 404 error
    if (!template) {
      throw new HttpError("Template not found", 404);
    }

    // Return the template
    res.status(200).json({ template });
  } catch (err) {
    // Handle errors
    return next(err);
  }
};

const deleteTemplate = async (req, res, next) => {
  try {
    let user = checkJWTtoken(req.headers["authorization"]);
    const templateId = req.params.id;
    if (user.success) {
      const deletedTemplate = await TemplateCard.findOneAndDelete({
        _id: templateId,
      });
      return res.json({ message: "Template deleted successfully" });
    } else {
      throw new HttpError("Invalid token", 400);
    }
  } catch (err) {
    const error = new HttpError(
      "Deleting template failed, please try again later.",
      500
    );
    return next(error);
  }
};

const checkJWTtoken = (token) => {
  if (!token) {
    return { success: false, message: "Token is required." };
  }
  try {
    const decoded = jwt.decode(token, process.env.TOKEN_KEY, {
      complete: true,
    });
    return { success: true, decoded };
  } catch (err) {
    return { success: false, message: "Invalid token" };
  }
};

exports.getAllCardsByUser = getAllCardsByUser;
exports.getUserTemplates = getUserTemplates;
exports.createTemplate = createTemplate;
exports.getTemplateById = getTemplateById;
exports.updateTemplate = updateTemplate;
exports.deleteTemplate = deleteTemplate;
