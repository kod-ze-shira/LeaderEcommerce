// import React from 'react'
// import "../Components/style.css";
// import proposal from './assets/file-contract-solid.svg'
// import mail from './assets/paper-plane-solid.svg'
// import appointment from './assets/calendar-alt-solid.svg'
// import sms from './assets/conversation-speech-bubbles-.png';
// import Button from '@material-ui/core/Button';
// var { Hue } = require('react-color/lib/components/common');

// class Logo extends React.Component {
//     render() {
//         return (
//         <>
//         <br></br>
//         <br/>
//         <br/>
//             <b>logo Details</b>
//             <b>logo</b>
// {/* 
// <Hue
// //   {...this.props}
// //   pointer={ CustomPointer }
// //   onChange={ this.handleChange }
// //   direction={ 'horizontal' || 'vertical' }
//  /> */}

//         </>
//         )
//     }
// }


// 'use strict'

// import React from 'react'
// import { ChromePicker } from 'react-color'
// import { HuePicker, SketchPicker } from 'react-color';
// import logoC from './assets/logoToTemplate2.PNG';
// import { connect } from 'react-redux';
// import { actions } from '../Redux/Actions/ContactAction';
// import editImage from '../Redux/reducers/logo';
// import { withStyles } from '@material-ui/core/styles';
// import { purple } from '@material-ui/core/colors';
// import FormGroup from '@material-ui/core/FormGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Switch from '@material-ui/core/Switch';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
// import TreeView from '@material-ui/lab/TreeView';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import TreeItem from '@material-ui/lab/TreeItem';
// import { makeStyles } from '@material-ui/core/styles';
// import IconButton from '@material-ui/core/IconButton';
// import SettingsIcon from '@material-ui/icons/Settings';
// import InvertColorsIcon from '@material-ui/icons/InvertColors';
// import AppBarSide from './ourProduct'
// const CssTextField = withStyles({
//     root: {
//         '& label.Mui-focused': {
//             // color: 'hotpink',
//             // borderBottomRightColor: 'hotpink',
//             borderWidth: 0,
//             color: 'pink'
//         },
//         '& .MuiInput-underline:after': {
//             // borderBottomColor: 'hotpink', 
//             // borderBottomRightColor: 'hotpink',
//             borderWidth: 0,
//             color: 'pink'

//         },
//         '& .MuistandardInput-root': {
//             '& fieldset': {
//                 // borderColor: 'hotpink',
//                 // borderBottomRightColor: 'hotpink',
//                 borderWidth: 0,
//                 color: 'red',
//                 fontColor: 'red',

//             },
//             '&:hover fieldset': {
//                 // borderColor: 'hotpink',
//                 // borderBottomRightColor: 'hotpink',
//                 borderWidth: 0,
//                 color: 'red'

//             },
//             '&.Mui-focused fieldset': {
//                 // borderColor: 'hotpink',
//                 // borderBottomRightColor: 'hotpink',
//                 borderWidth: 0,
//                 color: 'pink'

//             },
//         },
//     },
// })(TextField);
// const useStyles = makeStyles({
//     root: {
//         height: 216,
//         flexGrow: 1,
//         maxWidth: 400,
//         // float:'left',
//     },
// });
// function MultiSelectTreeView() {
//     const classes = useStyles();

//     return (
//         <>
//             <br /><br /><br />
//             <TreeView
//                 className={classes.root}
//                 defaultCollapseIcon={<ExpandMoreIcon />}
//                 defaultExpandIcon={<ChevronRightIcon />}
//                 multiSelect
//             >
//                 <TreeItem id="openOrClose" nodeId="1" label="">
//                 </TreeItem>
//             </TreeView>
//             <Logo />

//         </>
//     );
// }


// const AntSwitch = withStyles((theme) => ({
//     root: {
//         width: 28,
//         height: 16,
//         padding: 0,
//         display: 'flex',
//     },
//     switchBase: {
//         padding: 2,
//         color: theme.palette.grey[500],
//         '&$checked': {
//             transform: 'translateX(12px)',
//             color: theme.palette.common.white,
//             '& + $track': {
//                 opacity: 1,
//                 backgroundColor: theme.palette.primary.main,
//                 borderColor: theme.palette.primary.main,
//             },
//         },
//     },
//     thumb: {
//         width: 12,
//         height: 12,
//         boxShadow: 'none',
//     },
//     track: {
//         border: `1px solid ${theme.palette.grey[500]}`,
//         borderRadius: 16 / 2,
//         opacity: 1,
//         backgroundColor: theme.palette.common.white,
//     },
//     checked: {},
// }))(Switch);

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
// class Logo extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             displayColorPicker: false,
//             color: "",
//         };
//     }


//     handleClick = (color) => {
//         ;
//         this.setState({ displayColorPicker: !this.state.displayColorPicker })
//         // this.setState({ color: color.hex })
//         this.props.changeColor(color.hex)
//     };

//     handleClose = () => {
//         this.setState({ displayColorPicker: false })
//     };
//     onChangeHandlerImage(event) {



//         let reader = new FileReader();
//         var url = URL.createObjectURL(event)

//         reader.onloadend = () => {

//             // this.props.dispatch(setDetailsImagewUrl(url))
//             // this.props.dispatch(editImage(reader.result))
//             this.props.changeImage(reader.result)
//         }
//         reader.readAsDataURL(event)

//     }
//     render() {
//         const currentUrl = this.onChangeHandlerImage
//         const popover = {
//             position: 'absolute',
//             zIndex: '2',
//         }
//         const cover = {
//             position: 'fixed',
//             top: '0px',
//             right: '0px',
//             bottom: '0px',
//             left: '0px',
//         }
//         return (
//             <>
//                 <div className="topCon">
//                     <div style={{ position: 'sticky', marginTop: '50px', marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', }}>
//                         <IconButton className="ml-15" edge="end" color="inherit" aria-label="setting" >
//                             {/* component={Link} to="/lastFiles" */}
//                             <SettingsIcon style={{ color: this.state.color }} />
//                         </IconButton>
//                         <Typography variant="h6" style={{ flexGrow: 5, color: this.state.fontColor, textAlign: 'center' }}>
//                             Personal details
//               </Typography>
//                         <IconButton edge="start" color="inherit" aria-label="menu" onClick={this.changeColor}>
//                             <InvertColorsIcon style={{ color: this.state.color }} />
//                         </IconButton>
//                     </div></div>
//                 <div className="row divInC">
//                     <div className="col-md-9">
//                         <b className="minTitltC">Logo</b>
//                     </div>
//                     <div className="col-md-3">
//                         <CustomizedSwitches />
//                     </div>
//                 </div>
//                 <div className="row divInC">
//                     <div className="col-md-12 ml-15">
//                         <label for="fileInput">
//                             <img className="logoC" alt="" src={this.props.urlImage ? this.props.urlImage.image : logoC} />
//                         </label>
//                         <input
//                             type={"file"}
//                             id="fileInput"
//                             htmlFor="myInput"
//                             accept="image/*"
//                             style={{
//                                 display: 'none',
//                                 cursor: 'pointer'
//                             }}
//                             onChange={(e) => this.onChangeHandlerImage(e.target.files[0])}
//                         />
//                     </div>

//                 </div>
//                 <br />
//                 <div className="row divInC">
//                     <div className="col-md-9">
//                         <b className="minTitltC">Company Name</b>
//                     </div>
//                     <div className="col-md-3">
//                         <CustomizedSwitches/>
//                     </div>
//                 </div>
//                 <div className="row divInC">
//                     <div className="col-md-12 ml-15">
//                         <CssTextField
//                             placeholder={this.props.urlImage ? this.props.urlImage.companyName : "add company name"}
//                             value={this.props.urlImage ? this.props.urlImage.companyName : null}
//                             onChange={(e) => this.props.changeCompanyName(e.target.value)}
//                             className="col-md-12 inpTxt2Con"
//                             variant="standard"
//                             id="custom-css-standard-input"
//                         />
//                     </div>
//                 </div>
//                 <br></br>
//                 <div className="row divInC">
//                     <div className="col-md-12">
//                         <b className="minTitltC">background only png</b>
//                     </div>
//                 </div>
//                 <div className="row divInC">
//                     {/* <h1 style={{ color: this.state.color }}>na,bv vmcg?</h1> */}
//                     <div className="col-md-12 ml-15">
//                         <HuePicker
//                             color={this.props.urlImage.color}
//                             onChangeComplete={this.handleClick}
//                             width={200}
//                             height={6}
//                         />
//                     </div>

//                 </div>

//                 <br></br>
//                 <br />
//                 <br />

//                 <br />
//                 <br />
//                 <AppBarSide />



//             </>
//         )
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         urlImage: state.urlImage.urlImage,
//         contactDetails: state.contactDetails.contactDetails,
//         quote: state.quote.quote,
//     };
// }

// const mapDispatchToProps = (dispatch) => ({
//     // delInDimus:(a)=> dispatch({ type: 'DEL_DIMUS' }),
//     // deleteContact:(a)=>((a)=> dispatch({ type: 'DELETE_CONTACT' }),dispatch(actions.setActive(a))),
//     // editContact:(a)=> dispatch({ type: 'EDIT_CONTACT' }),
//     // editstepper:()=> dispatch(actions.setStepper()),
//     // deleteContact:(a)=> dispatch({ type: 'DELETE_CONTACT' }),
//     changeImage: (image) => dispatch(actions.editImage(image)),
//     changeCompanyName: (image) => dispatch(actions.editCompanyName(image)),
//     changeColor: (image) => dispatch(actions.editcolor(image)),


// })

// export default connect(mapStateToProps, mapDispatchToProps)(Logo);
// //  Logo