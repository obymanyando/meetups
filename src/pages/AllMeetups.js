import React, { useEffect, useState } from 'react'
import MeetupList from '../components/meetups/MeetupList'

// const DUMMY_DATA = [
// 	{
// 		id: 'm1',
// 		title: 'This is a first meetup',
// 		image: 'https://unsplash.com/photos/FMn_3ilHYTw',
// 		address: 'Meetupstreet 5, 12345 Meetup City',
// 		description:
// 			'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
// 	}]

const AllMeetups = () => {
	//We cannot use async/await here because react comps. must ne syncronous. They must directly return a jsx. A promise will make the whole comp. hold until full response. Therefore, we can't defer the response. But, we can return a temp. value instead, i.e. a 'loading' message. Once we have a res, we want to update the ui. We do this using state.
	const [isLoading, setIsLoading] = useState(true)
	const [receivedMeetups, setReceivedMeetups] = useState([])

	useEffect(() => {
		setIsLoading(true)
		fetch('https://meetup-caf1a-default-rtdb.firebaseio.com/meetpus.json')
			.then((res) => {
				return res.json()
			})
			.then((data) => {
				const meetups = []

				//let\s transform the obj. we received into an arr. so we can map thru it
				for (const key in data) {
					const meetup = {
						id: key,
						...data[key],
					}
					meetups.push(meetup)
				}

				setIsLoading(false)
				setReceivedMeetups(meetups)
			})
		//the empty dependancy below makes sure that fetch o ly runs once. Adding any dependency in here i.e. isLoading, will make fetch run everytime isLoading changes. Eception: if there are external depencies i.e., URL, then put them in.
	}, [])

	if (isLoading) {
		return (
			<section>
				<h1>Loading...</h1>
			</section>
		)
	}

	return (
		<section>
			<h1>Meetups & Events Near You.</h1>
			<MeetupList meetups={receivedMeetups} />
		</section>
	)
}

export default AllMeetups
