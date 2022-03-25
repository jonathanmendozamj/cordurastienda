import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark navegador">
            <div className="container-fluid">
                <img className="navegador__logo" src="/images/logo-corduras.png" alt="Logo del local"/>
                <h2>CORDURAS</h2>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#grupoItemNavs" aria-controls="grupoItemNavs" aria-expanded="true"
                    aria-label="Menu de naavegación">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div id="grupoItemNavs" className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0 navegador__lista">
                        <li className="nav-item navegador__item"><a className="nav-link" href="#">CALZADO</a></li>
                        <li className="nav-item navegador__item"><a className="nav-link" href="#">INDUMENTARIA</a></li>
                        <li className="nav-item navegador__item"><a className="nav-link" href="#">ACCESORIOS</a></li>
                    </ul>

                    <CartWidget count={ 5 } />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;