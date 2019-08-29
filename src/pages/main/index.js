import React, {Component} from 'react';
import {View, Button, FlatList, Text, TouchableOpacity} from 'react-native';

import api from '../../services/api';

import {
  Container,
  Input,
  Content,
  Img,
  Title,
  TextYear,
  Details,
  ButtonSaberMais,
  ButtonSaberMaisText,
} from './style';

class Main extends Component {
  state = {
    data: [],
    search: '',
  };
  async componentDidMount() {
    const response = await api.get('launches');

    this.setState({data: response.data});
  }

  // handleSubmit = async () => {
  //   const {search} = this.state;

  //   const response = await api.get(`launches/${search}`);

  //   this.setState({data: response});
  // };

  handleDetails = id => {
    const {navigation} = this.props;

    navigation.navigate('About', {id});
  };
  render() {
    const {data, search} = this.state;

    return (
      <Container>
        <Input
          value={search}
          placeholder="Coloque um nome para pesquisar"
          placeholderTextColor="#fff"
          onChangeText={text => this.setState({search: text})}
          returnKeyType="send"
          onSubmitEditing={this.handleSubmit}
        />

        <TouchableOpacity onPress={this.handleSubmit}>
          <Text>Enviar</Text>
        </TouchableOpacity>

        <FlatList
          data={data}
          keyExtractor={data.id}
          renderItem={({item}) => (
            <Content key={item.flight_number}>
              <Img source={{uri: item.links.mission_patch}} />
              <View style={{flexDirection: 'column'}}>
                <Title>{item.mission_name}</Title>
                <TextYear>{item.launch_year}</TextYear>
                <ButtonSaberMais
                  onPress={() => this.handleDetails(item.flight_number)}>
                  <ButtonSaberMaisText>SABER MAIS</ButtonSaberMaisText>
                </ButtonSaberMais>
              </View>
            </Content>
          )}
        />
      </Container>
    );
  }
}

Main.navigationOptions = {
  header: null,
};
export default Main;
