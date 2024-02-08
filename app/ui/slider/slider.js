"use client";
import React from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import "./slider.css";

const Slider = () => {
    const filteredItems = [
        {
            img: "videoframe5.png",
            alt: "Video meeting in bedroom",
        },
        {
            img: "videoframe.png",
            alt: "Video meeting in bedroom",
        },
        {
            img: "videoframe2.png",
            alt: "Collegues on video meeting",
        },
        {
            img: "videoframe4.png",
            alt: "Apple Vision Pro call in hotel room",
        },
        {
            img: "videoframe3.png",
            alt: "Video meeting in hotel room",
        },
    ];

    const slideLeft = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 300;
    };

    const slideRight = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 300;
    };
    return (
        <>
            <div className="trending">
                <div className="container">
                    <div className="title-btns">
                        <h3></h3>
                        <div className="btns">
                            <button title="scroll left" onClick={slideLeft}>
                                <AiOutlineArrowLeft />
                            </button>
                            <button title="scroll right" onClick={slideRight}>
                                <AiOutlineArrowRight />
                            </button>
                        </div>
                    </div>
                    <div className="row-container" id="slider">
                        {filteredItems.map((item) => (
                            <div key={item.img} className="row-item">
                                <div className="item-header">
                                    <img src={item.img} alt={item.alt} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
export default Slider;