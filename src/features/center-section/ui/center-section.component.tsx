import saveMoneyImg from '@assets/finance-woman-cash.png'
import styles from './center-section.module.css'
import LinkNavigator from "../../../../lib/link-navigator/link-navigator.component.tsx";

export default function CenterSection() {
	return (
		<section className={styles.section}>
			<div className={styles.content}>
				{' '}
				Bienvenido a piggybank, tu propia hucha de ahorros. Apunta tus gastos,
				ponte límites y olvídate de los molestos cálculos
				<LinkNavigator path={'/'}>
					<p>Start saving your money </p>
				</LinkNavigator>
			</div>
			<img
				src={saveMoneyImg}
				alt={''}
				className={styles.image}
			/>
		</section>
	)
}
