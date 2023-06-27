import { AiFillDelete } from 'react-icons/ai'
import './Gallery.scss';

const Gallery = () => {
  return (
    <div className="gallery-section">
      <button className="add">Add</button>
      <div className="gallery-main">
        <div className="gallery">
          <div className="img">
            <img src="/img2.jpg" alt="" />
          </div>
          <div className="info">
            <span>12.06.2023</span>
            <div className="btn">
              <button className="delete"><AiFillDelete size={24} /></button>
            </div>
          </div>
        </div>
        <div className="gallery">
          <div className="img">
            <img src="/img2.jpg" alt="" />
          </div>
          <div className="info">
            <span>12.06.2023</span>
            <div className="btn">
              <button className="delete"><AiFillDelete size={24} /></button>
            </div>
          </div>
        </div>
        <div className="gallery">
          <div className="img">
            <img src="/img2.jpg" alt="" />
          </div>
          <div className="info">
            <span>12.06.2023</span>
            <div className="btn">
              <button className="delete"><AiFillDelete size={24} /></button>
            </div>
          </div>
        </div>
        <div className="gallery">
          <div className="img">
            <img src="/img2.jpg" alt="" />
          </div>
          <div className="info">
            <span>12.06.2023</span>
            <div className="btn">
              <button className="delete"><AiFillDelete size={24} /></button>
            </div>
          </div>
        </div>
        <div className="gallery">
          <div className="img">
            <img src="/img2.jpg" alt="" />
          </div>
          <div className="info">
            <span>12.06.2023</span>
            <div className="btn">
              <button className="delete"><AiFillDelete size={24} /></button>
            </div>
          </div>
        </div>
        <div className="gallery">
          <div className="img">
            <img src="/img2.jpg" alt="" />
          </div>
          <div className="info">
            <span>12.06.2023</span>
            <div className="btn">
              <button className="delete"><AiFillDelete size={24} /></button>
            </div>
          </div>
        </div>
        <div className="gallery">
          <div className="img">
            <img src="/img2.jpg" alt="" />
          </div>
          <div className="info">
            <span>12.06.2023</span>
            <div className="btn">
              <button className="delete"><AiFillDelete size={24} /></button>
            </div>
          </div>
        </div>
        <div className="gallery">
          <div className="img">
            <img src="/img2.jpg" alt="" />
          </div>
          <div className="info">
            <span>12.06.2023</span>
            <div className="btn">
              <button className="delete"><AiFillDelete size={24} /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery