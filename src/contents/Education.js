import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">My Education</h1>
                <Widecard title="Computer Science Degree" where="St. Edwards University" from="July 2017" to="December 2020"/>
            </div>
        )
    }
}

export default Education