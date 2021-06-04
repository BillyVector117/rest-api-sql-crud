import { Router } from 'express';
import { getProducts, newProduct, getProductById, deleteProductById, getTotalProducts, updateProduct } from "../controllers/productsController"
const router = Router();


// define routes: (Each route-Response is at Controllers directory)
router.get('/products', getProducts)
router.post('/products', newProduct)
router.get('/products/count', getTotalProducts) // To know how many existing products
router.get('/products/:id', getProductById)
router.delete('/products/:id', deleteProductById)
router.put('/products/:id', updateProduct)


export default router

