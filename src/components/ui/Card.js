import classes from './Card.module.css'

const Card = (props) => {
	return <div className={classes.card}>{props.children}</div>
	//<props.children>: any comp that's going to be wrapped by this comp will inherit/ have access to this comp's properties.
}

export default Card
