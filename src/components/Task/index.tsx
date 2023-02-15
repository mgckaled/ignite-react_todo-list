import { useCallback } from 'react'

import clipboardImgPng from '../../assets/clipboard.png'

import styles from './Task.module.css'

import { useTask } from '../../hooks/useTask'
import { TaskCard } from '../TaskCard'

export default function Task() {
	const { isEmpty } = useTask()

	const EmptyListComponent = useCallback(
		() => (
			<div className={styles.empty__list}>
				<img
					src={clipboardImgPng}
					alt="Imagem de um icone de clipboard"
					title="Icone de Clipboard"
				/>
				<div className={styles.empty__list_titles}>
					<h3>Você ainda não tem tarefas cadastradas.</h3>
					<h4>Crie tarefas e organize seus itens a fazer.</h4>
				</div>
			</div>
		),
		[]
	)

	return (
		<section className={styles.wrapper}>
			{isEmpty ? <EmptyListComponent /> : <TaskCard />}
		</section>
	)
}
