import {AiFillDelete} from 'react-icons/ai'
import './Job.scss';

const Job = () => {
  return (
    <div className="job-section">
      <button className="creat">Add New Job</button>
      <div className="job">
        <div className="info">
          <h4>Criminal Defense Attorney</h4>
          <span>12.06.2023</span>
        </div>
        <div className="btn">
          <button className="edit">EDIT</button>
          <button className="delete"><AiFillDelete size={24}/></button>
        </div>
      </div>
      <div className="job">
        <div className="info">
          <h4>Criminal Defense Attorney</h4>
          <span>12.06.2023</span>
        </div>
        <div className="btn">
          <button className="edit">EDIT</button>
          <button className="delete"><AiFillDelete size={24}/></button>
        </div>
      </div>
      <div className="job">
        <div className="info">
          <h4>Criminal Defense Attorney</h4>
          <span>12.06.2023</span>
        </div>
        <div className="btn">
          <button className="edit">EDIT</button>
          <button className="delete"><AiFillDelete size={24}/></button>
        </div>
      </div>
    </div>
  )
}

export default Job