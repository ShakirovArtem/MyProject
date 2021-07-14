import d from './../Dialogs.module.css'

const Messages = (props) => {
    return (
        <div className={d.message}>{props.messages}</div>
    )
}



export default Messages;