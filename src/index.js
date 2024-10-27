import express from "express"
import { config } from "dotenv"
import indexRoutes from "./routes/routes.js"
const app = express()
config()
app.use(express.json())



const PORT = process.argv.PORT ?? 3000


app.use(indexRoutes)

app.use((e, req, res, next) => {
  console.error("Error stack:", e.stack);
  res.status(500).send(`❌ Ha ocurrido un error: ${e.message}`);
});

app.use((req, res, next) => {
  res.status(404).send(`❌ La página no se encuentra`)
})

app.listen(PORT, () => {
  console.log("Server is listening on port ", 3000)
})

