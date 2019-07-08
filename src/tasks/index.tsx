import React, { useState, useEffect } from 'react'
import uuid from 'uuid/v4'
import { ITaskList, ITaskStore } from '../Types'

const TASKS_STORAGE_KEY = 'TASKS_STORAGE_KEY'

/**
 * Store tasks in localStorage
 */
const storeTasks = ({ tasks, completedTasks }: ITaskStore) => {
    console.log('storeTasks called <<<')
    localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify({ tasks, completedTasks }))
}

/**
 * Get stored tasks
 */
const getStoredTasks = (): ITaskStore => {
    const value = localStorage.getItem(TASKS_STORAGE_KEY) || ''
    console.log('value', value)
    return JSON.parse(value)
}

const Tasks: React.FC = () => {
    const [taskText, setTaskText] = useState<string>('')

    //Initialising arrays for first run
    const storedTasks = getStoredTasks()
    const [tasks, setTasks] = useState<ITaskList[]>(storedTasks.tasks)
    const [completedTasks, setCompletedTasks] = useState<ITaskList[]>(storedTasks.completedTasks)

    useEffect(() => {
        storeTasks({ tasks, completedTasks })
    }, [tasks, completedTasks])

    const updateTaskText = (e: any) => {
        setTaskText(e.target.value)
    }

    const addTask = (e: any) => {
        setTasks([...tasks, { taskText, id: uuid() }])
    }

    const completeTask = (completedTask: ITaskList) => {
        setCompletedTasks([...completedTasks, completedTask])
        setTasks(tasks.filter(task => task.id !== completedTask.id))
    }

    const deleteTask = (deleteTask: ITaskList) => {
        setCompletedTasks(completedTasks.filter(task => task.id !== deleteTask.id))
    }

    return (
        <div>
            <h3>Tasks</h3>
            <input value={taskText} onChange={updateTaskText} />
            <button onClick={addTask}>Add Tasks</button>
            <div className='task-list'>
                <h4>To do list</h4>
                {
                    tasks.map(({ id, taskText }: ITaskList, index: number) => {
                        const currentTask = `${index + 1}. ${taskText}`
                        return (<div key={id} onClick={() => completeTask({ id, taskText })}>{currentTask}</div>)
                    })
                }
            </div>
            <div className='completed-list'>
                <h4>Completed list</h4>
                {
                    completedTasks.map(({ id, taskText }: ITaskList, index: number) => {
                        const currentTask = `${index + 1}. ${taskText} `
                        return (<div key={id}>{currentTask}<span onClick={() => deleteTask({ id, taskText })}>x</span></div>)
                    })
                }
            </div>
        </div>
    )
}

export default Tasks