import styled from 'styled-components/native';

export const SignInFormContainer = styled.ScrollView`
  /* background-color: linear-gradient(to left, #cc00ff 0%, #3399ff 126%); */
  flex: 1;
  padding: 3%;
`;

export const SignInFormElements = styled.View`
  width: 100%;
  background-color: white;
  padding: 15px;
`;

export const EnterYourAddress = styled.View`
  margin-top: 10px;
`;
export const TextAddress = styled.Text`
  color: gray;
  font-size: 13px;
`;
export const TextArea = styled.TextInput`
  border: 1px solid lightgray;
`;

export const TermsAndConditions = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

export const TermsData = styled.Text`
  font-size: 13px;
  align-self: center;
`;
export const SignUp = styled.Button`
  background-color: dodgerblue;
`;
