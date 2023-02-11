import styles from './Header.module.css'

import TodoLogoPng from '../../assets/logo.png'

export function Header() {
	return (
		<header className={styles.header}>
			<img src={TodoLogoPng} alt="Logotipo do Ignite" />
		</header>
	)
}
