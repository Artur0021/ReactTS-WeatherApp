import { Routes, Route } from 'react-router'
import './styles/index.scss'
import Home from './Pages/Home/components/Home'
import MonthStat from './Pages/MonthStatistic/components/MonthStatistic'
import Header from './shared/Header/Header'

import { useState } from 'react'

function App() {
	const [selectedCity, setSelectedCity] = useState('New York')

	return (
		<div className='global-container'>
			<div className='container'>
				<Header
					selectedCity={selectedCity}
					setSelectedCity={setSelectedCity}
				/>
				<Routes>
					<Route path='/' element={<Home selectedCity={selectedCity} />} />
					<Route path='/month-Stat' Component={MonthStat} />
				</Routes>
			</div>
		</div>
	)
}

export default App
