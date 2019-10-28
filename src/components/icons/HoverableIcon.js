import styled from 'styled-components';

const HoverableIcon = styled.a`
  box-shadow: none;
  position: relative;
  top: 0;
  transition: top ease 0.5s;
  &:hover {
    top: -10px;
  }
  &:focus {
    filter: saturate(4);
  }
`;
export default HoverableIcon;
