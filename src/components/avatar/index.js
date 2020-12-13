import styles from './styles.module.css';
import avatar from "../../avatar.png";

const Avatar = (props) => {
    return (
        <header className={styles.header}>
            {props.userImageUrl ? <img src={props.userImageUrl} className={styles.avatar} alt={"avatar-"+props.userName}/> : <img src={avatar} className={styles.avatar} alt={"avatar-"+props.userName}/>}
            
            <strong>{props.userName}</strong>
        </header>    );
}

export default Avatar;