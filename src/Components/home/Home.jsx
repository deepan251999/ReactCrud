import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home_container'>
        <div className="home_background">
            <div className='home_content'>
                <h1>Welcome to home page</h1>
                <div className='button_container'>
                    <Link to="form">
                        <button>Add Mobile</button>
                    </Link>
                    <Link to="mobile">
                        <button>Mobile Collection</button>
                    </Link>                  
                </div>
            </div>
            <div className="home_image">
                <img src="https://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Photos.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Home