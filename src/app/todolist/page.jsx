'use client'
import React, { useState } from 'react'

const todolist = () => {


    // let count = 1;

    // const [count, setcount] = useState(1)

    const [taskList, setTaskList] = useState([
        { task: 'Dhoodh lao', completed: false },
        { task: 'Dhaniya lao', completed: false },
        { task: 'Ata lao', completed: false },
      
    ]);

    const addNewTask = (e)=>{
        if(e.code === 'Enter'){
            console.log(e.target.value);

            const newTask = {task: e.target.value, completed: false};
            setTaskList([newTask, ...taskList])

            e.target.value = '';
        }
    }

    return (
        <div className='h-screen bg-gray-100'>

            {/* <h1 className='text-3xl font-bold'>{count}</h1>
            <button className='border p-3'
                onClick={() => {
                    setcount(count + 1);
                    console.log(count);
                }
                }
            >clickme</button>

             <h1 className='text-3xl font-bold'>{count}</h1>
            <button className='border p-3'
                onClick={() => {
                    setcount(count - 1);
                    console.log(count);
                }
                }
            >clickme</button>*/}


            <div className='container mx-auto py-10'>
                <h1 className='text-center font-bold text-4xl'>Todo List</h1>
                <div className='bg-white rounded-xl border'>
                    <div className='p-4 border-b-1'>
                        <input
                        onKeyDown={addNewTask} 
                        type='text'
                            className='py-2 bg-gray-200 w-full rounded-lg'
                            placeholder='Enter Your Task Here...'
                        />
                    </div>
                    <div className='p-4'>
                        {
                            taskList.length === 0 ? (



                                <p className='text-gray-400 font-bold text-center text-2xl'>
                                    😒 No Todos Here
                                </p>
                            ) : (taskList.map((obj, index) => {
                                return <div key={index}
                                    className='border border-gray-400 p-4 mb-4 rounded-xl shadow-lg'>
                                    <p className='text-lg'>
                                    {obj.task}
                                    </p>
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

export default todolist;