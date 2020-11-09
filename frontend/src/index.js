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

if (module.hot) {
  console.log(`hot-reloaded @ ${new Date()}`);
  module.hot.accept();
}

const MyComponent = (): React.Node => {
  const classes = useStyles();
  const [response, setResponse] = React.useState(null);
  React.useEffect(() => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState === 4 && xhttp.status === 200) {
        setResponse(JSON.parse(xhttp.responseText).name);
      }
    };
    xhttp.open('GET', '/back', true);
    xhttp.setRequestHeader('Content-type', 'application/json');
    xhttp.send();
  });
  return (
    <div>
      <h1 className={classes.myLabel}>Hello, world!</h1>
      {response === null ? 'loading...' : response}
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.render(<MyComponent />, rootElement);
}

export default MyComponent;
