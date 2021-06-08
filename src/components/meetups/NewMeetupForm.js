import React from 'react'
import { useRef } from 'react'
import Card from '../ui/Card'
import classes from './NewMeetupForm.module.css'

const NewMeetupForm = ({ onAddMeetup }) => {
	//ref lets us set references to dom elements, so that we have direct access to them
	//'titleInputRef' is now a reference object
	const titleInputRef = useRef()
	const imageInputRef = useRef()
	const addressInputRef = useRef()
	const descriptionInputRef = useRef()

	const handleSubmit = (e) => {
		e.preventDefault()

		//Now catch the input value. Current holds the current value coming from the input
		const newMeetupTitle = titleInputRef.current.value
		const newMeetupImage = imageInputRef.current.value
		const newMeetupAddress = addressInputRef.current.value
		const newMeetDescription = descriptionInputRef.current.value

		//Now create an obj to hold the input value
		const meetupInfo = {
			title: newMeetupTitle,
			image: newMeetupImage,
			address: newMeetupAddress,
			description: newMeetDescription,
		}
		onAddMeetup(meetupInfo)
	}
	return (
		<Card>
			<form className={classes.form} onSubmit={handleSubmit}>
				<div className={classes.control}>
					<label htmlFor='title'>Meetup Title</label>
					{/* htmlFor attaches the label to the input */}
					<input type='text' required id='title' ref={titleInputRef} />
					{/* link the title input to the ref above */}
				</div>
				<div className={classes.control}>
					<label htmlFor='image'>Meetup Artwork</label>
					{/* htmlFor attaches the label to the input */}
					<input type='url' required id='image' ref={imageInputRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor='address'>Meetup Address</label>
					<input type='text' required id='address' ref={addressInputRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor='title'>Meetup Title</label>
					<textarea
						name='description'
						id='description'
						rows='5'
						required
						ref={descriptionInputRef}></textarea>
				</div>
				<div className={classes.actions}>
					<button>Add Meetup</button>
				</div>
			</form>
		</Card>
	)
}

export default NewMeetupForm
