import express from 'express';
import { getAddProduct, getProducts, postAddProduct } from '../controllers/adminController';


const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', getAddProduct);

// /admin/products => GET
router.get('/products', getProducts);

// /admin/add-product => POST
router.post('/add-product', postAddProduct);

export default router;
