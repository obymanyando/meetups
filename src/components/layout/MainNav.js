import { useContext } from 'react'

import { Link } from 'react-router-dom'
import FavoritesContext from '../../store/favorites-context'
import classes from './MainNav.module.css'

const MainNav = () => {
	const favoriteCtx = useContext(FavoritesContext)

	return (
		<header className={classes.header}>
			<div className={classes.logo}>WHK Meetups</div>
			<nav>
				<ul>
					<li>
						<Link to='/'>All Meetups</Link>
					</li>
					<li>
						<Link to='/new-meetup'>New Meetup</Link>
					</li>
					<li>
						<Link to='/favorites'>
							Favorites
							<span className={classes.badge}>
								{favoriteCtx.totalFavorites}
							</span>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default MainNav
