import Joi from 'joi';

const createItem = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    subcategory: Joi.string(),
    image: Joi.string(),
    description: Joi.string(),
    tax_applicability: Joi.boolean(),
    tax: Joi.number(),
    base_amount: Joi.number().required(),
    discount: Joi.number().required(),
  }),
};

const getItemById = {
  params: Joi.object().keys({
    itemId: Joi.string().required(),
  }),
};

const updateItemById = {
  params: Joi.object().keys({
    itemId: Joi.string().required(),
  }),
  body: Joi.object().keys({
    name: Joi.string(),
    subcategory: Joi.string(),
    image: Joi.string(),
    description: Joi.string(),
    tax_applicability: Joi.boolean(),
    tax: Joi.number(),
    base_amount: Joi.number(),
    discount: Joi.number(),
  }),
};

const deleteItemById = {
  params: Joi.object().keys({
    itemId: Joi.string().required(),
  }),
};

export default {
  createItem,
  getItemById,
  deleteItemById,
  updateItemById,
};
