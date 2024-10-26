
import { readFile } from "node:fs/promises"


const getData = async () => {
  const response = await readFile("./src/db.json", "utf-8")
  return JSON.parse(response)
}


const data = await getData()


export const getProfesor = async () => {
  return data.Profesores || null;
}

export const getAlumnos = async () => {
  return data.Alumnos || null;
}

export const getCursos = async () => {
  return data.Cursos || null;
}