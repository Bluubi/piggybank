import styles from './header.module.css'
import piggybank from '@assets/piggy-bank-removebg-preview.png'
export default function Header() {
	return (
		<header className={styles.header}>
			<h1> Piggybank </h1>
			<h4 className={styles.subtitle}>
				{' '}
				Note your expenses, erase your worries
			</h4>
			<img
				src={piggybank}
				alt={''}
				className={styles.img}
			/>
		</header>
	)
}
