// src/components/CustomContextMenu.js
import { useEffect, useRef } from 'react';
import { MenuList, Separator, MenuListItem } from 'react95';

export default function CustomContextMenu({ x, y, visible, onClose, folders }) {
  const menuRef = useRef(null);

  useEffect(() => {
    // Function to handle click outside of the context menu
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    };

    // Add event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  if (!visible) return null;

  return (
    // <div
    //   ref={menuRef}
    //   className="fixed z-50 bg-white border border-gray-200 shadow-lg p-2 min-w-60"
    //   style={{ top: y, left: x }}
    // >
    //   <ul className="text-black">
    //     {folders.map((folder, index) => (
    //       <li
    //         key={index}
    //         className="px-4 py-2 hover:bg-gray-300 cursor-pointer"
    //         onClick={() => {
    //           window.location.href = folder.link; // or any other action you want to perform
    //           onClose(); // Close the menu after an item is clicked
    //         }}
    //       >
    //         {folder.title}
    //       </li>
    //     ))}
    //   </ul>
    // </div>
    <div
      ref={menuRef}
      className="fixed z-50"
      style={{ top: y, left: x }}
    >

    <MenuList style={{ fontFamily: 'FS-Tahoma, sans-serif' }} className='min-w-36 text-2xl'>
        <MenuListItem primary size='sm'>
          Resume
        </MenuListItem>
        <Separator />
        <MenuListItem size='sm'>Portfolio</MenuListItem>
        <MenuListItem size='sm'>About</MenuListItem>
        <MenuListItem size='sm'>Contact</MenuListItem>
        <Separator />
        <MenuListItem size='sm'>Properties</MenuListItem>
      </MenuList>
      </div>
  );
}
