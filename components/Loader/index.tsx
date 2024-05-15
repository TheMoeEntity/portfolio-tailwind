"use client";
import React, { useEffect, useState } from "react";

export default function Loader() {
    const [show, setShow] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setShow(false);
        }, 1500)
    }, []);

    if (!show) return null;

    return (
        <div className="bg-[#282C34] fixed top-0 left-0 w-full h-full opacity-[0.98] flex items-center justify-center z-[200]">
            <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
        </div>
    );
}