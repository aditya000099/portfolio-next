// src/components/FolderIcon.js
import { useRef } from 'react';
import Draggable from 'react-draggable';

export default function FolderIcon({ title, icon, onDoubleClick }) {
  const nodeRef = useRef(null);

  return (
    <Draggable nodeRef={nodeRef}>
      <div
        ref={nodeRef}
        className="cursor-pointer text-center select-none"
        onDoubleClick={onDoubleClick}
      >
        {/* Prevent default image drag behavior */}
        <img
          src={icon}
          className="w-16 h-16 mx-auto"
          alt="folder"
          onDragStart={(e) => e.preventDefault()}
        />
        <p className="text-white">{title}</p>
      </div>
    </Draggable>
  );
}
