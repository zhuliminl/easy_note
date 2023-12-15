import React from 'react';
import { useNavigate } from 'react-router-dom';

export default () => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        onClick={() => {
          console.log('saulllllll');
          navigate('/about');
        }}>
        去设置
      </div>
    </div>
  );
};
