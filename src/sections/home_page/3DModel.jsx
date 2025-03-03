// import Spline from '@splinetool/react-spline';
// import React from 'react';

// export default function App() {
//   return (
//     <Spline scene="https://prod.spline.design/v2StW-uwqMrZhUBJ/scene.splinecode" />
//   );
// }

// 3DModel.jsx


import Spline from '@splinetool/react-spline';
import React from 'react';
import './3DModel.css';

const RobotModel = () => {
  return (
    <div className="spline-container">
      <Spline scene="https://prod.spline.design/v2StW-uwqMrZhUBJ/scene.splinecode" />
    </div>
  );
}

export default RobotModel;


