import {AiFillDelete} from 'react-icons/ai'
import './Team.scss';
import { Link } from 'react-router-dom';


const Team = () => {
  return (
    <div className="team-section">
      <Link to='/team/add' className="creat">Add</Link>
      <div className="team">
        <div className="img-title">
          <img src="/team1.jpg" alt="" />
          <h4>Darcy Alec</h4>
          <span>Family Lawer</span>
          <span><b>Added:</b> 12.06.2023</span>
        </div>
        <div className="btn">
          <button className="delete"><AiFillDelete size={24}/></button>
        </div>
      </div>
      <div className="team">
        <div className="img-title">
          <img src="/team1.jpg" alt="" />
          <h4>Darcy Alec</h4>
          <span>Family Lawer</span>
          <span><b>Added:</b> 12.06.2023</span>
        </div>
        <div className="btn">
          <button className="delete"><AiFillDelete size={24}/></button>
        </div>
      </div>
      <div className="team">
        <div className="img-title">
          <img src="/team1.jpg" alt="" />
          <h4>Darcy Alec</h4>
          <span>Family Lawer</span>
          <span><b>Added:</b> 12.06.2023</span>
        </div>
        <div className="btn">
          <button className="delete"><AiFillDelete size={24}/></button>
        </div>
      </div>
    </div>
  )
}

export default Team