import classes from './MeetupItem.module.css'
import imag from '../../images/Windhoek-1.jpg'
import Card from '../ui/Card'

const MeetupItem = ({ image, title, address, description }) => {
	return (
		<li className={classes.item}>
			<Card>
				<div className={classes.image}>
					<img src={image} alt={title} />
				</div>
				<div className={classes.content}>
					<h3>{title}</h3>
					<address>{address}</address>
					<p>{description}</p>
				</div>
				<div className={classes.actions}>
					<button>To Favorite</button>
				</div>
			</Card>
		</li>
	)
}

export default MeetupItem
