import male from "../../team-tracker/Photo/male.png"
import female from "../../team-tracker/Photo/female.png"
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ShowTeam from '../ShowTeam';
import './Teamdisplay.css'

const TeamDetails = () => {
    const { idTeam } = useParams()
    const [team, setTeam] = useState([]);
    const { strTeam, intFormedYear, strCountry, strSport, strGender, strDescriptionEN, strTeamLogo } = team;
    // console.log(idTeam);

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`
        // console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => setTeam(data.teams[0]))

    }, [])
    let gender = strGender && strGender.toLowerCase()
    return (
        <div className=" text-center Container ">

            <div class="col-md-6 col-sm-12 ">
                <img className="img-fluid" src={strTeamLogo} height="200px" width="200px " alt="" />
            </div>
            <div className="row">
                <div class="col-md-6 col-sm-12  ">
                    <h2>Team Name: {strTeam}</h2>
                    <p>Founded: {intFormedYear}</p>
                    <p>Country: {strCountry}</p>
                    <p>SportsName: {strSport}</p>
                    <p>Gender: {strGender}</p>
                </div>
                <div class="col-md-6 col-sm-12  ">
                    {
                        gender && gender === "male" ?
                            (
                                <img src={male} alt="" />
                            ) :
                            (
                                <img src={female} alt="" />
                            )
                    }
                </div>
            </div>
           <p> Team Information: {strDescriptionEN}</p>
           
        </div>
    );
};

export default TeamDetails;