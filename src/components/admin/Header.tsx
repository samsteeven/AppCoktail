import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <header>
                <nav className='py-4 text-lg font-bold '>
                    <ul className='flex justify-center gap-x-4'>
                        <li><Link to="dashboard">Dashboard</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header
