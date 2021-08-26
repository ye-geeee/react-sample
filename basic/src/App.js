import React, { Component, useState } from 'react';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say'
import EventPractice from './EventPractice';
import ValidationSample from './ValidationSample';
import RefSample from './RefSample';
import ScrollBox from './ScrollBox';
import IterationSample from './IterationSample';
import LifeCycleSample from './LifeCycleSample';
import ErrorBoundary from './ErrorBoundary';
import Info from './Info';

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button onClick={() => {
        setVisible(!visible);
      }}
      >
        {visible ? 'hide' : 'show'}
      </button>
      <hr />
      {visible && <Info />}
    </div>
  );
};

export default App;
