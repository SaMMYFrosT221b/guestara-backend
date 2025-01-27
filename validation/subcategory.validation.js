import Joi from 'joi';

const createSubcategory = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    category: Joi.string(),
    image: Joi.string(),
    description: Joi.string(),
    tax_applicability: Joi.boolean(),
    tax: Joi.number(),
  }),
};

const updateSubcategoryById = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    category: Joi.string(),
    image: Joi.string(),
    description: Joi.string(),
    tax_applicability: Joi.boolean(),
    tax: Joi.number(),
  }),
  params: Joi.object().keys({
    subcategoryId: Joi.string().required(),
  }),
};

const getSubcategoryById = {
  params: Joi.object().keys({
    subcategoryId: Joi.string().required(),
  }),
};

const deleteSubcategoryById = {
  params: Joi.object().keys({
    subcategoryId: Joi.string().required(),
  }),
};

export default {
  createSubcategory,
  getSubcategoryById,
  deleteSubcategoryById,
  updateSubcategoryById,
};
