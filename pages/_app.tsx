import React from "react";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "@styles/global.scss";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import Navigation from "@components/Navigation";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
                <Navigation />
                <div className="container mx-auto px-4">
                    <Component {...pageProps} />
                </div>
            </Hydrate>
        </QueryClientProvider>
    );
}

export default MyApp;
