import React from "react";
import Layout from "../layouts/Layout";
import '../styles/Home.css'
import SimpleImageSlider from 'react-simple-image-slider'
import phone from '../assets/phone.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import lgo from '../logos/logo.jpeg'


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", backgroundColor: "black", marginRight: "5rem", zIndex: "1000", borderRadius: "2rem" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", backgroundColor: "black", marginLeft: "5rem", zIndex: "1000", borderRadius: "2rem" }}
            onClick={onClick}
        />
    );
}


const Home = () => {

    var settings = {

        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        slideToShow: 5,
        swipeToSlide: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />

    };
    const images = [
        { url: phone },
        { url: phone },
        { url: phone },
        { url: phone },
        { url: phone },
        { url: phone },
        { url: phone },


    ];




    return (
        <Layout>

            <div className="home">
                <div className="carousal">
                    <SimpleImageSlider
                        width={1760}
                        height={400}
                        images={images}
                        showBullets={true}
                        showNavs={true}
                        slideDuration={1}
                        autoPlay={true}
                    />

                </div>
            </div>
            <div className="slider-container">
                    <h1>OUR TOP DEALS</h1>
                <Slider {...settings}>
                    <div className="image-container">


                        <div className="images">
                            <img src={lgo} alt="" />
                            <img src={lgo} alt="" />
                            <img src={lgo} alt="" />
                            <img src={lgo} alt="" />
                            <img src={lgo} alt="" />
                            <img src={lgo} alt="" />
                            <img src={lgo} alt="" />
                            <img src={lgo} alt="" />

                        </div>
                   
                    </div>
            
                    <div className="image-container">


                        <div className="images">
                            <img src={lgo} alt="" />
                            <img src={lgo} alt="" />
                            <img src={lgo} alt="" />
                            <img src={lgo} alt="" />
                            <img src={lgo} alt="" />
                            <img src={lgo} alt="" />
                            <img src={lgo} alt="" />
                            <img src={lgo} alt="" />

                        </div>
                   
                    </div>
            
                    <div className="image-container">


                        <div className="images">
                            <img src={lgo} alt="" />
                            <img src={lgo} alt="" />
                            <img src={lgo} alt="" />
                            <img src={lgo} alt="" />
                            <img src={lgo} alt="" />
                            <img src={lgo} alt="" />
                            <img src={lgo} alt="" />
                            <img src={lgo} alt="" />

                        </div>
                   
                    </div>
            

                </Slider>


            </div>
            <div className="cards">
                <div className="box">

                    <img src={phone} alt="" className="page-img" />
                    <div className="img-title">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptate sequi numquam rem voluptatem,
                            optio facilis doloribus, ullam quasi ea expedita facere vel nulla enim asperiores cum!
                            Numquam ad libero reprehenderit aut quis officiis ratione architecto corrupti rerum omnis ut,
                            fuga reiciendis maxime recusandae minus ullam cum nam, dolorem impedit.</p>
                    </div>
                    <div className="rate">
                        <div className="stars">
                            <button className="buy">BUY NOW</button>
                        </div>
                    </div>
                </div>

                <div className="box">

                    <img src={phone} alt="" className="page-img" />
                    <div className="img-title">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptate sequi numquam rem voluptatem,
                            optio facilis doloribus, ullam quasi ea expedita facere vel nulla enim asperiores cum!
                            Numquam ad libero reprehenderit aut quis officiis ratione architecto corrupti rerum omnis ut,
                            fuga reiciendis maxime recusandae minus ullam cum nam, dolorem impedit.</p>
                    </div>
                    <div className="rate">
                        <div className="stars">
                            <button className="buy">BUY NOW</button>
                        </div>
                    </div>
                </div>

                <div className="box">

                    <img src={phone} alt="" className="page-img" />
                    <div className="img-title">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptate sequi numquam rem voluptatem,
                            optio facilis doloribus, ullam quasi ea expedita facere vel nulla enim asperiores cum!
                            Numquam ad libero reprehenderit aut quis officiis ratione architecto corrupti rerum omnis ut,
                            fuga reiciendis maxime recusandae minus ullam cum nam, dolorem impedit.</p>
                    </div>
                    <div className="rate">
                        <div className="stars">
                            <button className="buy">BUY NOW</button>
                        </div>
                    </div>
                </div>

                <div className="box">

                    <img src={phone} alt="" className="page-img" />
                    <div className="img-title">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptate sequi numquam rem voluptatem,
                            optio facilis doloribus, ullam quasi ea expedita facere vel nulla enim asperiores cum!
                            Numquam ad libero reprehenderit aut quis officiis ratione architecto corrupti rerum omnis ut,
                            fuga reiciendis maxime recusandae minus ullam cum nam, dolorem impedit.</p>
                    </div>
                    <div className="rate">
                        <div className="stars">
                            <button className="buy">BUY NOW</button>
                        </div>
                    </div>
                </div>

                <div className="box">

                    <img src={phone} alt="" className="page-img" />
                    <div className="img-title">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptate sequi numquam rem voluptatem,
                            optio facilis doloribus, ullam quasi ea expedita facere vel nulla enim asperiores cum!
                            Numquam ad libero reprehenderit aut quis officiis ratione architecto corrupti rerum omnis ut,
                            fuga reiciendis maxime recusandae minus ullam cum nam, dolorem impedit.</p>
                    </div>
                    <div className="rate">
                        <div className="stars">
                            <button className="buy">BUY NOW</button>
                        </div>
                    </div>
                </div>

                <div className="box">

                    <img src={phone} alt="" className="page-img" />
                    <div className="img-title">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptate sequi numquam rem voluptatem,
                            optio facilis doloribus, ullam quasi ea expedita facere vel nulla enim asperiores cum!
                            Numquam ad libero reprehenderit aut quis officiis ratione architecto corrupti rerum omnis ut,
                            fuga reiciendis maxime recusandae minus ullam cum nam, dolorem impedit.</p>
                    </div>
                    <div className="rate">
                        <div className="stars">
                            <button className="buy">BUY NOW</button>
                        </div>
                    </div>
                </div>

                <div className="box">

                    <img src={phone} alt="" className="page-img" />
                    <div className="img-title">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptate sequi numquam rem voluptatem,
                            optio facilis doloribus, ullam quasi ea expedita facere vel nulla enim asperiores cum!
                            Numquam ad libero reprehenderit aut quis officiis ratione architecto corrupti rerum omnis ut,
                            fuga reiciendis maxime recusandae minus ullam cum nam, dolorem impedit.</p>
                    </div>
                    <div className="rate">
                        <div className="stars">
                            <button className="buy">BUY NOW</button>
                        </div>
                    </div>
                </div>

                <div className="box">

                    <img src={phone} alt="" className="page-img" />
                    <div className="img-title">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptate sequi numquam rem voluptatem,
                            optio facilis doloribus, ullam quasi ea expedita facere vel nulla enim asperiores cum!
                            Numquam ad libero reprehenderit aut quis officiis ratione architecto corrupti rerum omnis ut,
                            fuga reiciendis maxime recusandae minus ullam cum nam, dolorem impedit.</p>
                    </div>
                    <div className="rate">
                        <div className="stars">
                            <button className="buy">BUY NOW</button>
                        </div>
                    </div>
                </div>

                <div className="box">

                    <img src={phone} alt="" className="page-img" />
                    <div className="img-title">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptate sequi numquam rem voluptatem,
                            optio facilis doloribus, ullam quasi ea expedita facere vel nulla enim asperiores cum!
                            Numquam ad libero reprehenderit aut quis officiis ratione architecto corrupti rerum omnis ut,
                            fuga reiciendis maxime recusandae minus ullam cum nam, dolorem impedit.</p>
                    </div>
                    <div className="rate">
                        <div className="stars">
                            <button className="buy">BUY NOW</button>
                        </div>
                    </div>
                </div>

                <div className="box">

                    <img src={phone} alt="" className="page-img" />
                    <div className="img-title">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptate sequi numquam rem voluptatem,
                            optio facilis doloribus, ullam quasi ea expedita facere vel nulla enim asperiores cum!
                            Numquam ad libero reprehenderit aut quis officiis ratione architecto corrupti rerum omnis ut,
                            fuga reiciendis maxime recusandae minus ullam cum nam, dolorem impedit.</p>
                    </div>
                    <div className="rate">
                        <div className="stars">
                            <button className="buy">BUY NOW</button>
                        </div>
                    </div>
                </div>

                <div className="box">

                    <img src={phone} alt="" className="page-img" />
                    <div className="img-title">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptate sequi numquam rem voluptatem,
                            optio facilis doloribus, ullam quasi ea expedita facere vel nulla enim asperiores cum!
                            Numquam ad libero reprehenderit aut quis officiis ratione architecto corrupti rerum omnis ut,
                            fuga reiciendis maxime recusandae minus ullam cum nam, dolorem impedit.</p>
                    </div>
                    <div className="rate">
                        <div className="stars">
                            <button className="buy">BUY NOW</button>
                        </div>
                    </div>
                </div>

                <div className="box">

                    <img src={phone} alt="" className="page-img" />
                    <div className="img-title">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptate sequi numquam rem voluptatem,
                            optio facilis doloribus, ullam quasi ea expedita facere vel nulla enim asperiores cum!
                            Numquam ad libero reprehenderit aut quis officiis ratione architecto corrupti rerum omnis ut,
                            fuga reiciendis maxime recusandae minus ullam cum nam, dolorem impedit.</p>
                    </div>
                    <div className="rate">
                        <div className="stars">
                            <button className="buy">BUY NOW</button>
                        </div>
                    </div>
                </div>

                <div className="box">

                    <img src={phone} alt="" className="page-img" />
                    <div className="img-title">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptate sequi numquam rem voluptatem,
                            optio facilis doloribus, ullam quasi ea expedita facere vel nulla enim asperiores cum!
                            Numquam ad libero reprehenderit aut quis officiis ratione architecto corrupti rerum omnis ut,
                            fuga reiciendis maxime recusandae minus ullam cum nam, dolorem impedit.</p>
                    </div>
                    <div className="rate">
                        <div className="stars">
                            <button className="buy">BUY NOW</button>
                        </div>
                    </div>
                </div>

                <div className="box">

                    <img src={phone} alt="" className="page-img" />
                    <div className="img-title">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptate sequi numquam rem voluptatem,
                            optio facilis doloribus, ullam quasi ea expedita facere vel nulla enim asperiores cum!
                            Numquam ad libero reprehenderit aut quis officiis ratione architecto corrupti rerum omnis ut,
                            fuga reiciendis maxime recusandae minus ullam cum nam, dolorem impedit.</p>
                    </div>
                    <div className="rate">
                        <div className="stars">
                            <button className="buy">BUY NOW</button>
                        </div>
                    </div>
                </div>

                <div className="box">

                    <img src={phone} alt="" className="page-img" />
                    <div className="img-title">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptate sequi numquam rem voluptatem,
                            optio facilis doloribus, ullam quasi ea expedita facere vel nulla enim asperiores cum!
                            Numquam ad libero reprehenderit aut quis officiis ratione architecto corrupti rerum omnis ut,
                            fuga reiciendis maxime recusandae minus ullam cum nam, dolorem impedit.</p>
                    </div>
                    <div className="rate">
                        <div className="stars">
                            <button className="buy">BUY NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )

}
export default Home;