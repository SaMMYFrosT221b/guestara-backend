import express from 'express';
import categoryValidation from '../../validation/category.validation.js';
import categoryController from '../../controllers//v1/category.controller.js';
import validate from '../../middleware/validate.js';
const categoryRoute = express.Router();

categoryRoute.post('/', validate(categoryValidation.createCategory), categoryController.createCategory);
categoryRoute.get('/', categoryController.getCategories);
categoryRoute.get('/:categoryId', validate(categoryValidation.getCategoryById), categoryController.getCategoryById);
categoryRoute.put('/:categoryId', validate(categoryValidation.updateCategoryById), categoryController.updateCategoryById);
categoryRoute.delete('/:categoryId', validate(categoryValidation.deleteCategoryById), categoryController.deleteCategoryById);

export default categoryRoute;
