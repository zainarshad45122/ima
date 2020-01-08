import React from 'react';
import './footer.scss';
import { withRouter } from 'react-router-dom';

const Footer = ({history}) => (
    <footer className="footer">
        <div className="row">
            <div className="six columns footer--left">
                <span>@2019 KZVB</span>
            </div>
            <div className="six columns footer--right">
                <span onClick={() => history.push('/imprint')}>Impressum</span>
                <span onClick={() => history.push('/dsgvo')}>Datenschutz</span>
            </div>
        </div>
    </footer>
)

export default withRouter(Footer);