import a from './MyPost.module.css';
import Post from './Post/Post';



const MyPost = (props) => {

let PostElemts = props.PostDate.map(el => <Post message={el.messges} like={el.like} age={el.age} />)
  
  return (
    <div className={a.Block}>
      <h3>My post</h3>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>knopka</button>
      </div>
      <div className={a.messages}>
        {PostElemts}
      </div>
    </div>
  )
}

export default MyPost;