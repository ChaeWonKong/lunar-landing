import React from "react";
import * as S from "./styled";

interface SiteTitleProps {
  children: string | React.ReactNode;
}

export default function SiteTitle(props: SiteTitleProps) {
  return <S.SiteTitle>{props.children}</S.SiteTitle>;
}
