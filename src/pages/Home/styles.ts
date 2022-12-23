import styled from "styled-components";

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 1.125rem;
  font-weight: bold;
  color: ${({ theme }) => theme.color.gray[100]};
`;

const BaseInput = styled.input`
  height: 2.5rem;
  color: ${({ theme }) => theme.color.gray[100]};
  font-weight: bold;
  font-size: 1.125rem;
  border-bottom: 2px solid ${({ theme }) => theme.color.gray[500]};
  background: transparent;
  text-align: center;

  &:focus {
    border-bottom-color: ${({ theme }) => theme.color.green[500]};
  }
`;

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`;

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`;

export const CountdownContainer = styled.div`
  flex: 1;
  display: flex;
  gap: 1rem;

  span {
    padding: 2rem 1rem;
    font-family: "Roboto Mono", monospace;
    font-size: clamp(5rem, 12vw, 8.5rem);
    line-height: 8rem;
  }

  span:not(:nth-child(3)) {
    color: ${({ theme }) => theme.color.gray[100]};
    background-color: ${({ theme }) => theme.color.gray[700]};
    border-radius: ${({ theme }) => theme.radii.md};
  }

  span:nth-child(3) {
    overflow: hidden;
    color: ${({ theme }) => theme.color.green[500]};
  }
`;

export const StartCountdownButton = styled.button`
  cursor: pointer;
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: bold;
  background-color: ${({ theme }) => theme.color.green[500]};
  border-radius: ${({ theme }) => theme.radii.md};
  color: ${({ theme }) => theme.color.gray[100]};

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.color.green[700]};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;
