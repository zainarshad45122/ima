import React, { useHistory } from 'react';
import './login.scss';

/* COMPONENTS */
import Logo from '../../assets/kzvb-logo.png'
import { withRouter } from 'react-router-dom';

const Login = ({history}) => {
    return (
        <main className="login">
            <div className="container">
                <div className="row">
                    <img src={Logo} alt="KZVB" className="login__logo" />
                </div>
                <div className="login__form form">
                    <form action="#">
                        <div className="row">
                            <div className="col-1-of-2">
                                <input type="email" id="input-email" name="input-email" placeholder="E-Mail" />
                                <label htmlFor="input-email">Email</label>
                            </div>
                            <div className="col-1-of-2 mt--ns">
                                <input type="password" id="input-password" name="input-password" placeholder="Passwort" />
                                <label htmlFor="input-password">Passwort</label>
                            </div>
                        </div>
                        <div className="row mt--ns">
                            <a href="" id="input-login" className="btn" onClick={() => history.push('/dashboard')} style={{ marginRight: '.5rem' }}><i className="fas fa-sign-in-alt">&nbsp;&nbsp;</i>Login</a>
                            <a href="" id="input-register" className="btn"><i className="fas fa-user">&nbsp;&nbsp;</i>Registrieren</a>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default withRouter(Login);