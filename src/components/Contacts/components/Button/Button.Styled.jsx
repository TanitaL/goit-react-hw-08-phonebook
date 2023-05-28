import styled from '@emotion/styled';

export const StyledButton = styled.button`
  display: block;
  width: 120px;
  height: 30px;
  margin-top: 15px;
  background-color: #ff9800;
  border-radius: 6px;
  border-color: #ff9800;
  color: white;
  transition: 350ms;
  &:hover,
  :focus {
    background-color: #646a7a;
    color: white;
    border-color: #ff9800;
  }
`;
