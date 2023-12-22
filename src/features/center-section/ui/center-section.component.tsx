import saveMoneyImg from '@assets/finance-woman-cash.png'
import styles from './center-section.module.css'

export default function CenterSection() {
	return (
		<section className={styles.section}>
			<div className={styles.content}>
				{' '}
				Bienvenido a piggybank, tu propia hucha de ahorros. Apunta tus gastos,
				ponte límites y olvídate de los molestos cálculos
				<a>Link to </a>
			</div>
			<img
				src={saveMoneyImg}
				alt={''}
				className={styles.image}
			/>
		</section>
	)
}
