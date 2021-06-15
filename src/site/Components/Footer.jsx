import React from 'react';

function Footer(){
    var ano = new Date().getFullYear();

    return <section id="footer">
        <div>
            <ul className="list-unstyled list-inline text-center">
                <li className="list-inline-item">
                    <a href="#"><i class="fab fa-facebook fa-2x"></i></a>
                </li>
                <li className="list-inline-item">
                    <a href="#"><i class="fab fa-twitter fa-2x"></i></a>
                </li>
                <li className="list-inline-item">
                    <a href="#"><i class="fab fa-instagram fa-2x"></i></a>
                </li>
                <li className="list-inline-item">
                    <a href="#" target="blank"><i class="fa fa-envelope fa-2x"></i></a>
                </li>
            </ul>
        </div>
        <a href="mailto:dorivansousa@hotmail.com">Contato</a>
        <p>Desenvolvido por Dorivan {ano}</p>
    </section>
}

export default Footer;