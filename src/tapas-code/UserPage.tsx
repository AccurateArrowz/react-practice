import React from 'react'
import UserProfile from './UserProfile';
import UserPosts from './UserPosts';

export default function UserPage() {
  const userId = 1;
  return (
    <div>
      <UserProfile userId={userId}/>
      <UserPosts userId={userId}/>
    </div>
  )
}
