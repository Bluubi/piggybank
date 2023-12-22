import saveMoneyImg from '@assets/finance-woman-cash.png'
import styles from './center-section.module.css'
import LinkNavigator from '../../../../lib/link-navigator/link-navigator.component.tsx'

export default function CenterSection() {
	return (
		<section className={styles.section}>
			<div className={styles.content}>
				{' '}
				<p>
					Bienvenido a <b>piggybank, tu propia hucha de ahorros</b>. Apunta tus gastos,
					ponte límites y olvídate de los molestos cálculos
				</p>
				<LinkNavigator
					path={'/'}
					theme={'primary'}
					role={'link'}
					type={'link'}>
					<p className={styles.navigator}>Start saving your money </p>
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
