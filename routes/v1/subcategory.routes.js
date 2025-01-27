import express from 'express';
import subCategoryValidation from '../../validation/subcategory.validation.js';
import subCategoryController from '../../controllers//v1/subcategory.controller.js';
import validate from '../../middleware/validate.js';

const subCategoryRoute = express.Router();

subCategoryRoute.post('/', validate(subCategoryValidation.createSubcategory), subCategoryController.createSubCategory);
subCategoryRoute.get('/', subCategoryController.getSubCategories);
subCategoryRoute.get('/:subcategoryId', validate(subCategoryValidation.getSubcategoryById), subCategoryController.getSubCategoryById);
subCategoryRoute.put('/:subcategoryId', validate(subCategoryValidation.updateSubcategoryById), subCategoryController.updateSubCategoryById);
subCategoryRoute.delete('/:subcategoryId', validate(subCategoryValidation.deleteSubcategoryById), subCategoryController.deleteSubCategoryById);

export default subCategoryRoute;
