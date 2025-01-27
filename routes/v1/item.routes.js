import express from 'express';
import itemValidation from '../../validation/item.validation.js';
import itemController from '../../controllers/v1/item.controller.js';
import validate from '../../middleware/validate.js';

const itemRoute = express.Router();

itemRoute.post('/', validate(itemValidation.createItem), itemController.createItem);
itemRoute.get('/', itemController.getItems);
itemRoute.get('/:itemId', validate(itemValidation.getItemById), itemController.getItemsById);
itemRoute.put('/:itemId', validate(itemValidation.updateItemById), itemController.updateItemById);
itemRoute.delete('/:itemId', validate(itemValidation.deleteItemById), itemController.deleteItemById);

export default itemRoute;
