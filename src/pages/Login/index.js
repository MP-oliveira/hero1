import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '15px',
        flexWrap: 'wrap',
    },
    h4: {
        margin: '60px 0',
        textAlign: 'center',
    },
    form: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent:'center',
        alignItems: 'center',
        gap: '15px',    
    },
    TextField: {
        width: '35ch',
        paddingRight: '20px',
    },
    Button: {
        display: 'flex',
        width: '20ch',
        height: '5ch',
        borderRadius: '10px',
        marginLeft: '4%',
        marginTop: '50px',
        marginBottom: '7px',
        fontSize: '18px',
    },
    Link: {
        marginLeft: '43%',
        textDecoration: 'none',
    }
  }));

 function Login() {
    const classes = useStyles();
    
  return (
    <Grid 
       container 
       display='flex'
       justifyContent='center'
       alignContent='center'
    >
      <Box
        boxShadow={10}
        bgcolor="background.paper"
        m={1}
        p={1}
        style={{ width: '25rem', height: '35rem' }}
        borderRadius={16}
      >
      <Typography variant="h4" className={classes.h4}>Login</Typography>
      <form className={classes.form} noValidate autoComplete="off">
      <TextField className={classes.TextField} label="Nome" />
      <TextField className={classes.TextField} type='password' label="Senha" />
      <Button
      className={classes.Button}
      variant="contained" 
      color="secondary"
      >
      Entrar
      </Button>
    </form> 
    <Link className={classes.Link} to={'/cadastro'}>Cadastre-se</Link>
      </Box>
    </Grid>
  );
}

export default Login