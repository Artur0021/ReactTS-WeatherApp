import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector'
import styles from './Days.module.scss'
import { Day } from './Days'

export interface ICards {
	DayData: Day
}

export default function Card({ DayData }: ICards) {
	const { day, day_info, icon_id, temp_day, temp_night, info } = DayData

	return (
		<div className={styles.card}>
			<div className={styles.day}>{day}</div>
			<div className={styles.day_info}>{day_info}</div>
			<div className={styles.icon_id}>
				<GlobalSvgSelector id={icon_id} />
			</div>
			<div className={styles.temp_day}>{temp_day}</div>
			<div className={styles.temp_night}>{temp_night}</div>
			<div className={styles.info}>{info}</div>
		</div>
	)
}
