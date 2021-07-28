import React from "react";
import * as S from "./styled";

interface TextProps {
  children: string | React.ReactNode;
}

export default function Text(props: TextProps) {
  return <S.Text>{props.children}</S.Text>;
}
