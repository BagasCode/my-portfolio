import React from "react";

import { Button } from "@components";

export const Main: React.FC = () => {
    return (
        <div className="py-5 font-light text-center bg-gray-700">
            <div className="container mx-auto">
                <h1 className="mb-2 text-8xl text-white">superplate</h1>
                <p className="mb-3 text-lg text-white">
                    The frontend boilerplate with superpowers!
                </p>
                <Button type="button">
                    <a
                        href="https://pankod.github.io/superplate/"
                        target="_blank"
                    >
                        Docs
                    </a>
                </Button>
            </div>
        </div>
    );
};
