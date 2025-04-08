import { IndicatorSvgSelector } from '../../../../assets/icons/global/Indicators/IndicatorSvgSelector'
import { Item } from './ThisDayInfo'
import styles from './ThisDayInfo.module.scss'

export interface IThisDayItemProps {
	item: Item
}

export default function ThisDayItem({ item }: IThisDayItemProps) {
	const { icon_id, name, value } = item

	return (
		<div className={styles.item}>
			<div className={styles.indicator}>
				<IndicatorSvgSelector id={icon_id} />
			</div>
			<div className={styles.indicator_name}>{name}</div>
			<div className={styles.indicator_value}> {value} </div>
		</div>
	)
}
