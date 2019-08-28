import React from 'react';

import {Container, ButtonInitial, ButtonInitialText} from './style';

const Initial = ({navigation}) => (
  <Container>
    <ButtonInitial onPress={() => navigation.navigate('Main')}>
      <ButtonInitialText>VAMOS COMEÇAR</ButtonInitialText>
    </ButtonInitial>
  </Container>
);

Initial.navigationOptions = {
  header: null,
};
export default Initial;
