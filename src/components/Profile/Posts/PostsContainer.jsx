import React from 'react';
import {connect} from "react-redux";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {addPostActionCreator} from "../../../Redux/Post-reducer";

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <div>
                    <Field name={'postText'} component={'textarea'} placeholder={'Введите текст'}/>
                </div>
                <div>
                    <button>+ Добавить</button>
                </div>
            </div>
        </form>
    )
}

const PostReduxForm = reduxForm({
    form: 'postForm'
})(PostForm);

class Posts extends React.Component {
    submit = (formData) => {
        let newPost = {
            fio: 'Makar Makarov',
            post: formData.postText,
            date: new Date(),
            likes: 0,
            userId: 0,
            photoUser: 'https://image.freepik.com/free-vector/mans-head-avatar-vector_83738-354.jpg'
        };

        this.props.addPost(newPost)
    }

    render() {
        return (
            <div>
                <PostReduxForm onSubmit={this.submit}></PostReduxForm>
                {this.props.postData.map((item, i) =>
                    <Post key={i} data={item}></Post>
                )}
            </div>
        );
    }
}

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