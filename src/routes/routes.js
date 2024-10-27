import { Router } from "express"
import { getAlumnos, getCursos, getProfesor } from "../services/jsonService.js"
import { fileURLToPath } from "node:url"
import { join, dirname } from "node:path"

const __dirname = dirname(fileURLToPath(import.meta.url))
const file = join(__dirname, "../public/index.html")



const router = Router()


router.get("/", async (req, res, next) => {
  try {
    res.sendFile(file)
  } catch (e) {
    next(e)
  }
})

router.get("/profesores", async (req, res, next) => {
  try {
    res.send(await getProfesor())
  } catch (e) {
    next(e)
  }
})

router.post("/profesores", async (req, res, next) => {
  try {
    res.send(req.body)
  } catch (e) {
    next(e)
  }
})

router.get("/alumnos", async (req, res, next) => {
  try {
    const data = await getAlumnos()
    res.send(data)
  } catch (e) {
    next(e)
  }
})

router.get("/cursos", async (req, res, next) => {
  try {
    const data = await getCursos()
    res.send(data)
  } catch (e) {
    next(e)
  }
})


export default router
