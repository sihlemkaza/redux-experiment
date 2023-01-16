import './Copy.scss';
import { HiOutlineClipboard, HiOutlineClipboardCheck } from 'react-icons/hi'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from 'react';

function Copy({ copyText }) {
  const [copied, setCopied] = useState();

  function handleCopy() {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  }
  return (
    <div className='copy'>
      <CopyToClipboard 
        className='clipboard-container'
        text={copyText}
        onCopy={handleCopy}
      >
        { copied
          ? <div className='copy-group'>
              <HiOutlineClipboardCheck className='icon'/>
              <span>Copied</span>
            </div> 
          : <div className='copy-group'>
              <HiOutlineClipboard className='icon' />
              <span>Copy</span>
            </div>
        }
      </CopyToClipboard>
    </div>
  )
}

export default Copy