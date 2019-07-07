import React, { useState } from 'react'

const Tasks: React.FC = () => {
    const [taskText, setTaskText] = useState<string>('')
    const [tasks, setTasks] = useState<string[]>([''])
    const [completedTasks, setCompletedTasks] = useState([])


    const updateTaskText = (e: any) => {
        setTaskText(e.target.value)
    }

    const addTask = (e: any) => {
        setTasks([...tasks, taskText])
    }

    return (
        <div>
            <h3>Tasks</h3>
            <input value={taskText} onChange={updateTaskText} />
            <button onClick={addTask}>Add Tasks</button>
            <div className='task-list'>
                {
                    tasks.map((task: string) => {
                        return (<div>{task}</div>)
                    })
                }
            </div>
        </div>
    )
}

export default Tasks