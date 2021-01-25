import React, { useState } from 'react';
import { connect } from 'react-redux';
import { actions } from "../redux/action";
import { withStyles } from '@material-ui/core/styles';
import Logo from "./compsEditStore/logo"
import Image from './compsEditStore/image';
import TextOnThePicture from './compsEditStore/textOnThePicture';
import TextTitleOfCategory from './compsEditStore/textTitleOfCategory'
import TextTitleOfProduct from './compsEditStore/textTitleOfProduct'
import TextIntoCategory from './compsEditStore/textIntoCategory'
import ProductOnPageCategory from './compsEditStore/productOnPageCategory';

import Search from './compsEditStore/search';
import AddProduct from './compsEditStore/addProduct2';
import AddCategory from './compsEditStore/addCategory';
import EditProduct from './compsEditStore/editProduct';
import EditCategory from './compsEditStore/editCategory';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import SettingsIcon from '@material-ui/icons/Settings';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import InvertDesktopWindows from '@material-ui/icons/DesktopWindows';
import TabletMacIcon from '@material-ui/icons/TabletMac';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import Drawer from '@material-ui/core/Drawer';
// import {browserHistory} from "react-router";
// import { useHistory } from "react-router-dom";
// import { logOut } from '../services/firebase'

import { Link, useHistory } from "react-router-dom";
import clsx from 'clsx';



import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';


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
        width: '1%',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) - 70,
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


function Configurator(props) {
    const { classes } = props;
    const CreateNewPage = "Create New Page"
    const history = useHistory();
    const [state,setState] = useState({
        openDrawer: false,
        valueTab: 0,
        openCollapse: false,
        // right: true,
        visibility: 'hidden',
        anchorEl: null,
        color: 'gray',
        background: '#3a405e 0% 0% no-repeat padding-box',
        fontColor: 'white',
        arrowColor: 'gray',
        openSpeedDial: false,
    })
    function changeColor  () {
        if (state.color === 'gray')
            setState({ color: 'black', fontColor: 'black', arrowColor: 'white' })
        else
            setState({ color: 'gray', fontColor: 'white', arrowColor: 'gray' });
    };
        function view  ()  {
            // history.push("/login")
        debugger;
        props.changeViewMode(true);
        history.push("/view/" + props.viewModel.currentPage);
    }
    
    return (
            <Drawer anchor={'right'}
                classes={{ paper: clsx(classes.drawerPaper, { [classes.drawerPaperLight]: state.color === 'black', }) }}
                className={clsx(classes.configurator, {
                    [classes.configuratorOpen]: props.state.right,
                    [classes.configuratorClose]: !props.state.right,
                })}
                open={props.state['right']} fullWidth="true" variant="persistent">

                <div className={classes.row}
                    style={{ position: 'static', marginTop: '50px', marginBottom: '50px', overflowY: 'hidden' }}>

                    <Link to='/0/admin'>
                        {/* props.history.push("/0/admin");console.log(props.history); */}
                        <IconButton onClick={() => {  props.setcomponnet("") }} edge="end" color="inherit" aria-label="setting" >
                            <SettingsIcon style={{ color: state.color }} />
                        </IconButton>
                    </Link>
                    <Typography variant="h6" style={{ flexGrow: 5, color: state.fontColor, textAlign: 'center' }}>
                        {CreateNewPage}
                    </Typography>

                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={changeColor}>
                        <InvertColorsIcon style={{ color: state.color }} />
                    </IconButton>
                </div>

                {/* כאן אני ממקמת את הקונפיגורטור הנוכחי */}

                <div id="accordion" className=''>
                    {/* <EditPage></EditPage> */}
                    {props.logoDesign.currentComponent ? (() => {
                        switch (props.logoDesign.currentComponent) {
                            case "LOGO": return <Logo />;
                            case "Image": return <Image />;
                            case "addProduct": return <AddProduct />;
                            case "addCategory": return <AddCategory />;
                            case "search": return <Search />;
                            case "textOnThePicture": return <TextOnThePicture />;
                            case "TextTitleOfCategory": return <TextTitleOfCategory />;
                            case "TextTitleOfProduct": return <TextTitleOfProduct />;
                            case "TextIntoCategory": return <TextIntoCategory />;
                            case "ProductOnPageCategory": return <ProductOnPageCategory />;
                            case "editProduct": return <EditProduct />
                            case "editCategory": return <EditCategory />
                            // case "IconEdit": return <IconEdit />;
                            case "": return <h1>e</h1>;
                            default: return <h3>didnt check</h3>;
                        }
                    })() :
                        <h3>didnt check</h3>}
                </div>







                {/* <Button variant="outlined" size="large" className={classes.configuratorContent} endIcon={<svg style={{ fill: state.color }} xmlns="http://www.w3.org/2000/svg" width="8.211" height="11.124" viewBox="0 0 8.211 11.124"><path d="M13.6,5.344,5.915.047A.265.265,0,0,0,5.5.265V10.859a.265.265,0,0,0,.415.218L13.6,5.78a.265.265,0,0,0,0-.436Z" transform="translate(-5.5 0)" /></svg>} style={{ color: state.color }} onClick={f}>Post Setting</Button>
<Button variant="outlined" size="large" className={classes.configuratorContent} endIcon={<svg style={{ fill: state.color }} xmlns="http://www.w3.org/2000/svg" width="8.211" height="11.124" viewBox="0 0 8.211 11.124"><path d="M13.6,5.344,5.915.047A.265.265,0,0,0,5.5.265V10.859a.265.265,0,0,0,.415.218L13.6,5.78a.265.265,0,0,0,0-.436Z" transform="translate(-5.5 0)" /></svg>} style={{ color: state.color }}>Managment Setting</Button> */}

                <AppBar position="absolute" color="primary" className={classes.appBarBottom}>
                    <Toolbar style={{ minHeight: '40px', paddingLeft: "10px", paddingRight: "0px" }}>

                        {/* <IconButton edge="start" color="inherit" aria-label="open drawer">
      <MenuIcon />
      </IconButton>
      <Fab color="secondary" aria-label="add" className={classes.fabButton}>
      <AddIcon />
      </Fab> */}

                        <div className={classes.grow} />
                        <IconButton color="inherit" style={{ paddingLeft: '0px', paddingRight: '12px' }} onClick={view}>
                            <InvertDesktopWindows />
                        </IconButton>
                        <IconButton color="inherit" style={{ paddingLeft: '0px', paddingRight: '12px' }}>
                            <TabletMacIcon />
                        </IconButton>
                        <IconButton color="inherit" style={{ paddingLeft: '0px', paddingRight: '12px' }}>
                            <PhoneIphoneIcon />
                            {/* <svg style={{fill:state.arrowColor}} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><defs></defs><path class="a" d="M8,23A15,15,0,1,1,23,38,15,15,0,0,1,8,23Zm27.1,0A12.1,12.1,0,1,0,23,35.1,12.093,12.093,0,0,0,35.1,23Zm-4.355,1.21V21.79a.728.728,0,0,0-.726-.726H23V17.012a.727.727,0,0,0-1.24-.514l-5.988,5.988a.726.726,0,0,0,0,1.028L21.76,29.5A.726.726,0,0,0,23,28.988V24.935h7.016A.728.728,0,0,0,30.742,24.21Z" transform="translate(-8 -8)"/></svg> */}
                        </IconButton>
                        {/* <IconButton edge="end" color="inherit" style={{paddingLeft:'0px', paddingRight:'12px'}}>
<svg style={{fill:state.arrowColor}} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><defs></defs><path class="a" d="M38,23A15,15,0,1,0,23,38,15,15,0,0,0,38,23ZM10.9,23A12.1,12.1,0,1,1,23,35.1,12.093,12.093,0,0,1,10.9,23Zm4.355,1.21V21.79a.728.728,0,0,1,.726-.726H23V17.012a.727.727,0,0,1,1.24-.514l5.988,5.988a.726.726,0,0,1,0,1.028L24.24,29.5A.726.726,0,0,1,23,28.988V24.935H15.984A.728.728,0,0,1,15.258,24.21Z" transform="translate(-8 -8)"/></svg>        
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
                {/* </Router> */}
            </Drawer>


    )
}
const mapStateToProps = (state) => {
    return {
        //אפשר לקרוא שם אחר לאוביקט
        logoDesign: state.logoReducer.logoDesign,
    }
}

const mapDispatchToProps = (dispatch) => ({
    setcomponnet: (r) => dispatch(actions.setCurrentComponent(r)),
    changeViewMode: (e) => dispatch(actions.setMode(e))
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(Configurator));
















