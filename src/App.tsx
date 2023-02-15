import { AppProvider } from './context'

import { Counter } from './components/Counter'
import { Header } from './components/Header'
import { InputField } from './components/InputField/Index'
import Task from './components/Task'

import styles from './App.module.css'
import './global.css'

export function App() {
	return (
		<AppProvider>
			<Header />
			<main className={styles.wrapper}>
				<InputField />
				<Counter />
				<Task />
			</main>
		</AppProvider>
	)
}
