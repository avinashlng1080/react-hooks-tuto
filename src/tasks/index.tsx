import React, { useState } from 'react'
import uuid from 'uuid/v4'
import { ITaskList } from '../Types'

const Tasks: React.FC = () => {
    const [taskText, setTaskText] = useState<string>('')
    const [tasks, setTasks] = useState<ITaskList[]>([])
    const [completedTasks, setCompletedTasks] = useState([])

    const updateTaskText = (e: any) => {
        setTaskText(e.target.value)
    }

    const addTask = (e: any) => {
        setTasks([...tasks, { taskText, id: uuid() }])
    }

    return (
        <div>
            <h3>Tasks</h3>
            <input value={taskText} onChange={updateTaskText} />
            <button onClick={addTask}>Add Tasks</button>
            <div className='task-list'>
                {
                    tasks.map(({ id, taskText }: ITaskList) => {
                        return (<div key={id}>{taskText}</div>)
                    })
                }
            </div>
        </div>
    )
}

export default Tasks