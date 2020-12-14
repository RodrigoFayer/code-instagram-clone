import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { API } from "../../api";

import styles from './styles.module.css';
import userImage from "../../avatar.png";
import Avatar from '../avatar';



const PostForm = () => {
    const history = useHistory();

    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [imageUrl,setImageUrl] = useState('');

    const [error,setError] = useState();
    const [loading,setLoading] = useState(false);
    
    const handlePost = async () => {
        const body = {
            title,
            description,
            imageUrl
        }
        try{
            setLoading(true);
            const response = await API.post('/posts',body);
            if(response.data){
                history.push('/');
            }
        }catch(error){
            console.error(error);
            setError(error);
            setLoading(false);
        }
    };

    return (
        <div>
            <div
                className={styles.container}
            >
                <h1 className={styles.title}>Novo Post :</h1>
                <input
                    placeholder="Título"
                    value={title}
                    disabled={loading}
                    onChange={(event) => setTitle(event.target.value)}
                    className={styles.input}
                />
                <input
                    placeholder="Mensagem"
                    value={description}
                    disabled={loading}
                    onChange={(event) => setDescription(event.target.value)}
                    className={styles.input}
                />
                <input
                    placeholder="Url da Imagem"
                    value={imageUrl}
                    disabled={loading}
                    onChange={(event) => setImageUrl(event.target.value)}
                    className={styles.input}
                />
            </div>
            <main className={styles.wrapper}>
                {imageUrl && imageUrl.length > 5 &&
                    <div className={styles.list}>
                        <h1>Preview:</h1>
                        <article className={styles.post}>
                            <Avatar 
                                userName={"Usuario"}
                                userImageUrl={userImage}
                            />
                            <img
                                src={imageUrl}
                                className={styles.image}
                                alt={"post-image-"+title}
                            />
                            <p>{title}</p>
                            <small>{description}</small>
                        </article>
                    </div>
                }
                {error && <p>{error}</p>}
                <div className={styles.sub}>
                    <button className={styles.button} onClick={handlePost} disabled={loading} >Postar</button>
                </div>
            </main>
        </div>
    );
}

export default PostForm;