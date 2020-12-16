import { render } from '@testing-library/react';
import React,{useEffect,useState} from 'react';
import Link from 'react-router-dom'
import axios from 'axios';
import { connect } from 'react-redux';
import { actions } from '../redux/action'
import communityReducer from '../redux/reducers/communityReducer'

function CommunityHome(props) {

    const x=props;

    

    const [community, setCommunity] = useState({community:{}});

    // useEffect(() => {
    //     console.log(x.match.params.id);
    //     props.getCommunityById(x.match.params.id)
    //     console.log("comHome...", props.community)
    //     // axios.get('http://localhost:3000/communities/'+props.match.params.id)
    //     // .then(res=>{console.log("get ",res.data);setCommunity({community:res.data})});
    //   });

    return (
        <div>
            <h1>Wellcome to our community!!!!</h1>
            <h2>{props.community.communityName}</h2>
            {console.log("lllll",props.community.communityName)}
            <button className="btn btn-primary">אשר תנאי הצטרפות</button>

        </div>
    )
}
export default connect(
    (state)=>{
        return {
            community:state.communityReducer.community
        }
    },
    (dispatch)=>{
        return {
            getCommunityById:(communityId)=>dispatch(actions.getCommunityById(communityId)) 
        }
    }

)(CommunityHome);

