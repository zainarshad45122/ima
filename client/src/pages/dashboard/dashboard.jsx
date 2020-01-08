import React from 'react';
import './dashboard.scss';

/* COMPONENTS */
import ApartmentList from '../../components/apartment-list/apartment-list';
import Nav from '../../components/nav/nav';
import Footer from '../../components/footer/footer';

const Dashboard = () => {
    return (
        <main className="dashboard">
            <Nav />
            <ApartmentList />
            <Footer />
        </main>
    )
}

export default Dashboard;