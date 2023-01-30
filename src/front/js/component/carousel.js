import React from "react";
import ImageUrl from "../../img/catgame.jpg";
import Image1qUrl from "../../img/catnotebook.jpg";
import Image2Url from "../../img/catnet.webp";


export const Carousel = () => {
    return (
            <div id="carouselExampleIndicators" className="carousel slide mb-5" data-bs-ride="true">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={ImageUrl} className="d-block w-100" alt="..." style={{ height: '700px' }}/>
                    <div class="carousel-caption d-none d-md-block">
                        <h1>20% Descuento en todas las consolas</h1>
                        <p></p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={Image1qUrl} className="d-block w-100" alt="..." style={{ height: '700px' }}/>
                    <div class="carousel-caption d-none d-md-block">
                        <h1 className="text-body">Descubra la nueva línea de bolsos para notebooks</h1>
                        <p></p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={Image2Url} className="d-block w-100" alt="..." style={{ height: '700px' }}/>
                    <div class="carousel-caption d-none d-md-block">
                        <h1>Todo en conectividad para el hogar y oficina</h1>
                        <p></p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
    )
}

