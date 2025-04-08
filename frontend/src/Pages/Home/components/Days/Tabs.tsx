import styles from './Days.module.scss'

interface Itab {
	value: string
	key?: string
}
export default function Tabs() {
	const tabs: Itab[] = [
		{
			value: '1 Week',
		},
		{
			value: '10 Days',
		},
		{
			value: '1 Month',
		},
	]

	return (
		<div className={styles.tabs}>
			<div className={styles.tabs_wrapper}>
				{tabs.map((tab: Itab) => (
					<div className={styles.tab} key={tab.value}>
						{tab.value}
					</div>
				))}
			</div>
			<div className={styles.cancel}>Cancel</div>
		</div>
	)
}
