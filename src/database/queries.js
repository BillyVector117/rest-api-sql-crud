export const queries = {
    getProducts: "SELECT * FROM Products",
    addProduct: "INSERT INTO Products (name, description, quantity) VALUES (@name, @description, @quantity)",
    getProductById: "SELECT * FROM Products WHERE id = @id",
    deleteProductById: "DELETE FROM Products WHERE id = @id",
    getTotalProducts: "SELECT COUNT(*) FROM Products",
    updateProduct: "UPDATE Products SET Name = @name, Description = @description, Quantity = @quantity WHERE id = @id"
}