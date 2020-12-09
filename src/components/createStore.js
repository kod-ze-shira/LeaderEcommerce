import React,{Component} from 'react';
// import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';

class CreateStore extends Component {

    constructor(props){
        super(props);

        this.onChangeFirstName=this.onChangeFirstName.bind(this);
        this.onChangeLastName=this.onChangeLastName.bind(this);
        this.onChangeUsername=this.onChangeUsername.bind(this);
        this.onChangePassword=this.onChangePassword.bind(this);
        // this.onChangeProfilPicture=this.onChangeProfilPicture.bind(this);
        this.onChangeEmail=this.onChangeEmail.bind(this);

        // this.onChangeEmail=this.onChangeEmail.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

        this.state = {
            id:'',
            firstName:'',
            lastName:'',
            username:'',
            password:'',
            // email:'',
          //  profilePicture:'',//לשנות לתמונה
            email:'',
            users:[] 
        }
    }

    componentDidMount(){
        this.setState({
            users:['test user'],
            firstName:'testttt'
        })

        console.log(this.state.users)
    }

    onChangeFirstName(e){
        this.setState({
            firstName:e.target.value
        })
    }

    onChangeLastName(e){
        this.setState({
            lastName:e.target.value
        })
    }

    onChangeUsername(e){
        this.setState({
            username:e.target.value
        })
    }

    onChangePassword(e){
        this.setState({
            password:e.target.value
        })
    }

    // onChangeProfilPicture(e){
    //     this.setState({
    //         profilePicture:e.target.value
    //     })
    // }


    onChangeEmail(e){
        this.setState({
            email:e.target.value
        })
    }

    // onChangeHandlerLogo(e){

    // }
   

    async onSubmit(e){
        e.preventDefault();

        const user = {
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            username:this.state.username,
            password:this.state.password,
      //      profilePicture:this.state.profilePicture,
            email:this.state.email,
            // email:this.state.email
        }

        console.log("user " ,user);
 
        await axios.post('http://localhost:5000/persons/add',user)
            .then(res => {console.log("res.data ",res.data.user._id);this.setState({id:res.data.user._id}) ;});



        await axios.post('http://localhost:5000/persons/update/'+this.state.id,user)
            .then(res=>console.log(res.data));

        await axios.get('http://localhost:5000/persons/'+this.state.id)
            .then(res=>console.log("get ",res.data));

        const community={
            communityName:"The Community of "+user.firstName+" "+user.lastName,
            communityDescription:"The best community!!",
            communityManager:this.state.id,
            // communityMembers:[this.state.id]
        }

        await axios.post('http://localhost:5000/communities/add',community)
            .then(res=>console.log("res.data community ",res.data.community.communityName));

        this.setState({
            firstName:'',
            lastName:'',
            username:'',
            password:'',
    //        profilePicture:'',//לשנות לתמונה
            email:''
        })
    }
  
    render(){
        return(
            <div>
                <h3>Create New User Log</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>First Name: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.firstName}
                            onChange={this.onChangeFirstName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Name: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.lastName}
                            onChange={this.onChangeLastName}
                        />
                    </div>
                    <div className="form-group">
                        <label>username: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.password}
                            onChange={this.onChangePassword}
                        />
                    </div>

                    <div className="form-group">
                        <label>Email:</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                        />
                    </div>


                    {/* <div className="form-group">
                        <label>your picture:</label>
                        <label for="logouug" className="lbl_img">
                            <img className="img_logo" referrerPolicy="no-referrer" src={profilePicture}></img>
                        </label>
                        <input type={"file"}
                            id="logouug"
                            htmlFor="myInput"
                            accept="image/*"

                            style={{
                                display:"none",
                                cursor:"pointer"
                            }}

                            // onChange={(e)=>onChangeHandlerLogo(e.target.files[0])}
                        />
                    </div> */}

                    <div className="form-group">
                        <input type="submit"
                                value="OK" 
                                className="btn btn-primary"
                        />
                    </div>

                </form>
            </div>
        )
    }
}

export default CreateStore;
