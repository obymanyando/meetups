import { useContext } from 'react'

import classes from './MeetupItem.module.css'
import Card from '../ui/Card'
import FavoritesContext from '../../store/favorites-context'

const MeetupItem = ({ id, image, title, address, description }) => {
	//call our context here and store it in the constant <favoriteCtx>
	const favoriteCtx = useContext(FavoritesContext)

	const meetupIsFavorite = favoriteCtx.meetupIsFavorite(id)

	const toggleFavoriteStatus = () => {
		if (meetupIsFavorite) {
			favoriteCtx.removeFavorite(id)
		} else {
			favoriteCtx.addFavorite({
				id: id,
				image: image,
				title: title,
				address: address,
				description: description,
			})
		}
	}

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
				<div className={meetupIsFavorite ? classes.actions1 : classes.actions}>
					<button onClick={toggleFavoriteStatus}>
						{meetupIsFavorite ? 'Remove from favorites' : 'Add to Favorites'}
					</button>
				</div>
			</Card>
		</li>
	)
}

export default MeetupItem
