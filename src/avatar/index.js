import styles from './styles.module.css';

const Avatar = (props) => {
    return (
        <header className={styles.header}>
            <img src={props.imageUrl} className={styles.avatar}/>
            <strong>{props.userName}</strong>
        </header>    );
}

export default Avatar;