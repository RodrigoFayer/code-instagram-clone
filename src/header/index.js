import instagram from "../instagram.png";
import styles from "./styles.module.css";
import { FaSearch } from "react-icons/fa";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.image}>
                <img src={instagram} />
            </div>
            <div className={styles.search}>
                <FaSearch size="15" />
                <input className={styles.input} type={'text'} placeholder={"Pesquisar"} />
            </div>
        </header>    
    );
}

export default Header;