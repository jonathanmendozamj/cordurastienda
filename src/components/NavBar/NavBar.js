import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getCategories } from '../asyncmock';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories().then(categories => {
            setCategories(categories);
        })
        .catch(error => console.error(error))
        .finally(() => {
            console.log('Finalizó');
        });
    }, [categories]);
    
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

                            <CartWidget count={ 5 } />
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default NavBar;