

import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import style from './ShowTeam.css';

const ShowTeam = (props) => {
    const { strTeam, strSport,idTeam} = props.team || {};

    return (
        <div className="col-md-3 m-4">
            <div className="teamCard text-center">
                <h2>Team Name: {strTeam}</h2>
                <p> Sports Name: {strSport}</p>
                    <Button as={Link} to={`/team/${idTeam}`} variant="warning">Expore</Button>
            </div>
        </div>
    );
};

export default ShowTeam;

