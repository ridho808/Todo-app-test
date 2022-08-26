import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navigation extends Component {
  render() {
    return (
      <>
      <header className='max-w-[100%] bg-sky-400  '>
        <nav className='max-w-[85%] mx-auto'>
            <Link to={'/'} className='p-7 h-24 block text-4xl text-white font-bold'>TODO LIST</Link>
        </nav>
        </header>
      </>
    )
  }
}
