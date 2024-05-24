import React from 'react';
import { InfinitySpin } from "react-loader-spinner";
import './Loader.css';
const Loader: React.FC = () => {
  return (
    <div className="loader-overlay">
      <InfinitySpin
        visible={true}
        width="200"
        color="#fff"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
};

export default Loader;
