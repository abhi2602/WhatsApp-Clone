import { Box, InputBase, makeStyles } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
    component: {
        backgroundColor: '#f6f6f6',
        height:43,
        display:'flex',
        alignItems:'center'
    },
    search: {
        position: 'relative',
        borderRadius: 18,
        backgroundColor: '#ffffff',
        margin: '0,13px',
        width: '100%',
    },
    searchIcon: {
        color:'#919191',
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
       
    },
    inputRoot: {
        width:'100%'
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: 65,
        fontSize:14,
        height:15,
        
        width: '100%',
        
    },
}))




const Search = () => {

    const classes = useStyles();
    return (
        <Box>
            <Box className={classes.search}>
                <Box className={classes.searchIcon}>
                    <SearchIcon fontSize="small"/>
                </Box>
                <InputBase
                    placeholder="Search or start a new chat"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                />
            </Box>
        </Box>
    )
}


export default Search;