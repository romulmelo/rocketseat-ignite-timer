import { Logo } from "../Logo";
import { Navigation } from "../Navigation";

import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <Navigation />
    </HeaderContainer>
  );
}
