import {AiFillDelete} from 'react-icons/ai'
import './Blog.scss';

const Blog = () => {
  return (
    <div className="blogs-section">
      <button className="creat">Creat New Blog</button>
      <div className="blog">
        <div className="img-title">
          <img src="/blog1.jpg" alt="" />
          <h4>Justice May For You If You Are Innocent ...</h4>
          <span>12.06.2023</span>
        </div>
        <div className="btn">
          <button className="edit">EDIT</button>
          <button className="delete"><AiFillDelete size={24}/></button>
        </div>
      </div>
      <div className="blog">
        <div className="img-title">
          <img src="/blog1.jpg" alt="" />
          <h4>Justice May For You If You Are Innocent ...</h4>
          <span>12.06.2023</span>
        </div>
        <div className="btn">
          <button className="edit">EDIT</button>
          <button className="delete"><AiFillDelete size={24}/></button>
        </div>
      </div>
      <div className="blog">
        <div className="img-title">
          <img src="/blog1.jpg" alt="" />
          <h4>Justice May For You If You Are Innocent ...</h4>
          <span>12.06.2023</span>
        </div>
        <div className="btn">
          <button className="edit">EDIT</button>
          <button className="delete"><AiFillDelete size={24}/></button>
        </div>
      </div>
      <div className="blog">
        <div className="img-title">
          <img src="/blog1.jpg" alt="" />
          <h4>Justice May For You If You Are Innocent ...</h4>
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

export default Blog