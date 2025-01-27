import subCategoryServices from '../../services/v1/subcategory.service.js';

const createSubCategory = async (req, res) => {
  const response = await subCategoryServices.createSubCategory(req.body);
  res.json(response);
};

const getSubCategories = async (req, res) => {
  const { name, subcategoryId } = req.query;
  const response = await subCategoryServices.getSubCategories(name, subcategoryId);
  res.json(response);
};

const getSubCategoryById = async (req, res) => {
  const response = await subCategoryServices.getSubCategoryById(req.params.subcategoryId);
  res.json(response);
};

const updateSubCategoryById = async (req, res) => {
  const response = await subCategoryServices.updateSubCategoryById(req.params.subcategoryId, req.body);
  res.json(response);
};

const deleteSubCategoryById = async (req, res) => {
  const response = await subCategoryServices.deleteSubCategoryById(req.params.subcategoryId);
  res.json(response);
};

export default {
  createSubCategory,
  getSubCategoryById,
  getSubCategories,
  deleteSubCategoryById,
  updateSubCategoryById,
};
