import styled from "styled-components";

export const NavigationContainer = styled.nav`
  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }

  li {
    width: 3rem;
    height: 3rem;

    a {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${({ theme }) => theme.color.gray[100]};
      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      &:hover {
        border-bottom-color: ${({ theme }) => theme.color.green[500]};
      }

      &.active {
        color: ${({ theme }) => theme.color.green[500]};
      }
    }
  }
`;
