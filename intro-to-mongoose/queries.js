/*------------------------------- Starter Code -------------------------------*/

const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  name:String,
  isComplete:Boolean
})

//the model
const Todo = mongoose.model('Todo',todoSchema)


async function connect(){
  // Connect to MongoDB using the MONGODB_URI specified in our .env file.
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to MongoDB');

  // Call the runQueries function, which will eventually hold functions to work
  // with data in our db.
  await runQueries()

  // Disconnect our app from MongoDB after our queries run.
  await mongoose.disconnect();
  console.log('Disconnected from MongoDB');

  // Close our app, bringing us back to the command line.
  process.exit();
};







// ***** CRUD ******


// C: create
async function createTodo(){
  const newTodo = {
    name: "Do Mongoose Homework",
    isComplete: true
  }

  const createdTodo = await Todo.create(newTodo)

  console.log("created new todo: ", createdTodo)
}


// R: read
async function getAllTodos(){

  const allTodos = await Todo.find()
  console.log("All Todos", allTodos)
}

async function getOneTodo() {
  const oneTodo = await Todo.findOne({name: "Do Mongoose Homework"})
  console.log(oneTodo)
}

async function getTodoById() {
  const oneTodoById = await Todo.findById({id: "Do Mongoose Homework"})
  console.log(oneTodoById)
}



// U: update
async function updateOneTodo() {
  const updatedTodo = await Todo.findByIdAndUpdate('6772c1cc5e546d52e2bdd62c', {name: 'NAME HAS CHANGED!'})
}

async function updateManyTodos() {
  const updatedAllTodos = await Todo.updateMany({isComplete: true},{name: "name changed again for all now!"})
}

async function updateOneById() {
  const updatedOneById = await Todo.findByIdAndUpdate("6772c1cc5e546d52e2bdd62c", {isComplete: false})
}



// D: Delete
async function deleteOneTodo(){
  const deletedTodo = await Todo.deleteOne({isComplete:false})
  console.log(deletedTodo)
}

async function deleteTodoById(){
  const deletedTodo = await Todo.findByIdAndDelete("6772caac6ba3043b2dc7984d")
  console.log(deletedTodo)
}



const runQueries = async () => {
  console.log('Queries running.')
  // The functions calls to run queries in our db will go here as we write them.

  // await createTodo()
  // await getAllTodos()
  // await updateOneTodo()
  // await updateManyTodos()
  // await updateOneById()
  
  
};

connect() 
/*------------------------------ Query Functions -----------------------------*/