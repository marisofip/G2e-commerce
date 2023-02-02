import React from "react";
import ImageUrl from "../../img/catgame.jpg";
import Image1qUrl from "../../img/catnotebook.jpg";
import Image2Url from "../../img/catnet.webp";
import carrusel1 from "../../img/carrusel1.png";
import carrusel2 from "../../img/carrusel2.png";
import carrusel3 from "../../img/carrusel3.png";

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
                    <img src={carrusel1} className="d-block w-100" alt="..." style={{ height: '700px' }}/>
                    <div className="carousel-caption d-none d-md-block">
                       
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={carrusel2} className="d-block w-100 text-white" alt="..." style={{ height: '700px' }}/>
                    <div className="carousel-caption d-none d-md-block">
                           
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={carrusel3} className="d-block w-100" alt="..." style={{ height: '700px' }}/>
                    <div className="carousel-caption d-none d-md-block">
                        
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

