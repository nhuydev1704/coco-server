import express from 'express';
// import auth from '../middleware/auth'
import productController from '../controllers/productController.js';

const router = express.Router();

router.route('/product').get(productController.get).post(productController.create);

router
    .route('/product/:id')
    .get(productController.getById)
    .put(productController.update)
    .delete(productController.delete);

export default router;
