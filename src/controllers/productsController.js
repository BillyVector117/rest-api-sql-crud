import { connection, sql, queries } from "../database"

// Get All
export const getProducts = async (req, res) => {
    try {
        const pool = await connection()
        const result = await pool.request().query(queries.getProducts)
        console.log(result)
        res.json(result.recordset)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}
// Post One
export const newProduct = async (req, res) => {
    const { name, description } = req.body // ES6
    let { quantity } = req.body
    // Validate user sent data
    if (name == null || description == null) {
        res.json('Bad request, fill all fields')
    }
    if (quantity == null) quantity = 0;
    try {
        // Insert into 'Products' table the req.body data
        console.log(name, description)
        const pool = await connection()
        await pool.request()
            .input("name", sql.VarChar, name)
            .input("description", sql.Text, description)
            .input("quantity", sql.Int, quantity)
            .query(queries.addProduct)
        res.json("New product!")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }

}
// Get One
export const getProductById = async (req, res) => {
    const { id } = req.params // Access to Url-Params
    try {
        console.log(id)
        const pool = await connection()
        const result = await pool.request()
            .input("id", sql.Int, id)
            .query(queries.getProductById)
        console.log(result)
        res.json(result.recordset[0]) // [0] Optional
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }

}
// Delete One
export const deleteProductById = async (req, res) => {
    const { id } = req.params // Access to Url-Params
    try {
        console.log(id)
        const pool = await connection()
        const result = await pool.request()
            .input("id", sql.Int, id)
            .query(queries.deleteProductById)
        console.log(result)
        res.json('Successfully deleted!') // [0] Optional
        // res.status(204) // Option #2
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }

}
// Count all products
export const getTotalProducts = async (req, res) => {
    try {
        const pool = await connection()
        const result = await pool.request()
            .query(queries.getTotalProducts)
        console.log(result)
        res.json(result.recordset[0]['']) // Return the value of prop '' with Index == 1
        // res.status(204) // Option #2
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }

}
// Update a product
export const updateProduct = async (req, res) => {
    try {
        const { name, description, quantity } = req.body // ES6
        const { id } = req.params;
        // Validate user sent data
        if (name == null || description == null || quantity == null) {
           return res.status(400).json('Bad request, fill all fields')
        }

        const pool = await connection()
        await pool.request()
            .input("name", sql.VarChar, name)
            .input("description", sql.Text, description)
            .input("quantity", sql.Int, quantity)
            .input("id", sql.Int, id) // From Url-Params
            .query(queries.updateProduct)
            console.log("Product successfully updated!")
        res.json(name, description, quantity)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }

}


