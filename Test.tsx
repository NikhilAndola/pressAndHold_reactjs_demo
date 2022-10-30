import * as React from 'react';
//@ts-ignore
import styles from './style.module.css';

interface TestProps {
  bgColor: string;
}

export const Test: React.FC<TestProps> = (props) => {
  return <h1 className={`${styles[props.bgColor]}`}>Hello test file</h1>;
};
