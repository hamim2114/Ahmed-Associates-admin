import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './EditJob.scss'

const EditJob = () => {
  const [value, setValue] = useState('');
  return (
    <div className="editJob">
      <div className="wrapper">
        <input type="text" placeholder='Job Title' />
        <div className="editor">
          <ReactQuill theme="snow" placeholder='Job Descriptions' value={value} onChange={setValue} />
        </div>
        <button className='job-btn'>UPDATE</button>
      </div>
    </div>
  )
}

export default EditJob