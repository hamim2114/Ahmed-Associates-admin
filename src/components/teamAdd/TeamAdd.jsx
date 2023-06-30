import { useState } from 'react'
import './TeamAdd.scss'
import { MdFileUpload } from 'react-icons/md'

const TeamAdd = () => {
  const [img, setImg] = useState('');
  console.log(img)
  const handleImgChange = (e) => {
    const file = e.target.files[0];
    setImg(URL.createObjectURL(file))
  }
  return (
    <div className="team-add">
      <form className='team-form'>
        <div className="upload-img">
          <label htmlFor="file"><MdFileUpload /></label>
          <img src={img || '/noavatar.png'} alt="image" />
        </div>
        <input type="file" className='file' hidden name="" id="file" onChange={handleImgChange} />
        <input type="text" placeholder='Name' />
        <input type="text" placeholder='Title e.g:family lawer' />
        <input type="text" placeholder='Facebook Profile Link "optional"' />
        <input type="text" placeholder='Twitter Profile Link "optional"' />
        <input type="text" placeholder='Phone Number "optional"' />
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default TeamAdd