import React from "react";
import {connect} from "react-redux";

import {getData} from "../actions/index";
import EventsList from "./EventsList";
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';

const EventForm = (props) => {

const handleGetData = e => {
    e.preventDefault();
    props.getData();
}

    return(
    <>
    {props.isFetchingData ? ( <> <Button variant="contained" color="primary" onClick={handleGetData}>Generate a New Genre</Button><LinearProgress className="progress" /> </>): ( <Button variant="contained" color="primary" onClick={handleGetData}>Generate a New Genre</Button>)}
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