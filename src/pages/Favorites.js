import { useContext } from 'react'

import FavoritesContext from '../store/favorites-context'
import MeetupList from '../components/meetups/MeetupList'
import classes from '../components/meetups/MeetupItem.module.css'
import { Link } from 'react-router-dom'

const Favorites = () => {
	//call our context here and store it in the constant <favoriteCtx>
	const favoriteCtx = useContext(FavoritesContext)

	let content

	if (favoriteCtx.totalFavorites === 0) {
		content = <p>Mhh, you have no favorites! You wanna add some favorites?</p>
	} else {
		content = <MeetupList meetups={favoriteCtx.favorites} />
	}
	return (
		<section>
			<h1>Favorites Meetups</h1>
			{content}
			<div className={classes.actions}>
				<Link to='/new-meetup'>
					<button>Add Favorite</button>
				</Link>
			</div>
		</section>
	)
}

export default Favorites
