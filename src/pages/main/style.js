import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #2c2c54;
  align-items: center;
`;

export const HeaderSearch = styled.View`
  height: 58px;
  width: 93%;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
  padding-left: 15px;
`;

export const Input = styled.TextInput`
  padding: 10px;
  font-size: 17px;
  color: #fff;
`;

export const IconSearch = styled.Image`
  width: 20px;
  height: 20px;
`;

export const Content = styled.View`
  width: 379px;
  background-color: rgba(122, 111, 211, 0.8);
  height: 100px;
  border-radius: 10px;
  margin-top: 40px;
  /* justify-content: center; */
  align-items: center;
  flex-direction: row;
`;

export const Img = styled.Image`
  height: 59px;
  width: 55px;
  margin-left: 20px;
`;

export const Title = styled.Text`
  font-size: 14px;
  margin-left: 10px;
`;

export const TextYear = styled.Text`
  font-size: 12px;
  margin-left: 10px;
  color: rgba(196, 196, 196, 0.5);
`;

export const Details = styled.Text`
  font-size: 14px;
  margin-left: 10px;
  color: rgba(196, 196, 196, 0.8);
`;

export const ButtonSaberMais = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  margin-right: 20px;
  width: 132px;
  height: 27px;
  background-color: rgba(51, 217, 172, 0.5);
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  margin-left: 50px;
`;

export const ButtonSaberMaisText = styled.Text``;
