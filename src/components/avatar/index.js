import styles from './styles.module.css';

const Avatar = (props) => {
    return (
        <header className={styles.header}>
            <img src={props.userImageUrl} className={styles.avatar} alt={"avatar-"+props.userName}/>
            <strong>{props.userName}</strong>
        </header>    );
}

export default Avatar;