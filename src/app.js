import express from 'express';
import config from "./config"
import productsRoutes from './routes/products.routes'
const app = express();
// SETTINGS
app.set('port', config.port) // Use port var else 3000


// MIDDLEWARES
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// ROUTES
app.use(productsRoutes);




export default app




