import type { AppProps } from "next/app";
import { Web3sdkioProvider, ChainId } from "@web3sdkio/react";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import "../styles/globals.css";
import Header from "../components/Header/Header";

export default function App({ Component, pageProps }: AppProps) {
  // Initialize React Query Client
  const queryClient = new QueryClient();

  // Specify what network you're going to interact with
  const desiredChainId = ChainId.Polygon;

  return (
    // For web3sdkio functionality
    <Web3sdkioProvider desiredChainId={desiredChainId}>
      {/* For React Query functionality */}
      <QueryClientProvider client={queryClient}>
        {/* For React Query supporting SSR */}
        <Hydrate state={pageProps.dehydratedState}>
          <Header />
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </Web3sdkioProvider>
  );
}
