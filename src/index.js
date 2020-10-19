// @flow
import * as React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import ReactDOM from 'react-dom';

const MyComponent = (): React.Node => {
  return (
    <div>
      <h1>My App</h1>
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.render(<MyComponent />, rootElement);
}

export default MyComponent;
