import {AiFillDelete} from 'react-icons/ai'
import './Job.scss';
import { Link } from 'react-router-dom';

const Job = () => {
  return (
    <div className="job-section">
      <Link to='/job/create' className="creat">Add New Job</Link>
      <div className="job">
        <div className="info">
          <h4>Criminal Defense Attorney</h4>
          <span>12.06.2023</span>
        </div>
        <div className="btn">
          <Link to='/job/337548745365465' className="edit">EDIT</Link>
          <button className="delete"><AiFillDelete size={24}/></button>
        </div>
      </div>
      <div className="job">
        <div className="info">
          <h4>Criminal Defense Attorney</h4>
          <span>12.06.2023</span>
        </div>
        <div className="btn">
          <Link to='/job/337548745365465' className="edit">EDIT</Link>
          <button className="delete"><AiFillDelete size={24}/></button>
        </div>
      </div>
      <div className="job">
        <div className="info">
          <h4>Criminal Defense Attorney</h4>
          <span>12.06.2023</span>
        </div>
        <div className="btn">
          <Link to='/job/337548745365465' className="edit">EDIT</Link>
          <button className="delete"><AiFillDelete size={24}/></button>
        </div>
      </div>
      
    </div>
  )
}

export default Job