import React from "react";
import GlobalStyles from "./GlobalStyles";
import SiteTitle from "./components/site-title";
import Text from "./components/text";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <SiteTitle>Lunar Landing</SiteTitle>
      <Text>Hommage to Apollo11 and it's crews</Text>
    </>
  );
}
