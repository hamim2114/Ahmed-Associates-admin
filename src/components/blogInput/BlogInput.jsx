import AdvancedTextEditor from '../advanceTextEditor/AdvanceTextEditor';
import AdvanceTextEditor from '../advanceTextEditor/AdvanceTextEditor';
import './BlogInput.scss';

const BlogInput = () => {
  return (
    <div className="blogInput">
      <div className="wrapper">
        <input type="text" placeholder='Blog Title' />
        <AdvancedTextEditor/>
      </div>
    </div>
  )
}

export default BlogInput