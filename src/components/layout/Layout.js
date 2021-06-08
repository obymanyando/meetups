import MainNav from './MainNav'
import classes from './Layout.module.css'

//General layout fo the whole app
const Layout = (props) => {
	return (
		<div>
			<MainNav />
			<main className={classes.main}>{props.children}</main>
		</div>
	)
}

export default Layout
