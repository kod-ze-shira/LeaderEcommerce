import React, { Component } from 'react'
import { connect } from 'react-redux';
import { actions } from "../../redux/action";
import { makeStyles } from '@material-ui/core/styles';

import Switch from '@material-ui/core/Switch';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import { withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/core/Menu';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import FormLabel from '@material-ui/core/FormLabel';

import Slider from '@material-ui/core/Slider';
import { HuePicker } from 'react-color';
import Grid from '@material-ui/core/Grid';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import SettingsIcon from '@material-ui/icons/Settings';
import Box from '@material-ui/core/Box';
import tempImage from "../../assets/main-pic.png"

import InvertColorsIcon from '@material-ui/icons/InvertColors';
import clsx from 'clsx';

const AntSwitch = withStyles((theme) => ({
    root: {
        width: 28,
        height: 16,
        padding: 0,
        display: 'flex',
    },
    switchBase: {
        padding: 2,
        color: theme.palette.grey[500],
        '&$checked': {
            transform: 'translateX(12px)',
            color: theme.palette.common.white,
            '& + $track': {
                opacity: 1,
                backgroundColor: theme.palette.primary.main,
                borderColor: theme.palette.primary.main,
            },
        },
    },
    thumb: {
        width: 12,
        height: 12,
        boxShadow: 'none',
    },
    track: {
        border: `1px solid ${theme.palette.grey[500]}`,
        borderRadius: 16 / 2,
        opacity: 1,
        backgroundColor: theme.palette.common.white,
    },
    checked: {},
}))(Switch);


const useStyles = (theme) => ({
    root: {
        flexGrow: 1,
        overflowX: 'hidden !important',
        '& .PrivateValueLabel-circle': {

            display: 'none'

        },
        "& input::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
            display: "none"
        }
    },

    Logo_root_37: {
        background_color: '#4d5358'
    },

    MuiSlider_root: {
        color: '#fafafa',
        width: '92%',
        cursor: 'pointer',
        height: '2px',
        display: 'inline_block',
        padding: '13px 0',
        position: 'relative',
        box_sizing: 'content_box',
        touch_action: 'none',
        _webkit_tap_highlight_color: 'transparent'
    },
    textField: {
        width: 200,
        // height: 19,
        textAlign: 'left',
        color: '#787880',
        opacity: 1,
    },

    checkbox: {
        borderColor: '#5E81F4'
    },
    p_Publiceveryonecansee: {
        top: 0,
        left: -70,
        // width: 100,
        height: 10,
        // textAlign: 'left',
        font: 'Bold 14px/19px Roboto',
        // letterSpacing: 0.17,
        color: '#1C1D21',
        opacity: 1,
    },
    p_editby: {
        top: 60,
        left: -100,
        textAlign: 'left',
        font: 'Regular 14px/21px Roboto',
        letterSpacing: ' 0.2px',
        color: ' #787880',
        opacity: 1
    },
    i_text_description: {
        top: 252,
        left: 1276,
        width: 292,
        height: 94,
        textAlign: 'left',
        letterSpacing: 0,
        opacity: 1
    },
    icon_upload: {
        fontSize: 100,
        textAlign: 'left',
        //    width:13
    },
    icon_clander: {
        textAlign: 'left'
    },
    list1: {
        fontSize: 'smaller',
        paddingTop: 1
    },
    drawer: {
        backgroundColor: '#3A405E'
    },

    RoundedUp: {

        borderRadius: ' 50px 0px 0px 0px '
    },
    fieldTextStyle: {
        textAlign: 'left',
        font: 'Light 40px/40px Roboto',
        letterSpacing: '.1px',
        color: '#cfd1d9!important',
        textTransform: 'capitalize',
        backgroundColor: 'transparent',
        border: 0,
        outline: 0,
        borderBottom: '1px solid #75798e',
        opacity: 1,
    },

    textcontect: {
        color: 'white',
        margin: '1%'
    },
    toolbar: {
        paddingRight: '0px',

    },
    multilineColor: {
        color: 'white'
    },
    form: {
        margin: 'auto'
    },
    button: {
        color: 'white',
        margintTop: '60%',
        borderRadius: '290px'
    },
    textarea: {
        backgroundColor: '#3A405E'
    },

    div: {
        textAlign: 'center',
        backgroundColor: 'lightslategrey',
        // borderStyle: 'solid',
        width: 124,
        height: 104
    },
    iconVideUp:
    {
        fontSize: 50,
        textAlign: 'center',
    },
    hue_horizontal:
    {
        padding: '0px 2px',
        position: 'relative',
        height: '100%',
        border_radius: ' 2px',
        width: '60%'
    },
    iconVideUp1:
    {
        fontSize: 50,
        textAlign: 'center',
    },

    inputNumber:
    {
        width: '30px',
        display: 'inline_block',
        textAlign: 'left',
        font: 'Light 50px/50px Roboto',
        letterSpacing: '.1px',
        color: '#cfd1d9!important',
        textTransform: 'capitalize',
        backgroundColor: 'transparent',
        border: 0,
        outline: 0,
        borderBottom: '1px solid #75798e',
        opacity: 1,
    },
    inputNumberSlider:
    {
        width: '30px',
        display: 'inline_block',
        textAlign: 'center',
        font: 'Light 50px/50px Roboto',
        letterSpacing: '.1px',
        color: '#cfd1d9!important',
        textTransform: 'capitalize',
        backgroundColor: 'transparent',
        border: 0,
        outline: 0,
        borderBottom: '1px solid #75798e',
        opacity: 1,
        // '-webkit-appearance': 'none',
        // margin:0
    },
    row: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 200
    },
    row1: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 200
    },
    createNewPage: {
        paddingRight: '5%',
        paddingLeft: '5%',
        position: 'sticky',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    imageDetails: {
        color: '#b6b6c9',
        fontSize: '13px',
        paddingLeft: '10%',
        marginTop: '10px'
    },
    inputNumberSliderColor:
    {
        width: '60px',
        display: 'inline_block',
        textAlign: 'left',
        font: 'Light 50px/50px Roboto',
        letterSpacing: '.1px',
        color: '#cfd1d9!important',
        textTransform: 'capitalize',
        backgroundColor: 'transparent',
        border: 0,
        outline: 0,
        borderBottom: '1px solid #75798e',
        opacity: 1,
        marginLeft: '-1.5vw'
    },

});


// function CustomizedSwitches() {
//     const [state, setState] = React.useState({
//         checkedC: true,
//     });

//     const handleChange = (event) => {
//         setState({ ...state, [event.target.name]: event.target.checked });
//     };

//     return (
//         <>
//             <FormGroup>
//                 <Typography component="div">
//                     <Grid component="label" container alignItems="center" spacing={1}>
//                         <Grid item>
//                             <AntSwitch checked={state.checkedC} onChange={handleChange} name="checkedC" />
//                         </Grid>
//                     </Grid>
//                 </Typography>
//             </FormGroup>
//         </>
//     );
// }
class Image extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bgcolrPNG: '#fffff',
            // rivki 16.09.20
            checkedSwitch: false,
            IsCollapse: false

        }
    }
    handleChangeSwitch = () => {
        // this.props.quote.logoYOrN = !this.props.quote.logoYOrN
        ;
        this.props.changeImageYOrN()
    }
    handleChangeSwitchCN = () => {
        // this.props.quote.logoYOrN = !this.props.quote.logoYOrN
        ;
        this.props.changeLogoCNYOrN()
    }
    IsOpenCollapse = () => {
        this.setState({
            IsCollapse: !this.state.IsCollapse
        })
    }




    useStyle = makeStyles((theme) => ({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '25ch'
            },
        },
    }));
    changeImageRectanglesColor = (color) => {
        ;
        //   alert("jjjjj");
        this.props.changeImageRectanglesColor(color.hex)
    };
    handleChangeComplete = (color) => {
        this.setState({ bgcolrPNG: color.hex });
    };
    changeLogoselectRdiuseView = (e) => {
        ;
        this.props.changeLogoselectRdiuseView(e)
    }
    onChangeHandlerImage(event) {



        let reader = new FileReader();
        //        var url = URL.createObjectURL(event)

        reader.onloadend = () => {

            // this.props.dispatch(setDetailsImagewUrl(url))
            // this.props.dispatch(editImage(reader.result))
            this.props.changeImageImage(reader.result)
        }
        reader.readAsDataURL(event)

    }
    render() {
        const { classes } = this.props
        const defaultProps3 = {
            // width: 300,
            color: 'white'

        }




        return (
            <> <br /><br />
                <div className={classes.root}>
                    <div className={classes.createNewPage}>
                        <IconButton edge="end" color="#b6b6c9" aria-label="setting" >
                            {/* component={Link} to="/lastFiles" */}
                            <SettingsIcon style={{ color: '#b6b6c9', fontSize: 17 + "px" }} />
                        </IconButton>
                        <Typography variant="h6" style={{ flexGrow: 5, color: "white", textAlign: 'center', fontSize: 15 + "px" }}>
                            Create New Page
              </Typography>
                        <IconButton edge="start" color="#b6b6c9" aria-label="menu" onClick={this.changeColor}>
                            <InvertColorsIcon style={{ color: '#b6b6c9', fontSize: 17 + "px" }} />
                        </IconButton>
                    </div>




                    {this.state.IsCollapse ?
                        <div className={classes.row1}  >
                            <h3 edge="end" className={classes.imageDetails}>  Image Details   </h3>
                            <div edge="start" >
                                <label for="ColapseLogo">
                                    <KeyboardArrowUpIcon />
                                </label>
                                <input
                                    type={"button"}
                                    id="ColapseLogo"
                                    htmlFor="myInput"
                                    style={{ display: 'none' }}
                                    onClick={this.IsOpenCollapse}
                                />
                            </div>
                        </div>
                        :
                        <div className={classes.row} >
                            <h3 edge="end" className={classes.imageDetails}>  Image Details   </h3>
                            <div edge="start">
                                <label for="ColapseLogo">
                                    <KeyboardArrowDownIcon />
                                </label>
                                <input
                                    type={"button"}
                                    id="ColapseLogo"
                                    htmlFor="myInput"
                                    style={{ display: 'none' }}
                                    onClick={this.IsOpenCollapse}
                                />
                            </div>
                        </div>
                    }
                    <div hidden={this.state.IsCollapse} style={{ width: 95 + "%", marginRight: 3 + "%", marginLeft: 3 + "%" }}>
                        <Grid
                            container
                            direction="column"
                            justify="space-between"

                        >
                            <Box flexDirection="row"
                                display="flex"
                                justifyContent="space-between"
                            >
                                <Box
                                    width={'80%'}
                                >
                                    <FormLabel className={classes.textcontect}>Image</FormLabel>

                                </Box>
                                <Box justifyContent="flex-end">
                                    <AntSwitch checked={this.props.quote.imageYOrN} onClick={this.handleChangeSwitch} name="checkedSwitch" />
                                </Box>

                            </Box>
                            <Box
                                alignSelf="center">
                                <div className={classes.div} >
                                    {/* rivki */}


                                    <div class="image-upload">
                                        <label for="fileInput">
                                            <img className="logoC" alt="" src={this.props.quote.imageImage ? this.props.quote.imageImage : tempImage} />
                                        </label>
                                        <input
                                            type={"file"}
                                            id="fileInput"
                                            htmlFor="myInput"
                                            accept="image/*"
                                            style={{
                                                display: 'none',
                                                cursor: 'pointer',
                                                width: this.props.quote.logoWidth,
                                            }}
                                            onChange={(e) => this.onChangeHandlerImage(e.target.files[0])}
                                        />

                                    </div>
                                    <div id='lbError' class='warning'
                                        style={{
                                            position: 'relative',
                                            color: 'red',
                                            top: '-43px',
                                            right: '7x',
                                            left: '109px'
                                        }}
                                    >

                                    </div>
                                </div>

                            </Box>



                            <br></br>
                            <FormLabel className={classes.textcontect}>Rectangles Width</FormLabel>

                            <Box flexDirection="row"
                                display="flex"
                                justifyContent="space-between"
                            >

                                <Box
                                    width={'100%'}
                                    alignSelf="center"
                                >


                                    <Slider {...defaultProps3}
                                        defaultValue={this.props.quote.imageRectanglesWidth ? this.props.quote.imageRectanglesWidth : '11'}
                                        step={1}
                                        marks
                                        min={0}
                                        max={41.8}
                                        getAriaValueText={this.props.changeImageRectanglesWidth}
                                        valueLabelDisplay="auto"
                                        className={classes.MuiSlider_root}
                                    />

                                </Box>
                                <Box justifyContent="flex-end">
                                    <input
                                        textAlign="center"
                                        id="standard-number"
                                        type="number"
                                        disabled="disabled"
                                        value={this.props.quote.imageRectanglesWidth}
                                        onChange={(e) => this.props.changeImageRectanglesWidth(e.target.value)}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        className={classes.inputNumberSlider}
                                    />

                                </Box>

                            </Box>


                            <FormLabel className={classes.textcontect}>Rectangles Height</FormLabel>

                            <Box flexDirection="row"
                                display="flex"
                                justifyContent="space-between"
                            >

                                <Box
                                    width={'100%'}
                                    alignSelf="center"
                                >


                                    <Slider {...defaultProps3}
                                        defaultValue={this.props.quote.imageRectanglesHeight ? this.props.quote.imageRectanglesHeight : '58'}
                                        step={1}
                                        marks
                                        min={0}
                                        max={105}
                                        getAriaValueText={this.props.changeImageRectanglesHeight}
                                        valueLabelDisplay="auto"
                                        className={classes.MuiSlider_root}
                                    />

                                </Box>
                                <Box justifyContent="flex-end">
                                    <input
                                        textAlign="center"
                                        id="standard-number"
                                        type="number"
                                        disabled="disabled"
                                        value={this.props.quote.imageRectanglesHeight}
                                        onChange={(e) => this.props.changeImageRectanglesHeigth(e.target.value)}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        className={classes.inputNumberSlider}
                                    />
                                </Box>
                            </Box>




                            <FormLabel className={classes.textcontect}>Border Radius Image</FormLabel>
                            <br></br>
                            <Box flexDirection="row"
                                display="flex"
                                justifyContent="space-between"
                            >

                                <Box
                                    width={'100%'}
                                    alignSelf="center"
                                >


                                    <Slider
                                        defaultValue={this.props.quote.imageBorderRadiusRectangles}
                                        step={1}
                                        marks
                                        min={0}
                                        max={50}
                                        getAriaValueText={this.props.changeImageBorderRadiusRectangles}
                                        valueLabelDisplay="auto"
                                        className={classes.MuiSlider_root}
                                    />
                                </Box>
                                <Box justifyContent="flex-end">
                                    <input
                                        textAlign="center"
                                        id="standard-number"
                                        type="number"
                                        disabled="disabled"
                                        //   value={this.props.quote.logoHeight}
                                        Value={this.props.quote.imageBorderRadiusRectangles}
                                        onChange={(e) => this.props.changeImageBorderRadiusRectangles(e.target.value)}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        className={classes.inputNumberSlider}
                                    />
                                </Box>
                            </Box>



                            <br></br>
                            <FormLabel className={classes.textcontect}>rectangles color</FormLabel>

                            <Box flexDirection="row"
                                display="flex"
                                justifyContent="space-between"
                            >

                                <Box
                                    width={'200%'}
                                    alignSelf="center"
                                >
                                    <HuePicker
                                        color={this.props.quote.imageRectanglesColor ? this.props.quote.imageRectanglesColor : "#0AB0FE"}
                                        onChangeComplete={this.changeImageRectanglesColor}
                                        width={180}
                                        height={6}
                                    />


                                </Box>
                                <Box justifyContent="">
                                    <input
                                        textAlign="left"
                                        id="standard-number"
                                        type="number"
                                        placeholder={this.props.quote.imageRectanglesColor ? this.props.quote.imageRectanglesColor : "#0AB0FE"}
                                        value={this.props.quote.imageRectanglesColor}
                                        defaultValue={this.props.quote.imageRectanglesColor}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        className={classes.inputNumberSliderColor}
                                    />
                                </Box>
                            </Box>




                        </Grid>
                    </div>


                </div></>


        )
    }


}
const mapStateToProps = (state) => {
    return {
        contactDetails: state.contactDetails.contactDetails,
        quote: state.quote.quote,
    };
}

const mapDispatchToProps = (dispatch) => ({
    changeImageImage: (image) => dispatch(actions.setImageImage(image)),
    changeImageRectanglesColor: (image) => dispatch(actions.setImageRectanglesColor(image)),
    changeImageRectanglesWidth: (image) => dispatch(actions.setImageRectanglesWidth(image)),
    changeImageRectanglesHeight: (image) => dispatch(actions.setImageRectanglesHeight(image)),
    changeImageBorderRadiusRectangles: (image) => dispatch(actions.setImageBorderRadiusRectangles(image)),
    changeImageYOrN: (e) => dispatch(actions.setImageYOrN(e)),
})


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(Image));
