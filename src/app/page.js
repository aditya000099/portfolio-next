// src/app/page.js
"use client";

import { useState } from "react";
import FolderIcon from "../components/FolderIcon";
import WindowModal from "../components/WindowModal";
import dynamic from "next/dynamic";
const Taskbar = dynamic(() => import("../components/taskbar"), { ssr: true });
import CustomContextMenu from "../components/CustomContextMenu";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import original from "react95/dist/themes/original";

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contextMenu, setContextMenu] = useState({
    visible: false,
    x: 0,
    y: 0,
  });

  // List of folders to display in the context menu
  const folders = [
    { title: "Resume", link: "#" }, // You can replace '#' with the actual link or function
    { title: "Projects", link: "#" },
    { title: "Contact", link: "#" },
  ];

  const handleContextMenu = (event) => {
    event.preventDefault();
    setContextMenu({ visible: true, x: event.clientX, y: event.clientY });
  };

  const handleCloseContextMenu = () => {
    setContextMenu({ ...contextMenu, visible: false });
  };

  return (
    <div
      className="h-screen w-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/xp.jpg')" }}
      onContextMenu={handleContextMenu} // Prevent default context menu
    >
      {/* <GlobalStyles /> */}
      <ThemeProvider theme={original}>
        <div
          className="absolute top-10 left-10 text-2xl"
          style={{ fontFamily: "FS-Tahoma, sans-serif" }}
        >
          <FolderIcon
            onDoubleClick={() => setIsResumeOpen(true)}
            title="Resume"
            icon="/folder-icon.png"
            className="FS-Tahoma"
          />
          <FolderIcon
            onDoubleClick={() => setIsProjectsOpen(true)}
            title="Projects"
            icon="/folder-icon.png"
          />
          <FolderIcon
            onDoubleClick={() => setIsContactOpen(true)}
            title="Contact"
            icon="/folder-icon.png"
          />
        </div>

        <WindowModal
          title="Resume"
          isVisible={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        >
          {/* Resume content goes here */}
        </WindowModal>
        <WindowModal
          title="Projects"
          isVisible={isProjectsOpen}
          onClose={() => setIsProjectsOpen(false)}
        >
          {/* Projects content goes here */}
        </WindowModal>
        <WindowModal
          title="Contact"
          isVisible={isContactOpen}
          onClose={() => setIsContactOpen(false)}
        >
          {/* Contact content goes here */}
        </WindowModal>

        <Taskbar />

        <CustomContextMenu
          x={contextMenu.x}
          y={contextMenu.y}
          visible={contextMenu.visible}
          onClose={handleCloseContextMenu}
          folders={folders}
        />
      </ThemeProvider>
    </div>
  );
}
