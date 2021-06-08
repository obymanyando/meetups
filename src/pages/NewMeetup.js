import { useHistory } from 'react-router-dom'
import NewMeetupForm from '../components/meetups/NewMeetupForm'

const NewMeetup = () => {
	//for navigation, here we'll use useHistory hook
	const history = useHistory()

	const handleAddMeetup = (meetupInfo) => {
		fetch('https://meetup-caf1a-default-rtdb.firebaseio.com/meetpus.json', {
			method: 'POST',
			body: JSON.stringify(meetupInfo),
			headers: {
				'Contet-Type': 'application/json',
			},
		}).then(() => {
			history.replace('/')
		})
	}
	return (
		<div>
			<h1>New Meetup Page</h1>
			<NewMeetupForm onAddMeetup={handleAddMeetup} />
		</div>
	)
}

export default NewMeetup
