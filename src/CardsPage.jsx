import React from 'react'
import ProfileCard from './ProfileCard';
import person from './assets/person.jpg'


const profiles = [{
  name: "John Doe",
  handle: "@johndoe",
  workLocation: "New York",
  role: "Software Engineer",
  img: person
}, {
  name: "Jane Simpson",
  handle: "@janeSimpson",
  workLocation: "San Francisco",
  role: "Product Manager",
  img: person
}, {
  name: "Bob Smith",
  handle: "@bobsmith",
  workLocation: "Chicago",
  role: "Designer",
  img: person
}]
export default function CardsPage() {
  // const [noOfProfiles, setNoOfProfiles] = React.useState(3);
  return (
    <>
      <div className='flex border-yellow-300'>CardsPage</div>
      <ul>
        {profiles.map(profile => (
          <ProfileCard key={profile.handle}
            name={profile.name}
            handle={profile.handle}
            workLocation={profile.workLocation}
            role={profile.role}
            img={profile.img}>
          </ProfileCard>
        ))}
      </ul>
    </>
  )
}
