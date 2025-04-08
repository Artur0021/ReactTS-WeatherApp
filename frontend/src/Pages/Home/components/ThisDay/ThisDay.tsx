import styles from './ThisDay.module.scss'
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector'
import { Weather } from '../../../../store/types/types'
import { useEffect, useState } from 'react'

export interface IThisDayProps {
	weather: Weather
}

export function ThisDay({ weather }: IThisDayProps) {
	const [time, setTime] = useState(new Date())

	useEffect(() => {
		setInterval(() => setTime(new Date()), 1000)
	}, [])

	return (
		<div className={styles.this_day}>
			<div className={styles.top_block}>
				<div className={styles.top_wrapper}>
					<div className={styles.this_temperature}>
						{weather.main.temp.toFixed(0)}°C
					</div>
					<div className={styles.this__day}>Today</div>
				</div>
				<GlobalSvgSelector id='sun' />
			</div>
			<div className={styles.bot_block}>
				<div className={styles.this_time}>
					Time : <span>{time.toLocaleTimeString()}</span>
				</div>
				<div className={styles.this_city}>
					City : <span>{weather.name}</span>
				</div>
			</div>
		</div>
	)
}
