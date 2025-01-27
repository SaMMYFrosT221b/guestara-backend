import express from 'express';
import categoryRouter from './v1/category.routes.js';
import itemRouter from './v1/item.routes.js';
import subCategoryRouter from './v1/subcategory.routes.js';

const rootRouter = express.Router();

rootRouter.use('/category', categoryRouter);
rootRouter.use('/sub-category', subCategoryRouter);
rootRouter.use('/item', itemRouter);

export default rootRouter;
