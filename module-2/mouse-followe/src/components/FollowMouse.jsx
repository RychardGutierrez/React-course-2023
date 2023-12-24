import { useEffect, useState } from 'react';

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      console.log(clientX, clientY);
      setPosition({ x: clientX, y: clientY });
    };

    if (enabled) {
      window.addEventListener('pointermove', handleMove);
    }

    return () => {
      window.removeEventListener('pointermove', handleMove);
    };
  }, [enabled]);

  const handleMouseEnabled = () => {
    setEnabled((prev) => !prev);
  };
  const textButton = enabled ? 'Disable' : 'Enable';

  return (
    <>
      <div
        style={{
          position: 'absolute',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          border: '1px solid #fff',
          borderRadius: '50%',
          opacity: 0.8,
          pointerEvents: 'none',
          left: -25,
          top: -25,
          width: 25,
          height: 25,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
      <h3>Mouse Following</h3>
      <button onClick={handleMouseEnabled}>{textButton} mouse Following</button>
    </>
  );
};

export default FollowMouse;
