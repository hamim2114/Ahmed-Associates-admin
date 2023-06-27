import { Link, useLocation } from 'react-router-dom';
import {AiFillHome} from 'react-icons/ai';
import {FaRegNewspaper} from 'react-icons/fa';
import {MdWork} from 'react-icons/md';
import {RiTeamFill,RiGalleryFill} from 'react-icons/ri';
import './Sidebar.scss';

const Sidebar = () => {
  const {pathname} = useLocation();

  return (
    <div className="sidebar">
      <div className="list">
        <Link to='/' className={`list-item ${pathname === '/' ? 'active' : ''}`}><AiFillHome/> Dashboard</Link>
        <Link to='/blog' className={`list-item ${pathname === '/blog' ? 'active' : ''}`}><FaRegNewspaper/> Blog</Link>
        <Link to='/job' className={`list-item ${pathname === '/job' ? 'active' : ''}`}><MdWork/> Job</Link>
        <Link to='/team' className={`list-item ${pathname === '/team' ? 'active' : ''}`}><RiTeamFill/> Team</Link>
        <Link to='/gallery' className={`list-item ${pathname === '/gallery' ? 'active' : ''}`}><RiGalleryFill/> Gallery</Link>
      </div>
    </div>
  )
}

export default Sidebar