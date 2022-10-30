import * as React from 'react';
//@ts-ignore
import styles from './style.module.css';
import { Test } from './Test';
import PressAndHold from './component/PressAndHold';

export default function App() {
  return (
    <div>
      <h1 className={styles.bgColor}>Press and hold Mouse button - React</h1>
      {/* <Test bgColor="bgColor" /> */}
      <PressAndHold />
    </div>
  );
}
