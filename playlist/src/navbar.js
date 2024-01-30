import  React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import List from './list'
function Nav(){
    return<div className='navbar'>
        <h1 id='nv1'>MY PLAYLIST</h1>
        <ul id='nv2'>
            <Link to={''}>
            <li>HOME</li>
            </Link>

            <Link to={"/About"}>
            <li>About</li>
            </Link>

            <Link to={'/List'}>
            <li>List</li> 
            </Link>
        
        </ul>
    </div>
}
export default Nav