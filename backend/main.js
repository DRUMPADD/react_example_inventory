import express from "express";
import morgan from "morgan";
import cors from "cors";
import { PORT } from './config.js';
import productRoutes from './routes/products.routes.js'
import providerRoutes from './routes/providers.routes.js'

const app = express();

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

app.use(productRoutes);
app.use(providerRoutes);

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`);
})