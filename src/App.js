import { Button, makeStyles } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles({
  button: {
    background: '#88D498',
  }
})

const App = () => {
  const classes = useStyles();
  return (
    <div className="App">
      <h1>Hello</h1>
      <Button 
      variant="outlined" 
      backgroundColor="#FDCA40"
      startIcon={<Icon>add</Icon>}
      className={ classes.button }>
        New Project
      </Button>
    </div>
  );
}

export default App;
