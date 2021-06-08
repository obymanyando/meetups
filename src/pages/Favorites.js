import { useContext } from 'react'

// import classes from './MeetupItem.module.css'
// import Card from '../ui/Card'
import FavoritesContext from '../store/favorites-context'
import MeetupList from '../components/meetups/MeetupList'

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
		</section>
	)
}

export default Favorites
