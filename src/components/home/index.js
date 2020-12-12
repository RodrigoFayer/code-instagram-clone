import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import './home.css';
import Footer from "../footer";
import PostList from "../postlist";
import Header from "../header";

import { API} from '../../api';

function Home(props) {

    // Check if have posts now
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setLoading(true);
        API.get('/posts').then(response => {
            setPosts(response.data);
            setLoading(false);
        }).catch(apiError => {
            setLoading(false);
            setError(apiError.response.data.error);
        });    
    }, []);

    return (
        <div className="App">

            <Header logout={props.setIsLogged}/>

            <Link to="/criar">Criar Post</Link>

            {!loading ?
                <PostList posts={posts}/>
                :
                <p>Carregando...</p>
            }
            {error ? <p>{error}</p> : null}
            <Footer/>
        </div>
    );
}

export default Home;
