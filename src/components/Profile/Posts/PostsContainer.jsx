import React from 'react';
import {connect} from "react-redux";
import Posts from "./Posts";
import {addPostActionCreator} from "../../../Redux/Post-reducer";

const mapStateToProps = (state) => {
    return {
        postsData: state.postsData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPost) => {
            dispatch(addPostActionCreator(newPost));
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;