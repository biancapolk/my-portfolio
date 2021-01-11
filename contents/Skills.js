import React, { Component } from 'react'

class Skills extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'myskills':['Languages: Java, Python, JavaScript, SQL, Haskell, HTML5, CSS3',
                'Development Environments: Eclipse, PyCharm, IntelliJ IDEA, Atom, Visual Studio Code',
                'Development Tools: BitBucket, GitHub, Jira',
                'Application Servers: Nginx, Apache',
                'Operating Systems: Unix, Linux, MS-Windows, Ubuntu, Mac OS',
                'Database Systems: SQL Server, MySQL, SQLite, MongoDB',
                'Programming Paradigms: Object Oriented, Functional',
                'Cloud Computing: Saas, Slack, Dropbox, DigitalOcean, Salesforce, Box',
                'Testing and Debugging Tools: Postman, JUnit',
                'Software Security: TCP/IP protocols, Anti-Virus, Identity & Access Management, Triple DES, ID/PS, RSA Security',
                'Soft Skills: Excellent Verbal/Written Communication, Efficient Problem Solving, Cooperative Teamwork/Collaboration, Comprehensive Research, Boundless Creativity'
            ]
        };
    }

    render() {
        return (
            <div className="condiv skills">
                <h1 className="subtopic">My Skills</h1>
                <ul>
                    {this.state.myskills.map((value)=>{
                        return <li>{value}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default Skills
    