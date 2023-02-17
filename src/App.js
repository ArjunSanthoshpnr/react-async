import React, { useState } from 'react';
import './style.css';
import UserStatusComponent from "./UserStatusComponent.js"
export default function App() {
  const [imageSrc, setImageSrc] = useState('');

  const loadImage = (url) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        resolve(img);
      };
      img.onerror = () => {
        reject(new Error(`Failed to load image from ${url}`));
      };
      img.src = url;
    });
  };

  const handleButtonClick = () => {
    loadImage(
      'https://images.unsplash.com/photo-1542451542907-6cf80ff362d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1821&q=80'
    )
      .then((img) => {
        setImageSrc(img.src);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Load Image</button>
      {imageSrc && <img src={imageSrc} alt="Example" width="200" />}
      <UserStatusComponent />
    </div>
  );
}
