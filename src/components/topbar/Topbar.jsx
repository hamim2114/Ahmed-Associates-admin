import { useState } from 'react';
import './Topbar.scss';
import { FiLogOut } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux';
import { setNavStatus } from '../../redux/navslice';

const Topbar = () => {
  const {navStatus: nav} = useSelector(state => state.nav);
  const dispatch = useDispatch();
  return (
    <div className="topbar">
      <img src="/ahmed.png" alt="" />
      <div className={`logout ${!nav? 'active' : ''}`}>
        <FiLogOut />
        <span>Logout</span>
      </div>
      <div className="nav-btn">
        <div className={`nav-btn-line ${nav ? 'active' : ''}`} onClick={() => dispatch(setNavStatus(!nav))}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  )
}

export default Topbar