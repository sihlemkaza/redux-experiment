import './Copy.scss';
import { HiOutlineClipboard, HiOutlineClipboardCheck } from 'react-icons/hi'

function Copy() {
  return (
    <div className='copy'>
      <HiOutlineClipboard className='icon'/>
      <span className='text'>Copy</span>
    </div>
  )
}

export default Copy