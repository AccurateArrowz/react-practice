import React from 'react'
import { Link } from 'react-router-dom';
import Nav from './shared/components/Nav';

export default function Home() {
  return (
    <div>
        <p>Home page</p>
        <Nav></Nav>
    <Link to='hotel-management'>hotel management </Link>
    <Link to='hotel'>hotel  </Link>
    </div>
  )
}
