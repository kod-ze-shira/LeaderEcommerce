import React from 'react';
//קומפוננטה לעיצוב הלוגו
import Logo from "./compsEditStore/logo"
import { connect } from "react-redux";
import { actions } from "../redux/action";
// import './App.css';
import clsx from 'clsx';
import { ThemeProvider } from "@material-ui/styles";
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
//import lastFiles from './lastFiles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Icon from '@material-ui/core/Icon';
import Switch from '@material-ui/core/Switch';
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AddIcon from '@material-ui/icons/Add';
import SettingsIcon from '@material-ui/icons/Settings';
import CloseIcon from '@material-ui/icons/Close';
import ListAltIcon from '@material-ui/icons/ListAlt';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import InvertDesktopWindows from '@material-ui/icons/DesktopWindows';
import TabletMacIcon from '@material-ui/icons/TabletMac';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import EventNoteIcon from '@material-ui/icons/EventNote';
import NavigationIcon from '@material-ui/icons/Navigation';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import Drawer from '@material-ui/core/Drawer';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import Popover from '@material-ui/core/Popover';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { TextField, createMuiTheme } from '@material-ui/core';
import './wrap-component.css'
import quote from '../assets/quote.png';
import profil from '../assets/profil.png';
import logo from '../assets/logo.png';
import Content from './content';

const drawerWidth = '15%';
const useStyles = theme => ({
    // root: {
    //   display: 'flex',
    // },
    // appBar: {
    //   zIndex: theme.zIndex.drawer + 1,
    // },
    // drawer: {
    //   width: drawerWidth,
    //   flexShrink: 0,
    // },
    // drawerPaper: {
    //   width: drawerWidth,
    // },
    // drawerContainer: {
    //   overflow: 'auto',
    // },
    // content: {
    //   flexGrow: 1,
    //   padding: theme.spacing(3),
    // },
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
    constructor(prop) {
        super(prop);
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
        const { theme } = this.props;
        //const history = createBrowserHistory();
        const open = Boolean(this.state.anchorEl)
        return (
            <div className={classes.root}>
                {/* <Router> */}
                <CssBaseline />

                <AppBar
                    position="fixed"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: this.state.openDrawer,
                    })}
                    style={{ backgroundColor: '#fff', color: 'black' }}
                >
                    <div className={classes.row}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={this.handleDrawerOpen}
                        //edge="start"
                        >
                            <MenuIcon />
                        </IconButton>

                        <img src={logo} alt={"logo"} width="35px" />
                        <img src={profil} alt={"profil"} width="45px" />
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


                    {/* <Route path="/lastFiles" component={lastFiles} /> */}
                    <div className={classes.toolbar} />
                    {/* {this.showTips()} */}

                    <div style={{ direction: 'rtl' }}
                    // onMouseLeave={this.closeFastAccses}
                    >
                        {/* {this.state.hidden===false ?( */}
                        {/* {this.fastAccses()} */}
                        {/* : null } */}

                    </div>


                </main>
                <Drawer anchor={'right'} classes={{ paper: clsx(classes.drawerPaper, { [classes.drawerPaperLight]: this.state.color === 'black', }) }} className={clsx(classes.configurator, {
                    [classes.configuratorOpen]: this.state.right,
                    [classes.configuratorClose]: !this.state.right,
                })} open={this.state['right']} fullWidth="true" variant="persistent" onClose={this.toggleDrawer}>
                    {/* <AppBar position="static" style={{ background: '#3A405E 0% 0% no-repeat padding-box !important', backgroundColor: '#3A405E' }}>
            <Toolbar>
              <IconButton edge="start" color="inherit" aria-label="setting" >
                <SettingsIcon />
              </IconButton>
              <Typography variant="h6" style={{ flexGrow: 5 }}>
                Create New Event
  </Typography>
              <IconButton edge="start" color="inherit" aria-label="menu" onClick={this.toggleDrawer('right', false)}>
                <CloseIcon />
              </IconButton>
            </Toolbar>
                </AppBar> */}
                    <div className={classes.row} style={{ position: 'static', marginTop: '50px', marginBottom: '50px', overflowY: 'hidden' }}>
                        <IconButton edge="end" color="inherit" aria-label="setting" >
                            {/* component={Link} to="/lastFiles" */}
                            <SettingsIcon style={{ color: this.state.color }} />
                        </IconButton>
                        <Typography variant="h6" style={{ flexGrow: 5, color: this.state.fontColor, textAlign: 'center' }}>
                            Create New Page
                        </Typography>
                        <IconButton edge="start" color="inherit" aria-label="menu" onClick={this.changeColor}>
                            <InvertColorsIcon style={{ color: this.state.color }} />
                        </IconButton>
                    </div>

                    {/* כאן אני ממקמת את הקונפיגורטור הנוכחי */}


                    {this.props.logoDesign.currentComponent ? (() => {
                        switch (this.props.logoDesign.currentComponent) {
                            case "LOGO": return <Logo />;
                            case "": return
                                <h1>e</h1>;


                        }
                    })() :
                        <div></div>}






                    {/* <Button variant="outlined" size="large" className={classes.configuratorContent} endIcon={<svg style={{ fill: this.state.color }} xmlns="http://www.w3.org/2000/svg" width="8.211" height="11.124" viewBox="0 0 8.211 11.124"><path d="M13.6,5.344,5.915.047A.265.265,0,0,0,5.5.265V10.859a.265.265,0,0,0,.415.218L13.6,5.78a.265.265,0,0,0,0-.436Z" transform="translate(-5.5 0)" /></svg>} style={{ color: this.state.color }} onClick={this.f}>Post Setting</Button>
                    <Button variant="outlined" size="large" className={classes.configuratorContent} endIcon={<svg style={{ fill: this.state.color }} xmlns="http://www.w3.org/2000/svg" width="8.211" height="11.124" viewBox="0 0 8.211 11.124"><path d="M13.6,5.344,5.915.047A.265.265,0,0,0,5.5.265V10.859a.265.265,0,0,0,.415.218L13.6,5.78a.265.265,0,0,0,0-.436Z" transform="translate(-5.5 0)" /></svg>} style={{ color: this.state.color }}>Managment Setting</Button> */}

                    <AppBar position="absolute" color="primary" className={classes.appBarBottom}>
                        <Toolbar style={{ minHeight: '40px', paddingLeft: "10px", paddingRight: "0px" }}>

                            {/* <IconButton edge="start" color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <Fab color="secondary" aria-label="add" className={classes.fabButton}>
            <AddIcon />
          </Fab> */}
                            <div className={classes.grow} />
                            <IconButton color="inherit" style={{ paddingLeft: '0px', paddingRight: '12px' }}>
                                <InvertDesktopWindows />
                            </IconButton>
                            <IconButton color="inherit" style={{ paddingLeft: '0px', paddingRight: '12px' }}>
                                <TabletMacIcon />
                            </IconButton>
                            <IconButton color="inherit" style={{ paddingLeft: '0px', paddingRight: '12px' }}>
                                <PhoneIphoneIcon />
                                {/* <svg style={{fill:this.state.arrowColor}} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><defs></defs><path class="a" d="M8,23A15,15,0,1,1,23,38,15,15,0,0,1,8,23Zm27.1,0A12.1,12.1,0,1,0,23,35.1,12.093,12.093,0,0,0,35.1,23Zm-4.355,1.21V21.79a.728.728,0,0,0-.726-.726H23V17.012a.727.727,0,0,0-1.24-.514l-5.988,5.988a.726.726,0,0,0,0,1.028L21.76,29.5A.726.726,0,0,0,23,28.988V24.935h7.016A.728.728,0,0,0,30.742,24.21Z" transform="translate(-8 -8)"/></svg> */}
                            </IconButton>
                            {/* <IconButton edge="end" color="inherit" style={{paddingLeft:'0px', paddingRight:'12px'}}>
          <svg style={{fill:this.state.arrowColor}} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><defs></defs><path class="a" d="M38,23A15,15,0,1,0,23,38,15,15,0,0,0,38,23ZM10.9,23A12.1,12.1,0,1,1,23,35.1,12.093,12.093,0,0,1,10.9,23Zm4.355,1.21V21.79a.728.728,0,0,1,.726-.726H23V17.012a.727.727,0,0,1,1.24-.514l5.988,5.988a.726.726,0,0,1,0,1.028L24.24,29.5A.726.726,0,0,1,23,28.988V24.935H15.984A.728.728,0,0,1,15.258,24.21Z" transform="translate(-8 -8)"/></svg>        
            </IconButton> */}
                            <Fab
                                style={{ width: "150px" }}
                                variant="extended"
                                size="small"
                                color="primary"
                                aria-label="add"
                                className={classes.margin}
                            >
                                <svg style={{ fill: "white", flexShrink: 0, margin: '5px' }} xmlns="http://www.w3.org/2000/svg" width="8.211" height="11.124" viewBox="0 0 8.211 11.124"><path d="M13.6,5.344,5.915.047A.265.265,0,0,0,5.5.265V10.859a.265.265,0,0,0,.415.218L13.6,5.78a.265.265,0,0,0,0-.436Z" transform="translate(-5.5 0)" /></svg>
          Publish
        </Fab>
                        </Toolbar>
                    </AppBar>
                </Drawer>
                {/* </Router> */}
            </div >
        )
    };

    // fastAccses() {
    //   const { classes } = this.props;
    //   const actions = [
    //     { icon: <svg className='fast-accses' xmlns="http://www.w3.org/2000/svg" width="26.657" height="16" viewBox="0 0 26.657 16"><defs></defs><path class="a" d="M18.106,64H14.528a1.332,1.332,0,0,0-.9.35L9.534,68.1s-.008.012-.012.017a1.657,1.657,0,0,0-.087,2.332,1.737,1.737,0,0,0,2.337.112s.012,0,.017-.008L15.115,67.5a.666.666,0,1,1,.9.983l-1.087,1L20.992,74.4a3,3,0,0,1,.329.321v-8.06l-2.274-2.274A1.323,1.323,0,0,0,18.106,64Zm4.553,2.674V76a1.331,1.331,0,0,0,1.333,1.333h2.666V66.674Zm2,9.326a.666.666,0,1,1,.666-.666A.668.668,0,0,1,24.658,76ZM0,77.329H2.666A1.331,1.331,0,0,0,4,76V66.674H0Zm2-2.662a.666.666,0,1,1-.666.666A.668.668,0,0,1,2,74.667Zm18.156.775-6.219-5.048-1.25,1.145A3,3,0,1,1,8.634,67.12L12.041,64H8.551a1.33,1.33,0,0,0-.941.392L5.331,66.666v9.326h.762L9.863,79.4a2.665,2.665,0,0,0,3.749-.387l.008-.008.746.646a1.548,1.548,0,0,0,2.178-.225l1.308-1.608.225.183a1.331,1.331,0,0,0,1.874-.2l.4-.487a1.335,1.335,0,0,0-.192-1.878Z" transform="translate(0 -64)"/></svg>, name: 'New quote' },
    //     { icon:  <LocalOfferIcon/>, name: 'New Event' },
    //     { icon: <svg className='fast-accses' xmlns="http://www.w3.org/2000/svg" width="17.5" height="20" viewBox="0 0 17.5 20"><defs></defs><path class="a" d="M0,18.125A1.875,1.875,0,0,0,1.875,20h13.75A1.875,1.875,0,0,0,17.5,18.125V7.5H0Zm12.5-7.656A.47.47,0,0,1,12.969,10h1.563a.47.47,0,0,1,.469.469v1.563a.47.47,0,0,1-.469.469H12.969a.47.47,0,0,1-.469-.469Zm0,5A.47.47,0,0,1,12.969,15h1.563a.47.47,0,0,1,.469.469v1.562a.47.47,0,0,1-.469.469H12.969a.47.47,0,0,1-.469-.469Zm-5-5A.47.47,0,0,1,7.969,10H9.531a.47.47,0,0,1,.469.469v1.563a.47.47,0,0,1-.469.469H7.969a.47.47,0,0,1-.469-.469Zm0,5A.47.47,0,0,1,7.969,15H9.531a.47.47,0,0,1,.469.469v1.562a.47.47,0,0,1-.469.469H7.969a.47.47,0,0,1-.469-.469Zm-5-5A.47.47,0,0,1,2.969,10H4.531A.47.47,0,0,1,5,10.469v1.563a.47.47,0,0,1-.469.469H2.969a.47.47,0,0,1-.469-.469Zm0,5A.47.47,0,0,1,2.969,15H4.531A.47.47,0,0,1,5,15.469v1.562a.47.47,0,0,1-.469.469H2.969a.47.47,0,0,1-.469-.469ZM15.625,2.5H13.75V.625A.627.627,0,0,0,13.125,0h-1.25a.627.627,0,0,0-.625.625V2.5h-5V.625A.627.627,0,0,0,5.625,0H4.375A.627.627,0,0,0,3.75.625V2.5H1.875A1.875,1.875,0,0,0,0,4.375V6.25H17.5V4.375A1.875,1.875,0,0,0,15.625,2.5Z"/></svg>, name: 'New Time' },
    //     { icon: <svg className='fast-accses' xmlns="http://www.w3.org/2000/svg" width="17.5" height="20" viewBox="0 0 17.5 20"><defs></defs><path class="a" d="M17.5,2.857V4.643C17.5,6.217,13.581,7.5,8.75,7.5S0,6.217,0,4.643V2.857C0,1.283,3.919,0,8.75,0S17.5,1.283,17.5,2.857Zm0,4.018v4.018c0,1.574-3.919,2.857-8.75,2.857S0,12.467,0,10.893V6.875c1.88,1.295,5.321,1.9,8.75,1.9S15.62,8.17,17.5,6.875Zm0,6.25v4.018C17.5,18.717,13.581,20,8.75,20S0,18.717,0,17.143V13.125c1.88,1.295,5.321,1.9,8.75,1.9S15.62,14.42,17.5,13.125Z"/></svg>, name: 'Share' },
    //     { icon: <AccountCircleIcon />, name: 'New Contact' },
    //   ];
    //   return (
    //     <Grid item xs={12} md={6} style={{bottom: '20px',marginLeft: '65%',position:"absolute" }}>
    //         <div className={classes.demo}>
    //           <List style={{visibility: this.state.visibility}}>
    //           <ListItem>
    //               <ListItemAvatar>
    //                   <Avatar style={{backgroundColor:'#f50057'}}>
    //                    <svg className='fast-accses' xmlns="http://www.w3.org/2000/svg" width="26.657" height="16" viewBox="0 0 26.657 16"><defs></defs><path class="a" d="M18.106,64H14.528a1.332,1.332,0,0,0-.9.35L9.534,68.1s-.008.012-.012.017a1.657,1.657,0,0,0-.087,2.332,1.737,1.737,0,0,0,2.337.112s.012,0,.017-.008L15.115,67.5a.666.666,0,1,1,.9.983l-1.087,1L20.992,74.4a3,3,0,0,1,.329.321v-8.06l-2.274-2.274A1.323,1.323,0,0,0,18.106,64Zm4.553,2.674V76a1.331,1.331,0,0,0,1.333,1.333h2.666V66.674Zm2,9.326a.666.666,0,1,1,.666-.666A.668.668,0,0,1,24.658,76ZM0,77.329H2.666A1.331,1.331,0,0,0,4,76V66.674H0Zm2-2.662a.666.666,0,1,1-.666.666A.668.668,0,0,1,2,74.667Zm18.156.775-6.219-5.048-1.25,1.145A3,3,0,1,1,8.634,67.12L12.041,64H8.551a1.33,1.33,0,0,0-.941.392L5.331,66.666v9.326h.762L9.863,79.4a2.665,2.665,0,0,0,3.749-.387l.008-.008.746.646a1.548,1.548,0,0,0,2.178-.225l1.308-1.608.225.183a1.331,1.331,0,0,0,1.874-.2l.4-.487a1.335,1.335,0,0,0-.192-1.878Z" transform="translate(0 -64)"/></svg>
    //                   </Avatar>
    //                 </ListItemAvatar>
    //                 <ListItemText
    //                   primary="New Quote"
    //                   //secondary={secondary ? 'Secondary text' : null}
    //                 />
    //               </ListItem>
    //               <ListItem>
    //                 <ListItemAvatar>
    //                   <Avatar style={{backgroundColor:'#f50057'}}>
    //                     <LocalOfferIcon/>
    //                   </Avatar>
    //                 </ListItemAvatar>
    //                 <ListItemText
    //                   primary="New Event"
    //                   //secondary={secondary ? 'Secondary text' : null}
    //                 />
    //               </ListItem>

    //               <ListItem>
    //               <ListItemAvatar>
    //                   <Avatar style={{backgroundColor:'#f50057'}}>
    //                   <svg className='fast-accses' xmlns="http://www.w3.org/2000/svg" width="17.5" height="20" viewBox="0 0 17.5 20"><defs></defs><path class="a" d="M0,18.125A1.875,1.875,0,0,0,1.875,20h13.75A1.875,1.875,0,0,0,17.5,18.125V7.5H0Zm12.5-7.656A.47.47,0,0,1,12.969,10h1.563a.47.47,0,0,1,.469.469v1.563a.47.47,0,0,1-.469.469H12.969a.47.47,0,0,1-.469-.469Zm0,5A.47.47,0,0,1,12.969,15h1.563a.47.47,0,0,1,.469.469v1.562a.47.47,0,0,1-.469.469H12.969a.47.47,0,0,1-.469-.469Zm-5-5A.47.47,0,0,1,7.969,10H9.531a.47.47,0,0,1,.469.469v1.563a.47.47,0,0,1-.469.469H7.969a.47.47,0,0,1-.469-.469Zm0,5A.47.47,0,0,1,7.969,15H9.531a.47.47,0,0,1,.469.469v1.562a.47.47,0,0,1-.469.469H7.969a.47.47,0,0,1-.469-.469Zm-5-5A.47.47,0,0,1,2.969,10H4.531A.47.47,0,0,1,5,10.469v1.563a.47.47,0,0,1-.469.469H2.969a.47.47,0,0,1-.469-.469Zm0,5A.47.47,0,0,1,2.969,15H4.531A.47.47,0,0,1,5,15.469v1.562a.47.47,0,0,1-.469.469H2.969a.47.47,0,0,1-.469-.469ZM15.625,2.5H13.75V.625A.627.627,0,0,0,13.125,0h-1.25a.627.627,0,0,0-.625.625V2.5h-5V.625A.627.627,0,0,0,5.625,0H4.375A.627.627,0,0,0,3.75.625V2.5H1.875A1.875,1.875,0,0,0,0,4.375V6.25H17.5V4.375A1.875,1.875,0,0,0,15.625,2.5Z"/></svg>
    //                   </Avatar>
    //                 </ListItemAvatar>
    //                 <ListItemText
    //                   primary="New Time"
    //                   //secondary={secondary ? 'Secondary text' : null}
    //                 />
    //               </ListItem>
    //               <ListItem>
    //               <ListItemAvatar>
    //                   <Avatar style={{backgroundColor:'#f50057'}}>
    //                   <svg className='fast-accses' xmlns="http://www.w3.org/2000/svg" width="17.5" height="20" viewBox="0 0 17.5 20"><defs></defs><path class="a" d="M17.5,2.857V4.643C17.5,6.217,13.581,7.5,8.75,7.5S0,6.217,0,4.643V2.857C0,1.283,3.919,0,8.75,0S17.5,1.283,17.5,2.857Zm0,4.018v4.018c0,1.574-3.919,2.857-8.75,2.857S0,12.467,0,10.893V6.875c1.88,1.295,5.321,1.9,8.75,1.9S15.62,8.17,17.5,6.875Zm0,6.25v4.018C17.5,18.717,13.581,20,8.75,20S0,18.717,0,17.143V13.125c1.88,1.295,5.321,1.9,8.75,1.9S15.62,14.42,17.5,13.125Z"/></svg>
    //                   </Avatar>
    //                 </ListItemAvatar>
    //                 <ListItemText
    //                   primary="New Stories"
    //                   //secondary={secondary ? 'Secondary text' : null}
    //                 />
    //               </ListItem>

    //               <ListItem>
    //               <ListItemAvatar>
    //                   <Avatar style={{backgroundColor:'#f50057'}}>
    //                     <AccountCircleIcon />
    //                   </Avatar>
    //                 </ListItemAvatar>
    //                 <ListItemText
    //                   primary="New Contact"
    //                   //secondary={secondary ? 'Secondary text' : null}
    //                 />
    //               </ListItem>
    //           </List>
    //           <Fab color="secondary" aria-label="add" onMouseEnter={this.getFastAccses}>
    //         <AddIcon />
    //       </Fab>
    //         </div>

    //       </Grid>
    //     //  <SpeedDial
    //     //     ariaLabel="SpeedDial example"
    //     //     className={classes.speedDial}
    //     //     //hidden={hidden}
    //     //     icon={<SpeedDialIcon />}
    //     //     onClose={this.handleClose}
    //     //     onOpen={this.handleOpen}
    //     //     open={this.state.openSpeedDial}
    //     //     direction="up"
    //     //   >
    //     //     {actions.map((action) => (

    //     //       <SpeedDialAction
    //     //         key={action.name}
    //     //         icon={action.icon}
    //     //         tooltipTitle={action.name}
    //     //         onClick={this.handleClose}
    //     //         style={{backgroundColor:"red"}}
    //     //       />

    //     //     ))}
    //     //   </SpeedDial>
    //   )
    // }

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
    // toggleDrawer = (anchor, open) => (event) => {
    //   const show = this.state.right
    //   this.setState({right: !show});
    //   this.setState({
    //     // right:open;
    //     [anchor]: open
    //   });
    //   setState({ ...state, [anchor]: open });

    toggleDrawer = () => {
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

    changeColor = () => {
        if (this.state.color === 'gray')
            this.setState({ color: 'black', fontColor: 'black', arrowColor: 'white' })
        else
            this.setState({ color: 'gray', fontColor: 'white', arrowColor: 'gray' });
    };

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

        logoDesign: state.logoReducer.logoDesign
    }
}

const mapDispatchToProps = (dispatch) => ({

    changeCurrentComponent: (e) => dispatch(actions.setCurrentComponent())
})
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(Wrap));



//export default Wrap;