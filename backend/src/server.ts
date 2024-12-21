import express from 'express'
import { MongoClient, ServerApiVersion } from 'mongodb'

const uri = 'mongodb+srv://ricardohl:root@todo-list.9dnql.mongodb.net/?retryWrites=true&w=majority&appName=ToDo-List'
const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict:true,
        deprecationErrors:true,
    }
})

client.connect().then(() => {
    console.log('Connected to MongoDB')
}).catch(err => {
    console.error(err)
    client.close()
})

const db = client.db('todolist')
const collection = db.collection('tasks')



// Obtener todas las tareas
app.get('/tasks', (req, res) => {
    res.send('Hello World')

})

// Crear una nueva tarea
app.post('/api/tasks', async (req, res) => {
    // Extract the task from the body request
    const task = req.body
    if(!task) res.status(500).json( {message: 'Task is required'})
    try {
        const task = req.body
        const insert = await collection.insertOne({
        id: task.id,
        title: task.title,
        description: task.description,
        completed: task.completed || false
    })
    console.log(insert)
    insert ? res.status(200).json({ message: 'Task created'}) : res.status(500).json({ message: 'Taks is required' })
    
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: `Error creating task ${error}`})
    }
    
})

// Actualizar una tarea
app.put('/tasks/:id', (req, res) => {
    res.send('actualizar tarea')
})

// Eliminar una tarea
app.delete('/tasks/:id', (req, res) => {
    res.send('Eliminar una tarea')
})

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})