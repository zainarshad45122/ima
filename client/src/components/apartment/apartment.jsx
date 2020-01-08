import React from 'react';
import './apartment.scss';

const Apartment = props => {
    const background = {
        backgroundImage: `url(${props.cover})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
    return (
        <div className="card">
            <div className="card__header">
                <div className="card__header--content" style={background}></div>
            </div>
            <div className="card__body">
                <div className="row">
                    <div className="twelve columns card__body--title">
                        <span>{props.title}</span>
                    </div>
                </div>
                <div className="row">
                    <div className="six columns card__body--left">
                        <span><i className="fas fa-home">&nbsp;</i>Gebäude:</span>
                    </div>
                    <div className="six columns card__body--right">
                        <span>{props.building}, {props.address}</span>
                    </div>
                </div>
                <div className="row">
                    <div className="six columns card__body--left">
                        <span><i className="fas fa-pencil-ruler">&nbsp;</i>Typ:</span>
                    </div>
                    <div className="six columns card__body--right">
                        <span>{props.type}</span>
                    </div>
                </div>
                <div className="row">
                    <div className="six columns card__body--left">
                        <span><i className="fas fa-globe">&nbsp;</i>Barrierefrei:</span>
                    </div>
                    <div className="six columns card__body--right">
                        <span>{props.handycap ? 'Ja' : 'Nein'}</span>
                    </div>
                </div>
                <div className="row">
                    <div className="six columns card__body--left">
                        <span><i className="fas fa-check">&nbsp;</i>Status:</span>
                    </div>
                    <div className="six columns card__body--right">
                        {props.available ? <span style={{color:'#2ECC71'}}>Verfügbar</span> : <span style={{color:'#E74C3C'}}>Vergeben</span>}
                    </div>
                </div>
            </div>
            <div className="card__footer">
                <div className="row">
                    <div className="six columns card__footer-left">
                        <span>{props.rooms} Zimmer | {props.size}m²</span>
                    </div>
                    <div className="six columns card__footer--right">
                        <span>{props.coldRent}€</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Apartment;