import { Timer, Scroll } from "phosphor-react";
import { NavLink } from "react-router-dom";

import { NavigationContainer } from "./styles";

export function Navigation() {
  return (
    <NavigationContainer>
      <ul>
        <li>
          <NavLink to="/" title="Timer">
            <Timer size={24} aria-label="Ícone de um relógio" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/history" title="Histórico">
            <Scroll size={24} aria-label="Ícone de uma folha de papel" />
          </NavLink>
        </li>
      </ul>
    </NavigationContainer>
  );
}
