import Post from "./Post/Post";
import React from 'react';
import {addPostActionCreator} from "../../../Redux/Post-reducer";



const Posts = (props) =>{
    let postArea = React.createRef();

    let _addPost = (e) => {
        let newPost = {
                fio: 'Makar Makarov',
                post: postArea.current.value,
                date: new Date(),
                likes: 0,
                userId: 0,
                photoUser: 'https://image.freepik.com/free-vector/mans-head-avatar-vector_83738-354.jpg'
            };

        props.addPost(newPost)
        postArea.current.value = '';
    }

    return (
       <div>
           <div>
               <div>
                   <textarea ref={postArea}/>
               </div>
               <div>
                   <button onClick={_addPost}>+ Добавить</button>
               </div>
           </div>
           {props.postData.map((item, i) =>
               <Post key={i} data={item}></Post>
           )}
       </div>
    );
}

export default Posts;