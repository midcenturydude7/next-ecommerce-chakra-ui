/* eslint-disable react/prop-types */
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../src/theme";
import "../src/theme/styles.css";

function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
