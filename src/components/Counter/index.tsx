import { useTask } from '../../hooks/useTask'

import styles from './Counter.module.css'

export function Counter() {
	const { totalTodos, totalDoneTodos } = useTask()

	return (
		<section className={styles.count}>
			<section className={styles.count__data}>
				<span className={styles.count__title}>Tarefas Criadas</span>
				<div className={styles.count_value_wrapper}>
					<small className={styles.count__value}>{totalTodos}</small>
				</div>
			</section>

			<section className={styles.count__data}>
				<span className={`${styles.count__title} ${styles.count__title_done}`}>
					Concluidas
				</span>
				<div className={styles.count_value_wrapper}>
					<small className={styles.count__value}>{totalDoneTodos}</small>
				</div>
			</section>
		</section>
	)
}
