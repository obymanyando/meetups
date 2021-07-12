import { Switch, Route } from 'react-router-dom'
import AllMeetupsPage from './pages/AllMeetups'
import NewMeetupPage from './pages/NewMeetup'
import FavoritesPage from './pages/Favorites'
import About from './pages/About'
import Layout from './components/layout/Layout'

function App() {
	return (
		<Layout>
			<Switch>
				<Route path='/' exact>
					<AllMeetupsPage />
				</Route>
				<Route path='/new-meetup'>
					<NewMeetupPage />
				</Route>
				<Route path='/favorites'>
					<FavoritesPage />
				</Route>
				<Route path='/about'>
					<About />
				</Route>
			</Switch>
		</Layout>
	)
}

export default App
