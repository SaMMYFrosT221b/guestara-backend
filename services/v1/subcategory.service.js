import SubCategory from '../../models/subcategory.model.js';

const createSubCategory = async (subCategoryData) => {
  try {
    const subcategory = await SubCategory.create(subCategoryData);
    return {
      status: true,
      message: 'Sub Category created successfully',
      data: subcategory,
    };
  } catch (error) {
    return {
      status: false,
      message: `Error: ${error}`,
    };
  }
};

const getSubCategories = async (name, subcategoryId) => {
  try {
    if (name) {
      const subcategories = await SubCategory.find({ name: { $regex: name, $options: 'i' } }).populate('category');
      return {
        status: true,
        message: 'Sub Category fetched successfully',
        data: subcategories,
      };
    }

    if (subcategoryId) {
      const subcategory = await SubCategory.findOne({ _id: subcategoryId }).populate('category');
      if (!subcategory) {
        return { status: false, message: 'Sub Category not found' };
      }
      return {
        status: true,
        message: 'Sub Category fetched successfully',
        data: subcategory,
      };
    }
    const subcategories = await SubCategory.find().populate('category');
    return {
      status: true,
      message: 'Sub Category fetched successfully',
      data: subcategories,
    };
  } catch (error) {
    return {
      status: false,
      message: `Error: ${error}`,
    };
  }
};

const getSubCategoryById = async (subcategoryId) => {
  try {
    const subcategory = await SubCategory.findOne({ _id: subcategoryId }).populate('category');
    if (!subcategory) {
      return { status: false, message: 'Sub Category not found' };
    }
    return {
      status: true,
      message: 'Sub Category created successfully',
      data: subcategory,
    };
  } catch (error) {
    return {
      status: false,
      message: `Error: ${error}`,
    };
  }
};

const updateSubCategoryById = async (subcategoryId, subCategoryData) => {
  try {
    const subcategory = await SubCategory.findOne({ _id: subcategoryId });
    if (!subcategory) {
      return { status: false, message: 'Sub Category not found' };
    }
    await SubCategory.updateOne({ _id: subcategoryId }, subCategoryData);
    return { status: true, message: 'Sub Category updated.' };
  } catch (error) {
    return {
      status: false,
      message: `Error: ${error}`,
    };
  }
};

const deleteSubCategoryById = async (subcategoryId) => {
  try {
    const subcategory = await SubCategory.findOne({ _id: subcategoryId });
    if (!subcategory) {
      return { status: false, message: 'Sub Category not found' };
    }
    await SubCategory.deleteOne({ _id: categosubCategoryIdryId });
    return { status: true, message: 'Sub Category deleted.' };
  } catch (error) {
    return {
      status: false,
      message: `Error: ${error}`,
    };
  }
};

export default {
  createSubCategory,
  getSubCategories,
  getSubCategoryById,
  deleteSubCategoryById,
  updateSubCategoryById,
};
