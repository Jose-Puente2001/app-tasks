import { pool } from '../db.js'

export const getTasks = async(req, res) => {

    const [result] = await pool.query(
      "SELECT * FROM tasks"
   )
   
  res.json(result)
}

export const getTask = (req, res) => {

   res.send('obtener una tarea')
}

export const createTask = async (req, res) => {

const { title, description } = req.body;
    const [result] = await pool.query(
      "INSERT INTO tasks(title, description) VALUES (?, ?)",
      [title, description]
    );
    res.json({
      id: result.insertId,
      title,
      description,
    });

}

export const updateTask = (req, res) => {

   res.send('actualizando tarea')
}

export const deleteTask = (req, res) => {

   res.send('eliminar tarea')
}