import './App.css';
import Headersjsx from './componets/header/Header';
import NavBar from './componets/navbar/NavBar';
import Profiles from './componets/profiles/Profiles';
import Dialogs from './componets/dialogs/Dialogs';
import {BrowserRouter, Route} from "react-router-dom";


const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Headersjsx />
        <NavBar />
        <div className='app-wrapper-con'>
          <Route path = '/Dialogs' render={ () => <Dialogs state  = {props.appstate.messagesPage}/>}/>
          <Route path = '/Profile' render={ () => <Profiles state = {props.appstate.profilePage}/>} />
        </div>
      </div>
    </BrowserRouter>);
};


export default App;
