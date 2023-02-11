import { useContext } from 'react'
import {
	IToDoContextData,
	TodoContext,
	ToDoProvider
} from '../context/ToDoContex'

function useTask(): IToDoContextData {
	const context = useContext(TodoContext)

	return context
}

export { ToDoProvider, useTask }
