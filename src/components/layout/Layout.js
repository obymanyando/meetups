import MainNav from './MainNav'
import classes from './Layout.module.css'
import Footer from './Footer'

//General layout fo the whole app
const Layout = (props) => {
	return (
		<div>
			<MainNav />
			<main className={classes.main}>{props.children}</main>
			<Footer />
		</div>
	)
}

export default Layout
