import React, {Component} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {
  Container,
  IconArrow,
  Content,
  TitleAbout,
  NameAbout,
  Nationality,
  TypeAbout,
  OrbitAbout,
  ImageLogo,
  Details,
  DetailrText,
  DetailsTitle,
  Article,
  IconVideo,
} from './style';
import api from '../../services/api';

import arrowBack from '../../assets/left-chevron.png';
import example from '../../assets/example.png';
import youtube from '../../assets/youtube.png';

class About extends Component {
  state = {
    user: [],
  };

  handleGoback = () => {
    const {navigation} = this.props;

    navigation.goBack();
  };

  async componentDidMount() {
    // const {navigation} = this.props;
    // const item = navigation.getParam('id');

    // const response = await api.get(`launches/{{${item.data}}}`);

    // this.setState({data: response.data});
    const response = await api.get('launches/1');
    this.setState({user: response.data});
  }

  render() {
    const {user} = this.state;
    return (
      <Container>
        <TouchableOpacity activeOpacity={0.9} onPress={this.handleGoback}>
          <IconArrow source={arrowBack} />
        </TouchableOpacity>
        {user.map(users => (
          <Content key={users.flight_number}>
            <View>
              <TitleAbout>ABOUT</TitleAbout>
              <NameAbout>
                NAME: {users.second_stage.payloads.payload_id}
              </NameAbout>
              <Nationality>
                NATIONALITY: {users.second_stage.payloads.nationality}{' '}
              </Nationality>
              <TypeAbout>
                TYPE: {users.second_stage.payloads.payload_type}
              </TypeAbout>
              <OrbitAbout>
                ORBIT: {users.second_stage.payloads.orbit}
              </OrbitAbout>
            </View>
            <ImageLogo source={{uri: users.links.mission_patch}} />
          </Content>
        ))}

        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <TouchableOpacity activeOpacity={0.8}>
            <Article>ACESSE O ARTIGO</Article>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7}>
            <IconVideo source={youtube} />
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}

About.navigationOptions = {
  header: null,
};

export default About;
