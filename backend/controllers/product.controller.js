import {pool} from '../db.js';

export const getProducts = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM products");
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

export const getProduct = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM products");
        
        if(result.length === 0) {
            res.status(404).json("Product not found")
        }
        res.json(result[0]);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

export const createProduct = async (req, res) => {
    try {
        const {product_n, quantity} = req.body;
        console.log(product_n, quantity);
        const [result] = await pool.query("INSERT INTO products (name_p, stuck) values(?, ?)", [
            product_n,
            quantity
        ], (error, results, fields) => {
            if (error) return res.json({ message: error });
            console.log(results);
        });
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

export const updateProduct = async (req, res) => {
    try {
        const [result] = await pool.query("UPDATE products SET ? WHERE id = ?", [
            req.body,
            req.params.id
        ], function (error, result, fields) {
            if(error) return res.json(error);
            console.log(result);
        });

        res.json(result);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

export const deleteProduct = async (req, res) => {
    try {
        console.log(req.params.id);
        const [result] = await pool.query("DELETE FROM products WHERE id = ?", [req.params.id], function(error, result, fields) {
            if(error) return res.json(error);
            console.log(result);
        });
        if(result.affectedRows === 0)
            return res.status(404).json({message: "Stuck not found"})
        return res.sendStatus(204)
    } catch (error) {
        res.status(500).json({ message: error });
    }
}