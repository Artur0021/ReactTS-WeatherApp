import Card from './Card'
import styles from './Days.module.scss'
import Tabs from './Tabs'

export interface Day {
	day: string
	day_info: string
	icon_id: string
	temp_day: string
	temp_night: string
	info: string
}

export default function Days() {
	const days: Day[] = [
		{
			day: 'Today',
			day_info: 'Aug 28',
			icon_id: 'sun',
			temp_day: '+18',
			temp_night: '+15',
			info: 'Cloudy',
		},
		{
			day: 'Tomorrow',
			day_info: 'Aug 29',
			icon_id: 'small_rain_sun',
			temp_day: '+18',
			temp_night: '+15',
			info: 'Light rain and sun',
		},
		{
			day: 'Wed',
			day_info: 'Aug 30',
			icon_id: 'small_rain',
			temp_day: '+18',
			temp_night: '+15',
			info: 'Light rain',
		},
		{
			day: 'Thu',
			day_info: 'Aug 31',
			icon_id: 'mainly_cloudy',
			temp_day: '+18',
			temp_night: '+15',
			info: 'Cloudy',
		},
		{
			day: 'Fri',
			day_info: 'Sep 1',
			icon_id: 'rain',
			temp_day: '+18',
			temp_night: '+15',
			info: 'Cloudy',
		},
		{
			day: 'Sat',
			day_info: 'Sep 2',
			icon_id: 'sun',
			temp_day: '+18',
			temp_night: '+15',
			info: 'Cloudy',
		},
		{
			day: 'Sun',
			day_info: 'Sep 3',
			icon_id: 'sun',
			temp_day: '+18',
			temp_night: '+15',
			info: 'Cloudy',
		},
	]

	return (
		<>
			<Tabs />
			<div className={styles.days}>
				{days.map((day: Day) => (
					<Card key={day.day} DayData={day} />
				))}
			</div>
		</>
	)
}
