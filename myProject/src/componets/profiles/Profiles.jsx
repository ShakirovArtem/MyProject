import a from './Profiles.module.css';
import MyPost from './MyPost/MyPost'; 
import ProfileInfo from './profiieInfo/ProfileInfo';


const Profiles = (props) => {
    return(
      <div>
        <ProfileInfo />
        <MyPost PostDate = {props.state.PostDate}/>
    </div>
    )
}

export default Profiles;