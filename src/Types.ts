import { number } from "prop-types";

export interface IJoke {
    setup: string,
    punchline: string
}

export interface IStories {
    by: string,
    descendants: number,
    id: number,
    kids: [number]
    score: number,
    time: number,
    title: string,
    type: string,
    url: string
}

export interface ITaskList {
    taskText: string,
    id: string
}

export interface ITaskStore {
    tasks: ITaskList[],
    completedTasks: ITaskList[],
}

export interface IDynamicTransition {
    increment: number,
    delay: number,
    length: number
}