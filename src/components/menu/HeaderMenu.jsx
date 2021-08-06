import { makeStyles, Menu,MenuItem } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useState,useContext } from 'react';
import { AccountContext } from '../../context/AccountProvider';
import { GoogleLogout } from 'react-google-login';
import { clientId } from '../../constant/Data';


const useStyles=makeStyles({
       menuItems:{
        fontSize:14,
        padding:'15px 60px 5px 24px',
        color:'#4a4a4a'
       },
       logout:{
           border:'none!important',
           boxShadow:'none!important',
           '& > *':{
               padding:'0px!important'
           }
       }
});



const HeaderMenu = () => {

    const classes = useStyles();

    const [open, setOpen] = useState(false)
    const {setAccount} = useContext(AccountContext);
    const handleClose = () =>{
        setOpen(false);
    }

    const handleClick = (event) => {
        setOpen(event.currentTarget);
    }
    const onLogoutSuccess = () => {
        alert("You have been logged out successfully");
        console.clear();
        setAccount('');
    }

    return (
        <>
            <MoreVertIcon onClick={handleClick} />
            <Menu
                
                anchorEl={open}
                keepMounted
                open={Boolean(open)}
                onClose={handleClose}
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical:'bottom',
                    horizontal:'center'
                }}
                transformOrigin={{
                    vertical:'top',
                    horizontal:'right'
                }}
            >
                <MenuItem className={classes.menuItems} onClick={handleClose}>Profile</MenuItem>
                <MenuItem className={classes.menuItems} onClick={handleClose}>
                    <GoogleLogout
                     buttonText="Logout"

                     onLogoutSuccess={onLogoutSuccess}
                     clientId={clientId}
                     className={classes.logout}
                    >

                    </GoogleLogout>
                </MenuItem>
                
            </Menu>
        </>
    )
}
export default HeaderMenu;