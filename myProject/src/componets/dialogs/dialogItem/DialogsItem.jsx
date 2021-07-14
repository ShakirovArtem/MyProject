import d from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {
    return (
        <div className={d.item}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>

    )
}



export default DialogItem;