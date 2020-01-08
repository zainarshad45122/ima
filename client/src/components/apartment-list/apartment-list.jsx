import React, { useState, useEffect } from 'react';
import './apartment-list.scss';

/* COMPONENTS */
import axios from 'axios';
import Apartment from '../apartment/apartment';

const ApartmentList = () => {

    const [apartments, setApartments] = useState([]);
    const [filter, setFilter] = useState('');

    // COMPONENT DID MOUNT (AWAKE)
    useEffect(() => {
        axios.get(`http://localhost:5000/api/v1/apartments/`)
            .then(apartments => setApartments(apartments.data))
            .catch(err => console.warn(err))
    }, [])

    useEffect(() => {
        axios.get(`http://localhost:5000/api/v1/apartments/${filter}`)
            .then(apartments => setApartments(apartments.data))
            .catch(err => console.warn(err))
    }, [filter])

    return (
        <section className="apartments">
            <div className="apartments__filter">
                <div className="container form">
                    <div className="row">
                        <div className="three columns">
                            <input type="number" id="input-email" name="input-email" placeholder="Zimmer (ab)" />
                        </div>
                        <div className="three columns">
                            <input type="number" id="input-email" name="input-email" placeholder="Zimmer (bis)" />
                        </div>
                        <div className="three columns">
                            <input type="number" id="input-email" name="input-email" placeholder="Kaltmiete (max)" />
                        </div>
                        <div className="three columns">
                            <input type="number" id="input-email" name="input-email" placeholder="Größe m² (max)" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="six columns">
                            <input type="number" id="input-email" name="input-email" placeholder="Barrierefrei" />
                        </div>
                        <div className="six columns">
                            <select id="input-filter" name="input-filter" onChange={(e) => setFilter(e.target.value)}>
                                <option>Standartsortierung</option>
                                <option value="rent-highest">Mietpreis (höchste Zuerst)</option>
                                <option value="rent-lowest">Mietpreis (niedrigste Zuerst)</option>
                                <option value="rooms-highest">Zimmer (höchste Zuerst)</option>
                                <option value="rooms-lowest">Zimmer (niedrigste Zuerst)</option>
                                <option value="size-highest">Wohnfläche (höchste Zuerst)</option>
                                <option value="size-lowest">Wohnfläche (niedrigste Zuerst)</option>
                                <option value="handycap">Barrierefrei</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="apartments__result">
                <div className="row">
                    {apartments ? apartments.map(({ _id, ...props }) => (
                        <div className="three columns">
                            <Apartment key={_id} {...props} />
                        </div>
                    )) : ''}
                </div>
            </div>
        </section>
    )
}

export default ApartmentList;