import styled from 'styled-components';

export const LoadButton = styled.button`
  padding: 8px 16px;
  border-radius: 12px;
  background-image: ${props => `linear-gradient(
    to right,
    ${props.theme.colors.firstGradientColor} 0%,
    ${props.theme.colors.secondGradientColor} 35%,
    ${props.theme.colors.thirdGradientColor} 51%,
    ${props.theme.colors.secondGradientColor} 65%,
    ${props.theme.colors.firstGradientColor} 100%
  )`};
  transition: all 350ms ease-in-out;
  text-align: center;
  display: inline-block;
  color: ${props => props.theme.colors.white};
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 160px;
  box-shadow:
    0px 31px 38.75px 0px rgba(43, 66, 147, 0.04),
    0px 2px 2px 0px rgba(130, 72, 187, 0.16) inset,
    0px -2px 2px 0px rgba(43, 66, 147, 0.15) inset,
    0px 4px 4px 0px rgba(43, 66, 147, 0.11),
    0px -4px 4px 0px rgba(130, 72, 187, 0.1);
  backdrop-filter: blur(7px);
  background-size: 200% auto;

  &:hover,
  :focus {
    background-position: right top;
  }
`;

export const ButtonWrapper = styled.div`
  margin: 0 auto;
`;
