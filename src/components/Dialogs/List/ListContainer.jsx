import React from 'react';
import {connect} from "react-redux";
import List from "./List";

const mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);

export default ListContainer;