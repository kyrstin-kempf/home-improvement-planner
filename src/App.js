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
      <Button 
      variant="outlined" 
      backgroundColor="#FDCA40"
      startIcon={<Icon>add</Icon>}
      className={ classes.button }>
        New Project
      </Button>
      <form>
        <div>
          <label htmlFor='title'>Title</label>
          <input type="text" id='title'/>
        </div>
        <input type="submit" value="create project" />
      </form>
    </div>
  );
}

export default App;
