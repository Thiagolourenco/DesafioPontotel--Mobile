import React, {Component} from 'react';
import {View, Button, FlatList, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import ListActions from '../../store/ducks/list';
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
    // data: [],
    search: '',
  };
  async componentDidMount() {
    const {getListRequest} = this.props;

    getListRequest();
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
    const {list} = this.props;
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
          data={list.data}
          keyExtractor={item => String(item.id)}
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

const mapStateToProps = state => ({
  list: state.list,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ListActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
