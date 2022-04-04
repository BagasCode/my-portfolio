import React from "react";

import data from "@public/meta.json";

export const Cards: React.FC = () => {
    return (
        <div className="container flex-1 p-5 my-8 mx-auto max-w-screen-lg">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {(data?.plugins ?? []).map((plugin) => (
                    <div
                        key={plugin.name}
                        className="col-span-1 p-5 rounded-md border border-gray-300"
                    >
                        <h2 className="mb-2 text-xl font-semibold">
                            {plugin.name}
                        </h2>
                        <p className="m-0">{plugin.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
