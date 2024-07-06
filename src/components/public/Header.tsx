
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <header>
        <nav className=''>
            <ul className=' flex justify-center gap-x-4 text-lg my-4'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/services" >Services</Link></li>
            </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
