import {pool} from '../db.js';

export const getProviders = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM providers");
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

export const getAllProviders = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM providers");
        return result.length;
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

export const getProvider = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM Providers where prov = ?",
        req.params.id, (error, results, fields) => {
            if (error) return res.json({ message: error });
            console.log(results);
        });
        
        if(result.length === 0) {
            res.status(404).json("Provider not found")
        }
        res.json(result[0]);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

export const createProvider = async (req, res) => {
    try {
        const provider_info = req.body;
        if(provider_info.prov === "") {
            const response = await getAllProviders();
            provider_info.prov = "PROV-" + (response + 1);
        }
        const [result] = await pool.query("INSERT INTO Providers SET ?", provider_info, (error, results, fields) => {
            if (error) return res.json({ message: error });
            console.log(results);
        });
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

export const updateProvider = async (req, res) => {
    try {
        const [result] = await pool.query("UPDATE providers SET ? WHERE id = ?", [
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

export const deleteProvider = async (req, res) => {
    try {
        console.log(req.params.id);
        const [result] = await pool.query("DELETE FROM providers WHERE id = ?", [req.params.id], function(error, result, fields) {
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