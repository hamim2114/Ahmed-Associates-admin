import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './JobInput.scss';

const JobInput = () => {
  const [value, setValue] = useState('');
  return (
    <div className="jobInput">
      <div className="wrapper">
        <input type="text" placeholder='Job Title' />
        <div className="editor">
          <ReactQuill theme="snow" placeholder='Job Descriptions' value={value} onChange={setValue} />
        </div>
        <button className='job-btn'>PUBLISH JOB</button>
      </div>
    </div>
  )
}

export default JobInput