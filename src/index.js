import express from "express"
import { fileURLToPath } from "node:url"
import { join, dirname } from "node:path"
import { config } from "dotenv"
import { getAlumnos, getCursos, getProfesor } from "./services/jsonService.js"
const app = express()
config()
app.use(express.json())

const __dirname = dirname(fileURLToPath(import.meta.url))

const file = join(__dirname, "public", "index.html")

const PORT = process.argv.PORT ?? 3000


app.get("/", async (req, res, next) => {
  try {
    res.sendFile(file)
  } catch (e) {
    next(e)
  }
})

app.get("/profesores", async (req, res, next) => {
  try {
    res.send(await getProfesor())
  } catch (e) {
    next(e)
  }
})

app.post("/profesores", async (req, res, next) => {
  try {
    res.send(req.body)
  } catch (e) {
    next(e)
  }
})

app.get("/alumnos", async (req, res, next) => {
  try {
    const data = await getAlumnos()
    res.send(data)
  } catch (e) {
    next(e)
  }
})

app.get("/cursos", async (req, res, next) => {
  try {
    const data = await getCursos()
    res.send(data)
  } catch (e) {
    next(e)
  }
})

app.use((e, req, res, next) => {
  console.error("Error stack:", e.stack);
  res.status(500).send(`❌ Ha ocurrido un error: ${e.message}`);
});

app.listen(PORT, () => {
  console.log("Server is listening on port ", 3000)
})

