import classes from './Posts.module.css'
import Message from "../../Dialogs/Messages/Message/Message";
import Post from "./Post/Post";

const Posts = (props) =>{
    const data = props.data;
    return (
       <div>
           {data.map((item, i) =>
               <Post key={i} data={item}></Post>
           )}
       </div>
    );
}

export default Posts;