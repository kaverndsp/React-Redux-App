import React from "react";
import {connect} from "react-redux";

import {getData} from "../actions/index";
import EventsList from "./EventsList";

const EventForm = (props) => {

const handleGetData = e => {
    e.preventDefault();
    props.getData();
}

    return(
    <>
    {props.isFetchingData ? (<div><b>***We are currently grabbing the data***</b></div>): (<button onClick={handleGetData}>Generate a New Genre</button>)}
    <EventsList/>
    </>
)

}

const mapStateToProps = state => {
    return{
        isFetchingData: state.isFetchingData
    };
}


export default connect(mapStateToProps, {getData})(EventForm);