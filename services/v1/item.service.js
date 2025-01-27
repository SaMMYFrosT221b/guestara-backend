import Item from '../../models/item.model.js';

const createItem = async (itemData) => {
  try {
    const item = new Item(itemData);
    await item.save();
    return {
      status: true,
      message: 'Item created successfully',
      data: item,
    };
  } catch (error) {
    return {
      status: false,
      message: `Error: ${error}`,
    };
  }
};

const getItems = async (name, itemId) => {
  try {
    if (name) {
      const items = await Item.find({ name }).populate({
        path: 'subcategory',
        populate: { path: 'category' }, // Populate the category inside subcategory
      });
      return {
        status: true,
        message: 'Items fetched successfully',
        data: items,
      };
    }
    if (itemId) {
      const item = await Item.findOne({ _id: itemId }).populate({
        path: 'subcategory',
        populate: { path: 'category' }, // Populate the category inside subcategory
      });
      if (!item) {
        return { status: false, message: 'Item not found' };
      }
      return {
        status: true,
        message: 'Item fetched successfully',
        data: item,
      };
    }
    const items = await Item.find().populate({
      path: 'subcategory',
      populate: { path: 'category' }, // Populate the category inside subcategory
    });
    return {
      status: true,
      message: 'Items fetched successfully',
      data: items,
    };
  } catch (error) {
    return {
      status: false,
      message: `Error: ${error}`,
    };
  }
};

const getItemsById = async (itemId) => {
  try {
    const item = await Item.findOne({ _id: itemId }).populate({
      path: 'subcategory',
      populate: { path: 'category' }, // Populate the category inside subcategory
    });
    if (!item) {
      return { status: false, message: 'Item not found' };
    }
    return {
      status: true,
      message: 'Item created successfully',
      data: item,
    };
  } catch (error) {
    return {
      status: false,
      message: `Error: ${error}`,
    };
  }
};

const updateItemById = async (itemId, itemData) => {
  try {
    const item = await Item.findOne({ _id: itemId });
    if (!item) {
      return { status: false, message: 'Item not found' };
    }
    await Item.updateOne({ _id: itemId }, itemData);
    return { status: true, message: 'Item updated successfully' };
  } catch (error) {
    return {
      status: false,
      message: `Error: ${error}`,
    };
  }
};

const deleteItemById = async (itemId) => {
  try {
    const item = await Item.findOne({ _id: itemId });
    if (!item) {
      return { status: false, message: 'Item not found' };
    }
    await Item.deleteOne({ _id: itemId });
    return { status: true, message: 'Item deleted.' };
  } catch (error) {
    return {
      status: false,
      message: `Error: ${error}`,
    };
  }
};

export default {
  createItem,
  getItems,
  getItemsById,
  deleteItemById,
  updateItemById,
};
