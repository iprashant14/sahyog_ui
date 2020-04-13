import React from "react";
import './Carousel.css'

function Carousel() {
  return (
    <div id="myCarousel" className="carousel slide" data-ride="carousel">

    <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>


    <div className="carousel-inner" role="listbox">
        <div className="item active">
            <img src={`${process.env.PUBLIC_URL}/images/img8.jpg`} alt="Carousel" width="1200" height="700"/>
            <div className="carousel-caption">
                <h3>Humara Sahyog</h3>
                <p>Dedication to God is seen in helping the needy!</p>
            </div>
        </div>

        <div className="item">
            <img src={`${process.env.PUBLIC_URL}/images/img10.jpg`} alt="Carousel" width="1200" height="700"/>
            <div className="carousel-caption">
                <h3>Humara Sahyog</h3>
                <p>Dedication to God is seen in helping the needy!</p>
            </div>
        </div>

        <div className="item">
            <img src={`${process.env.PUBLIC_URL}/images/img11.jpg`} alt="Carousel" width="1200" height="700"/>
            <div className="carousel-caption">
                <h3>Humara Sahyog</h3>
                <p>Dedication to God is seen in helping the needy!</p>
            </div>
        </div>
    </div>


    <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
    </a>
    <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
    </a>
</div>
  );
}

export default Carousel;
