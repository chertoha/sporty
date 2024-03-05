import { FC } from "react";
import { Box } from "@mui/material";
import { ViewportSize } from "hooks/useWindowSize";
import { trimText } from "utils/trimText";

interface ITrimmedTextProps {
  text: string;
  textLength: number | [number?, number?, number?];
  viewport: ViewportSize;
}

const TrimmedText: FC<ITrimmedTextProps> = ({ text, textLength, viewport }) => {
  //   const getLength = (
  //     viewport: ViewportSize,
  //     length: number | [number?, number?, number?]
  //   ): number => {
  //     const { isMobile, isTablet, isDesktop } = viewport;
  //     const arr = [isMobile, isTablet, isDesktop];
  //   };

  if (typeof textLength === "number")
    return <Box component="span">{trimText(text, textLength)}</Box>;

  if (viewport.isMobile)
    return <Box component="span">{trimText(text, textLength[0])}</Box>;

  if (viewport.isTablet)
    return <Box component="span">{trimText(text, textLength[1])}</Box>;

  if (viewport.isDesktop)
    return <Box component="span">{trimText(text, textLength[2])}</Box>;

  return null;
};

export default TrimmedText;
