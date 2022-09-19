const { connect } = require("./connectDB.js");
const Todo = require("./TodoModel.js");

const createTodo = async() => {
    try{
        await connect();
        const todo = await Todo.addTask({
            title: "First Item",
            dueDate: new Date(),
            completed: false,
        });
        console.log(`created todo with id : ${todo.id}`)
    }
    catch(error)
    {
        console.log(error);
    }
};

const countItems = async () =>{
    try{
        const totalCount = await Todo.count();
        console.log(`find ${totalCount} items in the table!`);
    }
    catch(error)
    {
        console.log(error);
    }
};

const getAllTodos = async () =>{
    try{
        const todos = await Todo.findAll({
            where:{
                completed: true,
            },
            order:[
                ['id','DESC'] 
            ]
        });
        const todoList = todos.map(todo => todo.displayableString()).join("\n");
        console.log(todoList);
    }
    catch(error)
    {
        console.log(error);
    }
};

const getSingleTodo = async () =>{
    try{
        const todo = await Todo.findOne({
            where:{
                completed: true,
            },
            order:[
                ['id','DESC'] 
            ]
        });
        console.log(todo.displayableString());
    }
    catch(error)
    {
        console.log(error);
    }
};

const updateItem = async (id) =>{
    try{
        await Todo.update({completed: true},{
            where:{
                id: id
            }
        });
    }
    catch(error){
        console.log(error);
    }

};

const deleteItem = async (id) =>{
    try{
       const deleteItemCount = await Todo.destroy({
            where:{
                id: id
            }
        });
        console.log(`deleted ${deleteItemCount} rows!`);
    }
    catch(error){
        console.log(error);
    }

};


(async()=>{
    // await createTodo();
    // await countItems();
    await getAllTodos();
    await getSingleTodo();
    await updateItem(2);
    await deleteItem(2);
    await getAllTodos();
   
})();