import React from "react";

import {connect} from 'react-redux';

const EventsList = props => {

    return(
    <>
    
    <p className="genre">{props.events}</p>
    </>
)
}
const mapStateToProps = state => {
    return{
    events: state.events,
    isFetchingData: state.isFetchingData
}
}


export default connect(mapStateToProps, {})(EventsList);