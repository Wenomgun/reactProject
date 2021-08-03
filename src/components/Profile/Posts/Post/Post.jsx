import classes from './Post.module.css'

const Post = ({data}) =>{
    return (
       <div className={classes.post}>
          <div className={classes.userInfo}>
              <div>
                  <img src={data.photoUser}/>
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