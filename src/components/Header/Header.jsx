import {Link} from 'react-router-dom'
const Header = () => {
    return(
        <div>
            <header>
                <nav>
                    <Link to="/home">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/curses">Courses</Link>
                    <Link to="/contact">Contact</Link>


                </nav>
            </header>
        </div>
    )
}

export default Header;