import categoryServices from '../../services/v1/category.service.js';

const createCategory = async (req, res) => {
  const response = await categoryServices.createCategory(req.body);
  res.json(response);
};

const getCategories = async (req, res) => {
  const { name, categoryId } = req.query;
  const response = await categoryServices.getCategories(name, categoryId);
  res.json(response);
};

const getCategoryById = async (req, res) => {
  const response = await categoryServices.getCategoryById(req.params.categoryId);
  res.json(response);
};

const updateCategoryById = async (req, res) => {
  const response = await categoryServices.updateCategoryById(req.params.categoryId, req.body);
  res.json(response);
};

const deleteCategoryById = async (req, res) => {
  const response = await categoryServices.deleteCategoryById(req.params.categoryId);
  res.json(response);
};

export default {
  createCategory,
  getCategoryById,
  getCategories,
  deleteCategoryById,
  updateCategoryById,
};
