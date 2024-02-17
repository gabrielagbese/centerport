import React, { useState, useEffect } from 'react';
import Mobile from './components/SmallComponents/Mobile';
import Large from './components/LargeComponents/Large';

function App() {
  const [isLargeViewport, setIsLargeViewport] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const aspectRatio = window.innerWidth / window.innerHeight;
      setIsLargeViewport(aspectRatio > 1.25);
    };
    handleResize(); // Call it once to set initial value
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {isLargeViewport ? <Large /> : <Mobile />}
    </div>
  );
}

export default App;
