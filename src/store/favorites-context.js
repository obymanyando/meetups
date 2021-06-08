import { createContext, useState } from 'react'

const FavoritesContext = createContext({
	//initial values for the context. These will be updated using state
	favorites: [],
	totalFavorites: 0,
	//we can add pointers here to help with auto-complete in vscode. Not necessary
	addFavorite: (favoriteMeetup) => {},
	removeFavorite: (meetupId) => {},
	meetupIsFavorite: (meetupId) => {},
})

//remember to export the provider here. It's not enough to default export the context
//we're  going to wrap the provider on all comps that are interested in it's data i.e. <mainNav/> & <Favorites/> button. If provider is needed by multiple comps. better to wrap it around <index.js/>
export const FavoritesContextProvider = (props) => {
	const [userFavorites, setUserFavorites] = useState([])
	//create a context obj. and pass it as a value to the provider

	//now add a new favorite
	const handleAddFavorite = (favoriteMeetup) => {
		//to set your new favorite meetup, take the old favorites and concat to them the new one. If you concat without taking the old fav. you might have problems with state updating speed
		setUserFavorites((prevUserFavorites) => {
			return prevUserFavorites.concat(favoriteMeetup)
		})
	}

	//now remove a favorite
	const handleRemoveFavorite = (meetupId) => {
		setUserFavorites((prevUserFavorites) => {
			return prevUserFavorites.filter((meetup) => meetupId !== meetupId)
		})
	}

	//now check if meetup is already a favorite
	const handleMeetupIsFavorite = (meetupId) => {
		return userFavorites.some((meetupId) => meetupId === meetupId)
	}

	const context = {
		favorites: userFavorites,
		totalFavorites: userFavorites.length,
		//create pointers to functions to expose them to ther components
		addFavorite: handleAddFavorite,
		removeFavorite: handleRemoveFavorite,
		meetupIsFavorite: handleMeetupIsFavorite,
	}

	//we pass the context obj, as a value to the provider
	return (
		//value will hold the current context and will be sent to the provider
		//whenever the value prop changes, all components listening will be updated
		<FavoritesContext.Provider value={context}>
			{props.children}
		</FavoritesContext.Provider>
	)
}

export default FavoritesContext
