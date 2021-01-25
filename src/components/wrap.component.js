//קומפוננטה לעיצוב הלוגו
// import IconEdit from './compsEditStore/iconEdit'
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Fab from '@material-ui/core/Fab';
// import SettingsIcon from '@material-ui/icons/Settings';
// import InvertColorsIcon from '@material-ui/icons/InvertColors';
// import InvertDesktopWindows from '@material-ui/icons/DesktopWindows';
// import TabletMacIcon from '@material-ui/icons/TabletMac';
// import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
// import Drawer from '@material-ui/core/Drawer';
// import AddProduct from './compsEditStore/addProduct2';
// import Search from './compsEditStore/search';
// import AddCategory from './compsEditStore/addCategory';
// // import {browserHistory} from "react-router";
// // import { useHistory } from "react-router-dom";
// // import { logOut } from '../services/firebase'
// import EditProduct from './compsEditStore/editProduct';
// import EditCategory from './compsEditStore/editCategory';

import React from 'react';
import { connect } from "react-redux";
import { actions } from "../redux/action";
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
//import lastFiles from './lastFiles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import './wrap-component.css'
import profil from '../assets/profil.png';
import logo from '../assets/logo.png';
import Content from './content';
import { logOut } from '../services/firebase'
import { Link, withRouter } from "react-router-dom";
import Configurator from './Configurator';



const drawerWidth = '15%';
const useStyles = theme => ({
    root: {
        display: 'flex',
        position: 'relative',
    },
    configurator: {
        zIndex: theme.zIndex.drawer + 10,
        position: 'relative',
        marginTop: '50px',
        height: 'calc(100% - 64px)',
        top: 64,
        flexShrink: 0,
        //zIndex:1305
    },
    configuratorOpen: {
        height: 'calc(100% - 64px)',
        top: 64,
        width: '18%',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    configuratorClose: {
        width: '18%',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    appBar: {
        //alignItems: 'center',
        // justify:'space-between',
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        // marginLeft: drawerWidth,
        // width: `calc(100% - ${drawerWidth}px)`,//change delete
        // transition: theme.transitions.create(['width', 'margin'], {
        //   easing: theme.transitions.easing.sharp,
        //   duration: theme.transitions.duration.enteringScreen,
        // }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxShadow: '0px 3px 6px #00000029',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        marginTop: 50,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        backgroundColor: 'white',
        margin: '30px',
        marginTop: '100px',
        borderStyle: 'dashed',
        borderColor: '#d3d3d361',
        height: '650px',
        position: 'relative',
        overflow: 'scroll'
    },
    appBarBottom: {
        position: 'initial',
        top: 'auto',
        bottom: 0,
        background: '#0A0E1B 0% 0% no-repeat padding-box',
        minHeight: '50px',
    },
    grow: {
        flexGrow: 1,
    },
    fabButton: {
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
    },
    row: {
        display: 'flex',
        alignItems: 'center',

        // justify-content-between
        //   display: 'inline-block',
        //   flexGrow: 1,
        //   display: 'flex',
        // flexDirection: 'row',
        justifyContent: 'space-between',
    },
    margin: {
        margin: theme.spacing(1),
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    paper: {
        height: 140,
        width: 100,
    },
    popover: {
        pointerEvents: 'none',
    },
    popoverPaper: {
        padding: theme.spacing(5),
    },
    configuratorContent: {
        marginBottom: theme.spacing(1),
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    drawerPaper: {
        top: '40px',
        height: 'calc(100% - 40px)',
        background: '#3a405e 0% 0% no-repeat padding-box !important',
        border: '1px solid #707070 !important',
    },
    drawerPaperLight: {
        background: '#FFFFFF 0% 0% no-repeat padding-box !important',
        border: '1px solid #FFFFFF !important',
        boxShadow: '0px 3px 6px #00000029',
    },
    speedDial: {
        position: 'absolute',
        '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
            bottom: theme.spacing(2),
            right: theme.spacing(2),

        },
        '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
            top: theme.spacing(2),
            left: theme.spacing(2),
        },
    },
});


class Wrap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openDrawer: false,
            valueTab: 0,
            openCollapse: false,
            right: true,
            visibility: 'hidden',
            anchorEl: null,
            color: 'gray',
            background: '#3a405e 0% 0% no-repeat padding-box',
            fontColor: 'white',
            arrowColor: 'gray',
            openSpeedDial: false,
        };
    }
    render() {
        const { classes } = this.props;
        // const { theme } = this.props;
        //const history = createBrowserHistory();
        const open = Boolean(this.state.anchorEl)
        const logOutHandler = () => {
            logOut.then(() => {
                console.log('logged out')
                this.props.history.push("/login");
            }).catch((error) => {
                console.log(error.message)
            })
        }

        return (
            <div className={classes.root}>
                {/* <Router> */}
                <CssBaseline />

                <AppBar
                    position="fixed"
                    className={clsx(classes.appBar, { [classes.appBarShift]: this.state.openDrawer, })}
                    style={{ backgroundColor: '#fff', color: 'black' }}>

                    <div className={classes.row}>
                        {/* <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            //edge="start"
                            onClick={this.handleDrawerOpen}>
                            <MenuIcon />

                         <h1>{this.props.user.username}</h1>    
                        </IconButton>

                        <img src={logo} alt={"logo"} width="35px" />
                        <button className="btn btn-success" onClick={logOutHandler}>Log Out</button>
                        {/* <img src={profil} alt={"profil"} width="45px" /> */}
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={this.toggleDrawer}
                            //edge="end"
                            style={{ right: 0 }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </div>
                </AppBar>

                <main className={classes.content} style={{ height: '85vh' }}>
                    <Content />
                </main>
                <Configurator state={this.state} />
            </div >
        )
    };




    showTips() {
        const { classes } = this.props;
        return (
            <Grid item xs={12}>
                <Grid container justify="between" spacing={3}>
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => (

                        <Grid key={value} item>
                            {value != 0 ? (<Paper className={classes.paper} />) : <Button variant="contained" color="secondary" className={classes.paper}>
                                <AddIcon />
                            </Button>}
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        )
    }

    toggleDrawer = () => {
        debugger
        const show = this.state.right
        this.setState({ right: !show });
    };

    handleDrawerOpen = () => {
        const show = this.state.openDrawer
        this.setState({ openDrawer: !show });
        //this.setState({openDrawer:true})
    };

    handleDrawerClose = () => {
        this.setState({ openDrawer: false })
    };

    handleChange = (event, newValue) => {
        this.setState({ valueTab: newValue })
    };

    getFastAccses = () => {
        this.setState({ visibility: 'visible' })
    };

    closeFastAccses = () => {
        this.setState({ visibility: 'hidden' })
    };

    handlePopoverOpen = (event) => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handlePopoverClose = () => {
        this.setState({ anchorEl: null });
    };

    // changeColor = () => {
    //     if (this.state.color === 'gray')
    //         this.setState({ color: 'black', fontColor: 'black', arrowColor: 'white' })
    //     else
    //         this.setState({ color: 'gray', fontColor: 'white', arrowColor: 'gray' });
    // };

    handleClose = () => {
        this.setState({ openSpeedDial: false });
    };

    handleOpen = () => {
        this.setState({ openSpeedDial: true });
    };
    // changeToLightColor=()=>{
    f = () => {

    }
    // }
}

const mapStateToProps = (state) => {
    return {
        //אפשר לקרוא שם אחר לאוביקט
        logoDesign: state.logoReducer.logoDesign,
        viewModel: state.viewModeReducer.viewModel,
        user: state.userReducer.user,
    }
}

const mapDispatchToProps = (dispatch) => ({
    setcomponnet: (r) => dispatch(actions.setCurrentComponent(r)),
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(withRouter(Wrap)));
//export default Wrap;
// const HomeWitRouter = withRouter(Home);
