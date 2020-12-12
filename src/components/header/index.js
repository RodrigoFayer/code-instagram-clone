import instagram from "../../instagram.png";
import styles from "./styles.module.css";
import { FaSearch,FaPowerOff } from "react-icons/fa";

const Header = (props) => {
    return (
        <header className={styles.header}>
            <div className={styles.image}>
                <img src={instagram} />
            </div>
            <div className={styles.search}>
                <FaSearch size="15" />
                <input className={styles.input} type={'text'} placeholder={"Pesquisar"} />
            </div>
            <div className={styles.logout}>
                <button onClick={() => {
                        localStorage.clear();
                        props.logout(false);
                    }}
                    className={styles.button}><FaPowerOff size="15"
                />
                </button>
            </div>
        </header>    
    );
}

export default Header;