import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Dashboard from '../pages/Dashboard';

const Todo = () => {

   const [refreshTrigger, setRefreshTrigger] = useState(0);

   const [tasks, setTasks] = useState([]);
   const [taskInput, setTaskInput] = useState("");

   const[istodo , setIsTodo]= useState(false)




   const handleSubmit = async (e) => {
      e.preventDefault();

      if (taskInput.trim() === "") return;



      const res = await axios.post('http://localhost:3000/api/v1/content/addTodo',
         {
            title: taskInput, // This is the body
         },
         {
            headers: {
               authorization: localStorage.getItem("token"),
            },
         }
      )


      // setTasks([...tasks, { title: res.data.data.title } ,{_id:res._id}]);
     setTaskInput("");
     setIsTodo(true)
      setRefreshTrigger(prev => prev + 1)

   }




   const toggleTask = (index) => {
      const updated = tasks.map((task, i) =>
         i === index ? { ...task, completed: !task.completed } : task
      );
      setTasks(updated);
   };

   const deleteTask = async (index) => {


      await axios.delete('http://localhost:3000/api/v1/content/deleteTodo',
         {

            headers: {
                "Authorization": localStorage.getItem("token") // Including the token from localStorage for authentication
            },
            params:
               { 'id': index }
         })

      setRefreshTrigger(prev => prev + 1)
   }


   useEffect(() => {

      console.log("side effect")
      const todoData = axios.get('http://localhost:3000/api/v1/content/getTodo', { // Making GET request to the backend API
         headers: {
            "Authorization": localStorage.getItem("token") // Including the token from localStorage for authentication
         }
      })
         .then((response) => {
            // If the request is successful, update the contents state with the fetched data
            console.log(response)
            if(response.data.success){
            setTasks(()=>response.data.data)
            setIsTodo(()=>true)
            console.log(istodo)
         }
         else{
            setIsTodo(false)
         }


         })
         .catch((error) => {
            // Handle any error that occurs during the request (optional)
            console.error("Error fetching content:", error);
         });

   }, [refreshTrigger]);


   return (
// cahnges made here
      <div className="todo  md:block fixed z-5 top-0 right-0 bg-zinc-800 text-white shadow-md p-4 pt-[4px] w-full max-w-[230px] mx-auto h-screen transform translate-x-full transition-transform duration-300 ease-in-out lg:translate-x-0">
         
         <div className='overflow-hidden h-15 '>
            <img src="/icon/giphy.gif" alt="" />
            {/* <img src="/icon/200.webp" alt="" /> */}
         </div>

         <h2 className="text-xl font-bold pt-3 mb-4 text-center text-orange-500">
{/* icon add */}
         <i className="fa-solid fa-list-check text-white pr-2"></i>
            To Do List</h2>

         {/* Form */}
         <form onSubmit={handleSubmit} className="flex gap-2 mb-4 flex-col ">
            <input
               type="text"
               className="flex-1 border border-zinc-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
               placeholder="Add a new task..."
               value={taskInput}
               onChange={(e) => setTaskInput(e.target.value)}
            />
            <button
               type="submit"
               className="bg-orange-500 text-white py-1 rounded-md hover:bg-orange-600 active:bg-orange-600 active:scale-96 transition-transform duration-200"
            >
               Add
            </button>
         </form>

         {/* Task List */}
        {istodo?<ul className="space-y-2 max-h-90 overflow-y-auto hide-scrollbar">


            {
               tasks.map((task) => (
                  <li
                     key={task._id}
                     className={`flex justify-between items-center p-2 border border-zinc-300 rounded-md ${task.completed ? "bg-green-100 line-through" : ""
                        }`}
                  >

                     <span
                        className="cursor-pointer"
                        onClick={() => toggleTask(index)}
                     >
                        {task.title}
                     </span>
                     <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => deleteTask(task._id)}
                     >
                        <i className="fa-solid fa-trash"></i>
                     </button>
                  </li>
               ))}
         </ul>:<div className='flex text-4xl text-black'>No todos to show</div>} 
      </div>
   );
};

export default Todo;
