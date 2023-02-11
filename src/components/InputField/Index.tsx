import React, { useCallback, useState } from 'react'

import { useTask } from '../../hooks/useTask'

import { Button } from '../Button/'
import { Input } from '../Input/'

import styles from './InputField.module.css'

export function InputField() {
	const { addTodo } = useTask()

	const [newTodo, setNewTodo] = useState('')

	const handleChangeTodo = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			setNewTodo(event.target.value)
		},
		[]
	)

	const handleCreateToDo = useCallback(() => {
		if (newTodo !== '') {
			addTodo(newTodo.trim())

			setNewTodo('')
		}
	}, [addTodo, newTodo])

	const handleCreateTodoPressEnter = useCallback(
		(event: React.KeyboardEvent<HTMLInputElement>) => {
			if (event.key === 'Enter') {
				handleCreateToDo()
			}
		},
		[handleCreateToDo]
	)

	return (
		<div onSubmit={handleCreateToDo} className={styles.container}>
			<Input
				value={newTodo}
				onChange={handleChangeTodo}
				placeholder="Adicione uma nova tarefa"
				onKeyDown={handleCreateTodoPressEnter}
			/>

			<Button onClick={handleCreateToDo}>Criar</Button>
		</div>
	)
}
