"use client";
import React, { useEffect, useState } from "react";
import './loader.css'

export default function Loader() {
    const [show, setShow] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setShow(false);
        }, 750)
    }, []);

    if (!show) return null;

    return (
        <div className="bg-[#282C34] body fixed top-0 left-0 w-full h-full opacity-[0.98] flex items-center justify-center z-[200]">
            <div className="content">
                <div className="bars">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <div className="bars">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
        </div>
    );
}