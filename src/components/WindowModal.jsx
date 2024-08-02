// src/components/WindowModal.js
import {
   Button,
   Frame,
   Toolbar,
  Window,
  WindowContent,
   WindowHeader
  } from 'react95';
  import styled from 'styled-components';

export default function WindowModal({ title, children, onClose, isVisible }) {
    if (!isVisible) return null;
  
    return (
      // <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      //   <div className="bg-white rounded shadow-lg w-3/4 h-3/4 relative">
      //     <div className="bg-blue-500 text-white p-2 flex justify-between items-center">
      //       <span>{title}</span>
      //       <button onClick={onClose} className="text-white">X</button>
      //     </div>
      //     <div className="p-4 overflow-auto">
      //       {children}
      //     </div>
      //   </div>
      // </div>
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <Window resizable className='window'>
        <WindowHeader className='window-title'>
          <span>react95.exe</span>
          <Button onClick={onClose}>
            <span className='close-icon' />
          </Button>
        </WindowHeader>
        <Toolbar>
          <Button variant='menu' size='sm'>
            File
          </Button>
          <Button variant='menu' size='sm'>
            Edit
          </Button>
          <Button variant='menu' size='sm' disabled>
            Save
          </Button>
        </Toolbar>
        <WindowContent>
          <p>
            When you set &quot;resizable&quot; prop, there will be drag handle
            in the bottom right corner (but resizing itself must be handled by
            you tho!)
          </p>
        </WindowContent>
        <Frame variant='well' className='footer'>
          Put some useful information here
        </Frame>
      </Window>
      </div>
    );
  }
  