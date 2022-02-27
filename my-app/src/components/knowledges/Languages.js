import React, { Component } from 'react'
import ProgressBar from './ProgressBar';

// rcc
export default class Languages extends Component {
    state = {
        languages: [
            { id: 1, value: "Javascript", xp: 0.2 },
            { id: 2, value: "Css", xp: 0.5 },
            { id: 3, value: "Html", xp: 0.5 },
            { id: 4, value: "JavaSpring", xp: 0.4 }
        ],
        frameworks: [
            { id: 1, value: "React", xp: 0.8 },
            { id: 2, value: "Bootstrap", xp: 0.3 }
        ]
    }

    render() {
        let { languages, frameworks } = this.state;
        // quand on dit langage ou framework on renvois la foncion et le state du component

        return (
            <div className='languagesFrameworks'>
            
                <ProgressBar
                    languages={languages} //on lui envoie notre tableau
                    className="languagesDisplay"
                    title="languages"
                />

                <ProgressBar
                    languages={frameworks}
                    title="frameworks & bibliothèques"
                    className="frameworksDisplay"
                />
            </div>
        )
    }
}
