import saveMoneyImg from '@assets/finance-woman-cash.png'
import styles from './center-section.module.css'
import LinkNavigator from '../../../../lib/link-navigator/link-navigator.component.tsx'
import { useTranslation } from 'react-i18next'

export default function CenterSection() {
	const { t } = useTranslation()

	return (
		<section className={styles.section}>
			<div className={styles.content}>
				{' '}
				<p>{t('welcome')}</p>
				<LinkNavigator
					path={'saving/new'}
					theme={'primary'}
					role={'link'}
					type={'link'}>
					<p className={styles.navigator}> {t('start.saving')} </p>
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
