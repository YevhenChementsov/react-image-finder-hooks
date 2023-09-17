import styled from 'styled-components';

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.button};
  box-shadow:
    0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: ${props => props.theme.colors.white};
  border-radius: 12px;
  overflow: hidden;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  cursor: pointer;
  opacity: 0.6;
  background-color: transparent;
  border: none;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    opacity: 1;
    transform: scale(1.15);
  }
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  height: 36px;
  font-family: 'Caveat', cursive;
  font-size: calc(22px + 2 * ((100vw - 320px) / (1920 - 320)));
  border: none;
  outline: none;
  padding-top: 5px;
  padding-right: 40px;
  padding-bottom: 5px;
  padding-left: 4px;

  &::placeholder {
    font: inherit;
    font-size: calc(22px + 2 * ((100vw - 320px) / (1920 - 320)));
  }
`;
