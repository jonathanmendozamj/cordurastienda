const Footer = () => {
    return (
        <footer className="piePagina">
            <div className="container">
                <div className="contenedor-secciones-pie-pagina">
                    <section className="seccion-pie-pagina">
                        <h4 className="seccion-pie-pagina__titulo">SEGUINOS EN NUESTRAS REDES</h4>
                        <div>
                            <a href="https://www.facebook.com/corduras.pinamar"><img className="seccion-pie-pagina__iconos"
                                    src="/images/facebook.svg" alt="Facebook" /></a>
                            <a href="https://www.instagram.com/corduras.pinamar"><img className="seccion-pie-pagina__iconos"
                                    src="/images/instagram.svg" alt="Instagram"/></a>
                        </div>
                    </section>

                    <section className="seccion-pie-pagina">
                        <h4 className="seccion-pie-pagina__titulo">CONTACTO - CASA CENTRAL</h4>
                        <p className="seccion-pie-pagina__parrafo"><img className="icono" src="/icons/telefono.svg"
                                alt="Teléfono fijo" /> (02254) 407427</p>
                        <p className="seccion-pie-pagina__parrafo"><img className="icono" src="/icons/mail.svg" alt="Mail"/> 
                             corduras.pinamar@gmail.com</p>
                        <p className="seccion-pie-pagina__parrafo"><img className="icono" src="/icons/position.svg" alt="Dirección"/>
                             Av. Víctor Hugo 1341 (Local 5) - Ostende</p>
                    </section>
                </div>

                <section className="seccion-pie-pagina">
                    <p className="seccion-pie-pagina__parrafo--centrado">Copyright CORDURAS - 2022</p>
                </section>
            </div>
        </footer>
    );
};

export default Footer;