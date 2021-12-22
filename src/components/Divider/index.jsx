import styled from "styled-components";

export const Divider = styled.hr`
  background-color: ${(props) => props.colorLine && props.colorLine};
  width: ${(props) => props.width && props.width};
  height: ${(props) => props.height && props.height};
  border-top-width: 0px;
`;
