import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #2c2c54;
`;

export const ButtonInitial = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  background-color: rgba(122, 111, 211, 0.8);
  height: 58px;
  width: 80%;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
`;

export const ButtonInitialText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  font-family: 'Chilanka';
`;
