import { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './ThisDayInfo.module.scss'
import cloud from '../../../../assets/images/cloud.png'
import ThisDayItem from './ThisDayItem'

export interface Item {
	icon_id: string
	name: string
	value: string
	map?: any
}

export function ThisDayInfo({ selectedCity }: { selectedCity: string }) {
	const [items, setItems] = useState<Item[]>([])

	useEffect(() => {
		axios
			.get(
				`https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=9378504709b9322592ff26c26a24047f&&units=metric`
			)
			.then((response) => {
				const data = response.data

				const precipitationValue = data.rain
					? 'Rain'
					: data.snow
					? 'Snow'
					: 'No precipitation'

				const preparedItems: Item[] = [
					{
						icon_id: 'temp',
						name: 'Temperature',
						value: `${Math.round(data.main.temp)}° - feels like ${Math.round(
							data.main.feels_like
						)}°`,
					},
					{
						icon_id: 'pressure',
						name: 'Pressure',
						value: `${data.main.pressure} hPa`,
					},
					{
						icon_id: 'precipitation',
						name: 'Precipitation',
						value: precipitationValue,
					},
					{
						icon_id: 'wind',
						name: 'Wind',
						value: `${data.wind.speed} m/s, direction ${data.wind.deg}°`,
					},
				]

				setItems(preparedItems)
			})
			.catch((error) => {
				console.error('Error fetching weather data:', error)
			})
	}, [selectedCity])

	return (
		<div className={styles.this_day_info}>
			<div className={styles.this_day_info_items}>
				{items.map((item: Item) => (
					<ThisDayItem key={item.icon_id} item={item} />
				))}
			</div>
			<img className={styles.cloud_image} src={cloud} alt='' />
		</div>
	)
}
