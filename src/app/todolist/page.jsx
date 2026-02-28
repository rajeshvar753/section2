'use client';
import { Trash2 } from 'lucide-react';
import React, { useState } from 'react'

const todoList = () => {

    // let count = 1;

    // const [count, setCount] = useState(1);

    const [taskList, setTaskList] = useState([]);

    const addNewTask = (e) => {
        if (e.code === 'Enter') {
            console.log(e.target.value);

            const newTask = { task: e.target.value, completed: false };

            setTaskList([newTask, ...taskList]);

            e.target.value = '';
        }
    };

    const deleteTask = (index) => {
        const temp = taskList;
        temp.splice(index, 1);
        setTaskList([...temp]);
    }

    return (
        <div className='h-screen bg-gray-100'>
            {/* <h1 className='text-3xl font-bold'>{count}</h1>

            <button className='border p-3'
                onClick={() => {
                    setCount(count + 1);
                    console.log(count);
                }}
            >Click Me</button> */}

            <div className='container mx-auto py-10'>
                <h1 className='text-center font-bold text-4xl mb-5'>Todo List</h1>
                <div className='bg-white rounded-xl border'>
                    <div className='p-4 border-b-1'>
                        <input
                            onKeyDown={addNewTask}
                            type="text"
                            className='py-2 px-4 bg-gray-200 w-full rounded-lg'
                            placeholder='Enter Your Task here..'
                        />
                    </div>
                    <div className='p-4'>

                        {
                            taskList.length === 0 ? (
                                <p className='text-gray-400 font-bold text-center text-2xl'>
                                    🥲 No Todos Here
                                </p>
                               
                            ) : (
                                taskList.map((obj, index) => {
                                    return <div key={index}
                                        className='border border-gray-400 p-4 mb-4
                                        rounded-xl shadow-lg flex justify-between items-center'>
                                      
                                      <div className='w-1/3 flex-gap-3'>
                                      <input type='checkbox'
                                      onChange={(e)=>{
                                        const tepm = taskList;
                                        tepm[index].completed = e.target.checked;
                                        setTaskList([...tepm]);
                                      } }
                    
                                        />
                                        <p className='text-lg'>
                                            {obj.task}
                                        </p>

                                        </div>
                                        {
                                       obj.completed ?(
                                            <p className='text-green-500 font-bold'>Completed</p>
                                        ) : (
                                            <p className='text-red-500 font-bold'>Not Completed</p>
                                       )
                        }
                                        <button
                                            onClick={() => { deleteTask(index) }}
                                            className='bg-red-500 text-white p-2 rounded-md'>
                                            <Trash2 />
                                        </button>
                                    </div>
                                })
                            )
                        }

                    </div>
                </div>
            </div>

        </div>
    )
}

export default todoList;