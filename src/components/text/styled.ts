import styled from "styled-components";
import { LANGUAGE } from "../../constants";

interface TextInterface {
  lang?: LANGUAGE;
}

export const Text = styled.p<TextInterface>`
  font-family: "${({ lang }) =>
      lang === LANGUAGE.KO ? "DOSGothic" : "Press Start 2P"}",
    cursive;
  font-size: 14px;
  line-height: 21px;
`;
