import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useDispatch} from 'react-redux';
import { addPendingTodo } from '../../redux/action/dataAction';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DatePicker from './DatePicker';
import {  useSnackbar } from 'notistack';



const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const Form = $ =>  {
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(new Date());
  const dispatch = useDispatch();
 
  const handleSubmit = e => {
    e.preventDefault();
    if(title.length <= 2 || date===""){
        enqueueSnackbar('Enter valid title and date', { variant : 'error' });
    }
    else{
        enqueueSnackbar('added', { variant : 'success' });
        dispatch(addPendingTodo({ title, date, created: new Date()}))
    }
  };
  

  return (<>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AddCircleIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Add Todo
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="title"
            label="Title"
            name="title"
            autoComplete="title"
            autoFocus
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <br/> <br/>
          <DatePicker setDate={setDate} date={date} />
         
          <Button
           disabled = {title===""}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Add Task
          </Button>
        </form>
      </div>
    </Container>
    </>
  );
}