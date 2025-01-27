import Catergory from '../../models/category.model.js';

const createCategory = async (categoryData) => {
  try {
    const category = await Catergory.create(categoryData);
    return {
      status: true,
      message: 'Category created successfully',
      data: category,
    };
  } catch (error) {
    return {
      status: false,
      message: `Error: ${error}`,
    };
  }
};

const getCategories = async (name, categoryId) => {
  try {
    if (name) {
      const categories = await Catergory.find({ name: name });
      return {
        status: true,
        message: 'Category fetched successfully',
        data: categories,
      };
    }

    if (categoryId) {
      const category = await Catergory.findOne({ _id: categoryId });
      if (!category) {
        return { status: false, message: 'Category not found' };
      }
      return {
        status: true,
        message: 'Category created successfully',
        data: category,
      };
    }
    const categories = await Catergory.find();
    return {
      status: true,
      message: 'Category fetched successfully',
      data: categories,
    };
  } catch (error) {
    return {
      status: false,
      message: `Error: ${error}`,
    };
  }
};

const getCategoryById = async (categoryId) => {
  try {
    const category = await Catergory.findOne({ _id: categoryId });
    if (!category) {
      return { status: false, message: 'Category not found' };
    }
    return {
      status: true,
      message: 'Category created successfully',
      data: category,
    };
  } catch (error) {
    return {
      status: false,
      message: `Error: ${error}`,
    };
  }
};

const updateCategoryById = async (categoryId, categoryData) => {
  try {
    const category = await Catergory.findOne({ _id: categoryId });
    if (!category) {
      return { status: false, message: 'Category not found' };
    }
    await Catergory.updateOne({ _id: categoryId }, categoryData);
    return { status: true, message: 'Category updated.' };
  } catch (error) {
    return {
      status: false,
      message: `Error: ${error}`,
    };
  }
};

const deleteCategoryById = async (categoryId) => {
  try {
    const category = await Catergory.findOne({ _id: categoryId });
    if (!category) {
      return { status: false, message: 'Category not found' };
    }
    await Catergory.deleteOne({ _id: categoryId });
    return { status: true, message: 'Category deleted.' };
  } catch (error) {
    return {
      status: false,
      message: `Error: ${error}`,
    };
  }
};

export default {
  createCategory,
  getCategories,
  deleteCategoryById,
  getCategoryById,
  updateCategoryById,
};
