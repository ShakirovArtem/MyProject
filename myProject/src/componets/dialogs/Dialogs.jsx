import d from './Dialogs.module.css'
import DialogItem from './dialogItem/DialogsItem';
import Messages from './messageItem/MessagesItem';

const Dialogs = (props) => {

let DialogsElemets = props.state.DialogsDate.map(el => <DialogItem name={el.name} id={el.id} />)
let MessagesElemets = props.state.MesssgesDate.map(el => <Messages messages={el.messages} />)
    
    return (
        <div className={d.dialogs}>
            <div className={d.dialogItems}>
                {DialogsElemets}
            </div>
            <div className={d.messages}>
                {MessagesElemets}
            </div>
        </div>
    )
}

export default Dialogs;