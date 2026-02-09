import './navbar.css'
import {Link} from 'react-router-dom'
function Navbar(){
    return (
        <div id="navbar">
            <h1 id="frst">Cook hub</h1>
            <div id="name">
                <Link to='/'>
                <span>Home</span>
                </Link>
                <Link to='/about' >
                <span>About</span>
                </Link>
                 <Link to='/contact' >
                <span>Contact</span>
                </Link>
                 <Link to='/Receipe'>
                <span>Receipe</span>
                </Link>
               
            
            </div>
        </div>
    )
}
export default Navbar