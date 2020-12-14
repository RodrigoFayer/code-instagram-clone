import  React from "react";
import { API } from "../../api";
import { FaRegHeart } from "react-icons/fa";
import styles from './styles.module.css';


class LikeButton extends React.Component {
    constructor(props){
        super();
        this.state = {
            likeCount: props.likeCount,
            loading: false,
            error: null
        };
    }
    async addLike(){
        const countNow = this.state.likeCount;
        try {
            this.setState({loading: true,likeCount: countNow+1});
            
            const result = await API.patch(`/posts/${this.props.postId}/like`);

            this.setState({loading:false});
        } catch (error) {
            this.setState({loading:false,error:error,likeCount: countNow});
        }
    }

    render() {
        return(
            <div className={styles.session}>
                <button className={styles.like} onClick={() => this.addLike()}> <FaRegHeart size="25"/></button>
                <p className={styles.likeCount}>{this.state.likeCount} Curtidas</p>
            </div>
        )
    }
}

export default LikeButton;