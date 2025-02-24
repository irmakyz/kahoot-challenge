import React from 'react';
import { ImageProps } from './types';
import './Image.scss';

const Image: React.FC<ImageProps> = ({ imageUrl, name }) => {
  return (
    <div className="image-container">
      <img src={imageUrl} alt={`${name}`} className="image" />
    </div>
  );
};

export default Image;