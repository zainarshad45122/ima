import React from 'react';
import Logo from '../../assets/kzvb-logo.png'
import { withRouter } from 'react-router-dom';



const Nav = ({history}) => (
    <nav className="row">
    <div className="nav">
        <div className="four columns nav--left">
            Angemeldet als: GAST
    </div>
        <div className="four columns nav--center">
            <img className="nav--center--image" src={Logo} width="50rem" alt="LOGO"/>&nbsp;<span>Kassenzahnärztliche Vereinigung Bayerns</span>
    </div>
        <div className="four columns nav--right">
            <span>📦&nbsp;</span><a href="" onClick={() => history.push('/')}>LOGOUT</a>
    </div>
    </div>
</nav>
);

export default withRouter(Nav);