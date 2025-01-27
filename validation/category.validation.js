import Joi from 'joi';

const createCategory = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    image: Joi.string(),
    description: Joi.string(),
    tax_applicability: Joi.boolean(),
    tax: Joi.number(),
    tax_type: Joi.string().valid('percentage', 'fixed'),
  }),
};

const updateCategoryById = {
  params: Joi.object().keys({
    categoryId: Joi.string().required(),
  }),
  body: Joi.object().keys({
    name: Joi.string(),
    image: Joi.string(),
    description: Joi.string(),
    tax_applicability: Joi.boolean(),
    tax: Joi.number(),
    tax_type: Joi.string().valid('percentage', 'fixed'),
  }),
};

const getCategoryById = {
  params: Joi.object().keys({
    categoryId: Joi.string().required(),
  }),
};

const deleteCategoryById = {
  params: Joi.object().keys({
    categoryId: Joi.string().required(),
  }),
};

export default {
  createCategory,
  getCategoryById,
  deleteCategoryById,
  updateCategoryById,
};
