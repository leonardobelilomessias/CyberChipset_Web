import { styled } from "@nextui-org/react"
import { Home } from "../pages/Home";

export const Box = styled("div", {
  boxSizing: "border-box",
});

export function Layout ({ children }:any) {
  return(
  <Box
    css={{
      maxW: "100%"
    }}
  >
    {children}
    <Home/>
  </Box>
)};