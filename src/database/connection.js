import sql from "mssql"
import config from "../config"
const dbSettings = {
    user: config.dbUser,
    password: config.dbPassword,
    server: config.dbServer,
    database: config.dbDatabase,
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
}
/* const result = await pool.request().query("SELECT 1")
    console.log(result) */
export async function connection() {
    try {
        const pool = await sql.connect(dbSettings)
        return pool
    } catch (error) {
        console.log('ERRRRROR',error)
    }
}
export { sql }
