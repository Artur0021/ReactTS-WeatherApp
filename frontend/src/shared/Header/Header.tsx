import styles from './Header.module.scss'
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector'
import { Select } from 'antd'
import { useEffect, useState } from 'react'

export interface HeaderProps {
	selectedCity: string
	setSelectedCity: (city: string) => void
}

export default function Header({
	selectedCity,
	setSelectedCity,
}: HeaderProps) {
	const [theme, setTheme] = useState(() => {
		const storedTheme = localStorage.getItem('theme')
		return storedTheme === 'dark' ? 'dark' : 'light'
	})

	function changeTheme() {
		setTheme(theme === 'light' ? 'dark' : 'light')
	}

	useEffect(() => {
		const root = document.querySelector(':root') as HTMLElement

		const components = [
			'components-background',
			'card-background',
			'card-shadow',
			'text-color',
			'body-background',
		]

		components.forEach((component) => {
			root.style.setProperty(
				`--${component}-default`,
				`var(--${component}-${theme})`
			)
		})
		localStorage.setItem('theme', theme)
	}, [theme])

	return (
		<header className={styles.header}>
			<div className={styles.wrapper}>
				<div className={styles.logo}>
					<GlobalSvgSelector id='header-logo' />
				</div>
				<div className={styles.title}>Weather Checker</div>
			</div>
			<div className={styles.wrapper}>
				<div className={styles.change_theme} onClick={changeTheme}>
					<GlobalSvgSelector id='theme-changer' />
				</div>
				<Select
					style={{
						width: 190,
						height: 35,
						background: '#12356',
						marginLeft: 20,
						color: '#000000',
						padding: '5px 10px',
						fontSize: 14,
						fontWeight: 'bold',
						cursor: 'pointer',
						borderColor: 'rgb(129, 35, 51)',
					}}
					value={selectedCity}
					onChange={(value) => setSelectedCity(value)}
					options={[
						{ value: 'New York', label: 'New York' },
						{ value: 'Los Angeles', label: 'Los Angeles' },
						{ value: 'Miami', label: 'Miami' },
						{ value: 'London', label: 'London' },
						{ value: 'Tokyo', label: 'Tokyo' },
						{ value: 'Prague', label: 'Prague' },
						{ value: 'Nice', label: 'Nice France' },
					]}
				/>
			</div>
		</header>
	)
}
