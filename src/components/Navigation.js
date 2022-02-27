import React from 'react';
import { NavLink } from 'react-router-dom';
import Photo from '../librairie/Photo_Id.png'


const Navigation = () => {
    return (
        <div className='sidebar'>
            <div className='id'>
                <div className='idContent'>
                    <img src={Photo} alt='profil-pic' />
                    <h3>Nicolas BURTZ</h3>
                </div>
            </div>

            <div className='navigation'>
                <ul>
                    <li>
                        <NavLink
                            exact to="/Nicolaswebsite/"
                            activeClassName="navActive">
                            <i className='fas fa-home'></i>
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            exact to="/Nicolaswebsite/portfolio"
                            activeClassName="navActive">
                            <i className='fas fa-images'></i>
                            <span>Portfolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            exact to="/Nicolaswebsite/formation"
                            activeClassName="navActive">
                            <i className='fas fa-images'></i>
                            <span>Formation</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            exact to="/Nicolaswebsite/competences"
                            activeClassName="navActive">
                            <i className='fas fa-mountain'></i>
                            <span>Competences</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            exact to="/Nicolaswebsite/contact"
                            activeClassName="navActive">
                            <i className='fas fa-address-book'></i>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className='socialNetwork'>
                <ul>
                    <li>
                        <a href="https://github.com/Nico9942" target="_blank" rel='noopener noreferrer'>
                        <i className='fab fa-github'></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/nicolas-burtz-0361001bb/" target="_blank" rel='noopener noreferrer'>
                        <i class="fab fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/NNfoxa99" target="_blank" rel='noopener noreferrer'>
                        <i className='fab fa-twitter'></i>
                        </a>
                    </li>
                </ul>

                <div className='signature'>
                    <p> Nicolas BURTZ - 2022</p>
                </div>
            </div>

        </div>
    );
};

export default Navigation;

