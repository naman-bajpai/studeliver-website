/** @jsxImportSource react */
import React, { JSX } from "react";
import { Spotlight } from "../ui/spotlight";
import { TextGenerateEffect } from "./text-generate-effect";

export default function MainBody() {
    const description = "Making Delivery faster, cheaper and more efficient";

    return (
        <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-white antialiased relative overflow-hidden">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="rgba(253, 224, 71, 0.25)"
            />
            <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
                <h1 className="text-4xl md:text-7xl font-bold text-center text-blue-600">
                    Food Delivery for Students by Students
                </h1>
                <div className="mt-10 font-normal text-base max-w-3xl text-center mx-auto">
                    <TextGenerateEffect 
                        words={description}
                        className="text-blue-500"
                    />
                </div>
            </div>
        </div>
    );
}