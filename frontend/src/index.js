// @flow
import * as React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import ReactDOM from 'react-dom';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  myLabel: {
    fontStyle: 'italic',
  },
});

const MyComponent = (): React.Node => {
  const classes = useStyles();

  return (
    <div>
      <h1 className={classes.myLabel}>Hello, world!</h1>
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.render(<MyComponent />, rootElement);
}

export default MyComponent;
