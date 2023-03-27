import './index.scss'
import { NavLink, Link } from 'react-router-dom'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import AT from '../../assets/images/AT.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faTasks } from '@fortawesome/free-solid-svg-icons'
import { SocialIcon } from 'react-social-icons'

const Sidebar = () => (
<div className = 'nav-bar'>
  <Link className = 'logo' to='/'>
  <img src = {AT} alt="Logo" />
  </Link>
  <nav>
    <NavLink exact="true" activeClassname="active" to= "/">
        <FontAwesomeIcon icon={faHome} color = "#4d4d4e" />
    </NavLink>
    <NavLink exact="true" activeClassname="active" to= "/about" className={"about-link"}>
        <FontAwesomeIcon icon={faUser} color = "#4d4d4e" />
    </NavLink>
    <NavLink exact="true" activeClassname="active" className= "my-work" to= "/work">
        <FontAwesomeIcon icon={faTasks} color = "#4d4d4e" />
    </NavLink>
    <NavLink exact="true" activeClassname="active" className= "contact-link" to= "/contact">
        <FontAwesomeIcon icon={faEnvelope} color = "#4d4d4e" />
    </NavLink>
  </nav>
  <ul>
    <li>
      <a target="_blank" rel='nonreferrer' >
       <SocialIcon url="https://github.com/aakansh47" />
      </a>
    </li>
    <li>
      <a target="_blank" rel='nonreferrer' >
        <SocialIcon url="https://www.linkedin.com/in/aakansh-togani/" />
      </a>
    </li>
  </ul>
  </div>
  )


export default Sidebar
