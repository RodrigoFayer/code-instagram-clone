import instagram from "../instagram.png";
import styles from "./styles.module.css";
import { FaSearch } from "react-icons/fa";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.image}>
                <img src={instagram} />
            </div>
            <input placeholder={<FaSearch />,'Pesquisar'} className={styles.input}></input>
        </header>    
    );
}

export default Header;