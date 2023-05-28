import styled from '@emotion/styled';
import { Form, Field } from 'formik';
import { StyledButton } from 'components/Contacts/components/Button/Button.Styled';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  border: 1px solid #ff9800;
  border-radius: 6px;
  padding: 40px;
`;

export const Item = styled(Field)`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 40px;
  border-radius: 6px;
  border-color: white;
  background-color: white;
`;

export const FormBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CloseButton = styled(StyledButton)`
  width: 30px;
  position: absolute;
  top: -5px;
  right: 5px;
  background-color: transparent;
  border-color: transparent;
  color: #ff9800;
`;
