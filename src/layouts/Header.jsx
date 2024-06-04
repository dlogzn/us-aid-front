
import { Link } from "react-router-dom"

const links = [{id: 1, to: '/', title: 'Home'}, {id: 2, to: '/signin', title: 'Signin'}, {id: 3, to: '/signup', title: 'Signup'}, {id: 4, to: '/contact', title: 'Contact'}]
const navLinks = links.map(navLink => <li key={navLink.id}><Link to={navLink.to}>{navLink.title}</Link></li>)

const Header = () => {
    return (
        <header>
            <div>US AID</div>
            <nav>
                <ul>
                    {navLinks}
                </ul>
            </nav>
        </header>
    )
    
}

export default Header