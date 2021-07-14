import React from 'react';
import a from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return(
    <div >
      <div>
        <img src='https://cdn.fishki.net/upload/post/201407/10/1284321/4e6e52d1ea2bd1156a08be7adfdd4542.jpg'></img>
      </div>
      <div className = {a.Block}>
        ava + decription
      </div>
    </div>
    )
}

export default ProfileInfo;