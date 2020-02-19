import React from "react";

import {connect} from 'react-redux';

const EventsList = props => {

    return(
    <>
    <p>{props.events}</p>
    </>
)
}
const mapStateToProps = state => {
    return{
    events: state.events
}
}


export default connect(mapStateToProps, {})(EventsList);