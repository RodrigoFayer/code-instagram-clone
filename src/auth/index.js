import React from 'react';
import styles from './styles.module.css';
import instagram from "../instagram.png";



class AuthView extends React.Component{
    constructor(){
        super();
        this.state = {
            name: 'Senhor',
            email: '',
            password: ''
        }
    }

    handleChange (key,event) {
        const newState = {};
        newState[key] = event.target.value;
        this.setState(newState);
    }

    render () {
        return(
            <div className={styles.login}>
                <img src={instagram} />
                <p>Bem Vindo, {this.state.name}</p>
                <input 
                    placeholder="Nome"
                    disabled={this.props.loading}
                    className={styles.input}
                    onChange={(event) => this.handleChange('name',event)}
                    value={this.state.name}
                />
                <input
                    placeholder="E-mail"
                    disabled={this.props.loading}
                    className={styles.input}
                    onChange={(event) => this.handleChange('email',event)}
                    value={this.state.email}
                />
                <input
                    placeholder="Senha"
                    type="password"
                    disabled={this.props.loading}
                    className={styles.input}
                    onChange={(event) => this.handleChange('password',event)}
                    value={this.state.password}
                />
                <button className={styles.button} disabled={this.props.loading} onClick={() => this.props.handleLogin(this.state)}>Entrar</button>
                {this.props.error && <p>{this.props.error}</p>}
            </div>
        )
    }
}

export default AuthView;