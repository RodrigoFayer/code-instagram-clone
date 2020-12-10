import styles from './styles.module.css';


function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
            <a
                href="https://appmasters.io/"
                target="_blank"
                rel="noreferrer"
            >
                App Masters
            </a>
            <a
                href="https://codejr.com.br/"
                target="_blank"
                rel="noreferrer"
            >
                Code Júnior
            </a>
            <a
                href="https://github.com/RodrigoFayer/code-instagram-clone"
                target="_blank"
                rel="noreferrer"
            >
                Rodrigo Fayer
            </a>

            </div>
        </footer>
    );
}

export default Footer;
