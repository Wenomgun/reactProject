import classes from './Post.module.css'
import {FC} from "react";

type PostPropsType = {
    data: any;
}

const Post: FC<PostPropsType> = ({data}) =>{
    return (
       <div className={classes.post}>
          <div className={classes.userInfo}>
              <div>
                  <img src={data.photoUser} alt={'Фото'}/>
              </div>
              <div>
                  <div>{data.fio}</div>
                  <div>{data.date + ''}</div>
              </div>
          </div>
          <div>
              {data.post}
          </div>
       </div>
    );
}

export default Post;