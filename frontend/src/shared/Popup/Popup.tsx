import { useEffect, useState } from 'react'
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector'
import { Item } from '../../Pages/Home/components/ThisDayInfo/ThisDayInfo'
import ThisDayItem from '../../Pages/Home/components/ThisDayInfo/ThisDayItem'
import { Weather } from '../../store/types/types'
import styles from './Popup.module.scss'
import axios from 'axios'

interface IPopup {
	icon_id?: string
	name?: string
	value?: string
	key?: string
	map?: any
	weather?: Weather
	selectedCity?: string
}

export default function PopUp({ weather, selectedCity }: IPopup) {
	const [time, setTime] = useState(new Date())
	useEffect(() => {
		setInterval(() => setTime(new Date()), 1000)
	}, [])

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
		<>
			<div className={styles.blur}></div>
			<div className={styles.popup}>
				<div className={styles.day}>
					<div className={styles.temperature}>
						{weather?.main.temp.toFixed(0)}
					</div>
					<div className={styles.day_name}>Today</div>
					<div className={styles.img}>
						<GlobalSvgSelector id='sun' />
					</div>
					<div className={styles.this_time}>
						Time : <span>{time.toLocaleDateString()}</span>
					</div>
					<div className={styles.this_city}>
						City : <span>{weather?.name}</span>
					</div>
				</div>
				<div className={styles.this_day_info_items}>
					{items.map((item: Item) => (
						<ThisDayItem key={item.icon_id} item={item} />
					))}
				</div>
				<div className={styles.close}>
					<GlobalSvgSelector id='close' />
				</div>
			</div>
		</>
	)
}
