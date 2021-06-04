import app from "./app";
import "./database/connection"
app.get("port")

app.listen(app.get("port"))
console.log("Server on port: ", app.get('port'))