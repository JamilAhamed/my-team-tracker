import React, { useEffect, useState } from 'react';
import ShowTeam from '../ShowTeam';
import './Displayteam.css'


const DisplayTeam = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`)
            .then(res => res.json())
            .then(data => setTeams(data.teams))
    }, [])

    return (
        <div>
            <h1>Teams: {teams.length}</h1>
           <div className="row">
           {
                teams && teams.map(team => <ShowTeam team={team}></ShowTeam>)
            }
           </div>
        </div>
    );
};

export default DisplayTeam;