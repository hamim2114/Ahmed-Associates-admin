import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './BlogInput.scss';

const BlogInput = () => {
  const [value, setValue] = useState('');
  return (
    <div className="blogInput">
      <div className="wrapper">
        <input type="text" placeholder='Blog Title' />
        <div className="editor">
          <ReactQuill theme="snow" placeholder='Blog Descriptions' value={value} onChange={setValue} />
        </div>
        <button className='blog-btn'>POST</button>
      </div>
    </div>
  )
}

export default BlogInput