import itemServices from '../../services/v1/item.service.js';

const createItem = async (req, res) => {
  const response = await itemServices.createItem(req.body);
  res.json(response);
};

const getItems = async (req, res) => {
  const { name, itemId } = req.query;
  const response = await itemServices.getItems(name, itemId);
  res.json(response);
};

const getItemsById = async (req, res) => {
  const response = await itemServices.getItemsById(req.params.itemId);
  res.json(response);
};

const updateItemById = async (req, res) => {
  const response = await itemServices.updateItemById(req.params.itemId, req.body);
  res.json(response);
};

const deleteItemById = async (req, res) => {
  const response = await itemServices.deleteItemById(req.params.itemId);
  res.json(response);
};

export default {
  createItem,
  getItemsById,
  getItems,
  deleteItemById,
  updateItemById,
};
