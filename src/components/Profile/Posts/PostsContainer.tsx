import React, {FC} from 'react';
import {connect} from "react-redux";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {addPostActionCreator} from "../../../Redux/Post-reducer";
import {maxLengthValue, requiredField} from "../../../utils/validators/validators";
import {TextField} from "../../Common/TextField";

const validLength = maxLengthValue(100);

type PostFormPropsType = {
    handleSubmit: Function;
}

const PostForm: FC<PostFormPropsType> = React.memo(({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit as any}>
            <div>
                <div>
                    <Field name={'postText'}
                           component={TextField}
                           placeholder={'Введите текст'}
                           validate={[requiredField, validLength]}
                    />
                </div>
                <div>
                    <button>+ Добавить</button>
                </div>
            </div>
        </form>
    )
})

const PostReduxForm = reduxForm({
    form: 'postForm'
})(PostForm as any);

class Posts extends React.Component<any, any> {
    submit = (formData: { postText: any; }) => {
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
                <PostReduxForm onSubmit={this.submit as any}/>
                {this.props.postsData.map((item: any, i: number) =>
                    <Post key={i} data={item}/>
                )}
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        postsData: state.postData
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: (newPost: any) => {
            dispatch(addPostActionCreator(newPost));
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;