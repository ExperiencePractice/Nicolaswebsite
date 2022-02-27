import React from "react";

const ProgressBar = (props) => {

    console.log(props);

    return (
        <div className={props.className}>
            <h3>{props.title}</h3>
            <br></br>
            <div className="months">
                <span> Mois d'experience</span>
                <span> 3 mois</span>
                <span> 6 mois</span>
            </div>
            <br></br>
            <div>
                {
                    
                    props.languages.map((item) =>{
                        let xpMonths = 2;
                        let progressBar = item.xp / xpMonths * 100 + '%';

                return(
                <div key={item.id} className="languagesList">
                
                    <li>{item.value}</li>
                    <div className="progressBar" style={{width:progressBar}}></div>
                </div>
                )
                      }  )
                }
            </div>

        </div>
    );
};

export default ProgressBar;