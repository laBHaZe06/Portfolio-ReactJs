import React from 'react';
import { NavLink } from 'react-router-dom';



const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                < NavLink to="/" exact className="hover"
                activeClassName="nav-active">
                    <li>accueil</li>
                </NavLink>
                <li className="nav-portfolio">portfolio
                    <ul className="nav-projects">
                        < NavLink to="/projet-1" activeClassName="nav-active"
                        className="hover">
                            <li>SetFormation</li>
                            </NavLink>
                            < NavLink to="/projet-2" activeClassName="nav-active"
                        className="hover">
                            <li>AirBe'N</li>
                            </NavLink>
                            < NavLink to="/projet-3" activeClassName="nav-active"
                        className="hover">
                            <li>Agence Bien'Veillance</li>
                            </NavLink>
                            < NavLink to="/projet-4" activeClassName="nav-active"
                        className="hover">
                            <li>AnimalerieShop</li>
                            </NavLink>
                    </ul>
                </li>
                < NavLink to="/contact" exact className="hover"
                activeClassName="nav-active">
                    <li>contact</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;