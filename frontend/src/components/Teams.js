import React from 'react';
import Header from './Header';
import {getTeams} from '../api/TeamsAPI'

export default class Teams extends React.Component {

    constructor(props) {
        super(props);
        this.state = {"teams": []}; 
    }

    componentDidMount() {
        getTeams().then((res) => {
            this.setState(res)
        })
    }

    render() {
        return (
            <div>
                <Header/>
                <div>
                    {this.state.teams.map((value, index, array) => {
                        return (<h3>{value.name}</h3>);
                    })}
                </div>
            </div>
        );
    }   
}