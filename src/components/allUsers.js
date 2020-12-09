import {Switch,Link,Route } from 'react-router-dom';
import React,{Component} from 'react';
import CreateStore from './createStore';
import axios from 'axios'

class AllUsers extends Component {

    constructor(props){
        super(props);
        this.state={
            users:[]
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/persons/')
        .then(res => {console.log(res.data); this.setState({users:res.data})});
    }

    render(){
        return(
            <div>   
                <ul>
                    {this.state.users.map(item => {
                        return (
                            <li className="float-left m-3" key={item._id}>
                                <div class="card" style={{width: 18+"rem"}}>
                                    <img src="../assets/logo.png" class="card-img-top" alt="Person"/>
                                        <div class="card-body">
                                            <h5 class="card-title">{item.firstName}</h5>
                                            {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                        </div>
                                    </div>
                                {/* <Link to={`/forumlist/${item}`}>
                                    <button className="btn btn-success">הכנס לפורום</button>
                                </Link> */}
                                {/* <a href="/forum">  join us!</a> */}
                            </li>
                        )
                    })}
                </ul>

                {/* <img className="rounded"/>
                  <span>{this.props.fullName}</span> */}
                {/* <Switch>
                    <Route exact path="/user" component={CreateUser}></Route>
                </Switch> */}
            </div>
        )
    }
}

export default AllUsers;
