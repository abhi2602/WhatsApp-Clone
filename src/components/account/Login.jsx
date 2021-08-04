

import { GoogleLogin } from 'react-google-login';
import { Dialog,withStyles,Box,Typography, makeStyles, ListItem, List } from '@material-ui/core';



const useStyles=makeStyles({
    component:{
        display:'flex'
    },
    leftComponent:{
        padding:'56px 0 56px 56px'
    },
    qrCode:{
        height:264,
        width:264,
        margin:'50px 0 0 50px'
    },
    title:{
        fontSize:'26px',
        marginBottom:'25px',
        color:'#525252',
        fontFamily:'Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,fira Sans,sans-serif',
        fontWeight:300
    },
    list:{
        '& >* ':{
            fontSize:18,
            padding:0,
            marginTop:15,
            lineHeight:'28px',
            color:'#4a4a4a'
        }
    }
})

const style ={
    dialogPaper:{
        height:'95%',
        width:'60%',
        marginTop:'12%',
        boxShadow:'none',
        borderRadius:'none',
        maxHeight:'100%',
        maxWidth:'100%'
    }
}

const Login = ({classes}) => {
    const classname = useStyles();
    const url= 'https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg';
    const clientId='618920243694-purngb286mbb46r5k2avuot30a0aa8tu.apps.googleusercontent.com';

    const onLoginSuccess = () =>{
        console.log('login Successfull');
    }
    const onLoginFailure = () => {
        console.log('login failure');
    }

    return(
        <Dialog
        open={true}
        classes={{paper:classes.dialogPaper}}
        BackdropProps={{style:{background:'unset'}}}
        >
           <Box className={classname.component}>
               <Box className={classname.leftComponent}>
                    <Typography className={classname.title}>To use WhatsApp on your Computer:</Typography>
                    <List className={classname.list}>
                        <ListItem>1. Open WhatsAppon your phone</ListItem>
                        <ListItem>2. Tap Menu or Settings and select Linked Devices</ListItem>
                        <ListItem>3. Point your phone to this screen to capture the code</ListItem>
                    </List>
               </Box>
               <Box>
                    <img src={url} alt='qr'  className={classname.qrCode}/>
                    <GoogleLogin
                    cookiePolicy={'single_host_origin'}
                    buttonText=""
                    isSignedIn={true}
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    clientId={clientId}/>
               </Box>
           </Box>
        </Dialog>
    )
}

export default withStyles(style)(Login);
