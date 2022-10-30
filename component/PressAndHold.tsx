import * as React from 'react';
import { IPressAndHoldProp } from '../interfaces/PressAndHoldInteface';
//@ts-ignore
import styles from './Press&HoldStyles.module.css';

const PressAndHold: React.FC<Partial<IPressAndHoldProp>> = (props) => {
  const { name } = props;

  const [counter, setCounter] = React.useState(100);
  const intervalRef = React.useRef(null);

  React.useEffect(() => {
    return () => stopCounter();
  }, []);

  const elementStyle = {
    margin: '5px',
    height: `${counter}px`,
    width: `${counter}px`,
    background: 'radial-gradient(at 25% 25%, #2b86c5, #562b7c, #ff3cac)',
    border: '2px solid black',
    borderRadius: '50%',
    boxShadow: '10px 5px 5px #BEBEBE',
  };

  const containerStyle = {
    height: '300px',
    width: '300px',
    backgroundColor: 'pink',
  };

  const startCounter = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 10);
  };

  const stopCounter = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <div style={containerStyle}>
      <div
        onMouseDown={startCounter}
        onMouseUp={stopCounter}
        onMouseLeave={stopCounter}
        style={elementStyle}
      />
    </div>
  );
};

export default PressAndHold;
