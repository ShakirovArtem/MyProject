import a from './Post.module.css';



const Post = (props) => {
  return (
    <div className={a.item}>
      <img src='https://yt3.ggpht.com/a/AATXAJwcDVCarpuPlg1pd4L3zGLP9jmVysvosSQJeYY=s900-c-k-c0xffffffff-no-rj-mo'></img>
      <div>
       Сообщение: {props.message}
      </div>
      <div>
        like: {props.like}
      </div>
      <div>
        Возраст:{props.age}
      </div>

    </div>
  )
}

export default Post;