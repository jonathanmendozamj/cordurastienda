import { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import { getCategories } from '../../services/firebase/firestore';

import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    const [categories, setCategories] = useState([]);
    const { isEmpty } = useContext(CartContext);

    useEffect(() => {
        getCategories().then(categories => {
            setCategories(categories);
        })
        .catch(error => console.error(error))
        .finally(() => {
            console.log('Finalizó');
        });
    }, []);
    
    return (
        <header>
            <div className="container">
                <nav className="navbar navbar-expand-md navbar-dark bg-dark navegador">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="/">
                            <img className="navegador__logo" src="/images/logo-corduras.png" alt="Logo del local"/>
                        </NavLink>
                        
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#grupoItemNavs" aria-controls="grupoItemNavs" aria-expanded="true"
                            aria-label="Menu de navegación">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div id="grupoItemNavs" className="collapse navbar-collapse">
                            <ul className="navbar-nav me-auto mb-2 mb-md-0 navegador__lista">
                                {
                                    categories.map(category => 
                                        <NavLink key={ category.id } className="nav-link" to={ `/category/${ category.id }` }>
                                            <li className="nav-item navegador__item">{ category.description } </li>
                                        </NavLink>
                                    )
                                }
                            </ul>
                            {
                                !isEmpty() ?
                                <CartWidget /> :
                                ""
                            }
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default NavBar;