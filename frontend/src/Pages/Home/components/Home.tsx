import styles from './home.module.scss'
import { ThisDay } from './ThisDay/ThisDay'
import { ThisDayInfo } from './ThisDayInfo/ThisDayInfo'
import Days from './Days/Days'
import { useCustomDispatch, useCustomSelector } from '../../../hooks/store'
import { selectCurrentWeatherData } from '../../../store/selectors'
import { useEffect } from 'react'
import { fetchCurrentWeather } from '../../../store/thunks/fetchCurrentWeather'

type HomeProps = {
	selectedCity: string
}
export default function Home({ selectedCity }: HomeProps) {
	const dispatch = useCustomDispatch()
	const { weather } = useCustomSelector(selectCurrentWeatherData)

	useEffect(() => {
		dispatch(fetchCurrentWeather(selectedCity))
	}, [selectedCity])
	return (
		<div className={styles.home}>
			<div className={styles.wrapper}>
				<ThisDay weather={weather} />
				<ThisDayInfo selectedCity={selectedCity} />
			</div>
			<Days />
		</div>
	)
}
