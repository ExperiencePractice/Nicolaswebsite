import React from "react";

const Hobbies = () => {
    return(
        <div className="hobbies">
            <h3>Intérets</h3>
            <ul>
                <li className="hobby"><i className="fas fa-check-square"></i>
                    <span>Jeux vidéo</span>
                </li>
                <li className="hobby"><i className="fas fa-check-square"></i>
                    <span>Crypto-monnaies</span>
                </li>
                <li className="hobby"><i className="fas fa-check-square"></i>
                    <span>Sport</span>
                </li>
            </ul>
        </div>
    );
};

export default Hobbies;