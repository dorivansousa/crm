import React from 'react';

function Testemunial(){
    return  <section id="testemunial">
        <div className="container">
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <h2>Excelente ferramenta para acompanhamento do dia a dia, sendo flexível e suficiente para a maior parte dos usos. Seja para controle de CRM ou para controle de visitas, o 99 CRM tem se revelado uma ferramenta muito útil e intuitiva </h2>
                        <img src="images/cliente.jpg" alt="" />
                        <em>Marcio Martins - São Paulo</em>
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <h2>Excelente ferramenta para acompanhamento do dia a dia, sendo flexível e suficiente para a maior parte dos usos. Seja para controle de CRM ou para controle de visitas, o 99 CRM tem se revelado uma ferramenta muito útil e intuitiva</h2>
                        <img src="images/cliente.jpg" alt="" />
                        <em>João Silva - Imperatriz</em>
                    </div>                
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    </section>
}

export default Testemunial;