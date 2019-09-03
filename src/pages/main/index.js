import React, {Component} from 'react';
import {FlatList} from 'react-native';
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
  ButtonSaberMais,
  ButtonSaberMaisText,
  HeaderSearch,
  IconSearch,
  ContentView,
} from './style';
import iconSearch from '../../assets/search.png';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    const response = await api.get('launches');
    this.setState({data: response.data});

    const {getListRequest} = this.props;

    getListRequest();
  }

  handleSubmit = async text => {
    const filterName = this.state.data.filter(name => {
      let nameLowerCase = name.mission_name.toLowerCase();

      let searchLowerCase = text.toLowerCase();

      return nameLowerCase.indexOf(searchLowerCase) > -1;
    });

    this.setState({data: filterName});
  };

  handleDetails = id => {
    const {navigation} = this.props;

    navigation.navigate('About', {id});
  };

  render() {
    const {list} = this.props;
    const {data} = this.state;

    return (
      <Container>
        <HeaderSearch>
          <IconSearch source={iconSearch} />
          <Input
            placeholder="Coloque um nome para pesquisar"
            placeholderTextColor="#fff"
            onChangeText={text => this.handleSubmit(text)}
            returnKeyType="send"
          />
        </HeaderSearch>

        <FlatList
          data={data}
          renderItem={({item}) => (
            <Content key={item.flight_number}>
              <Img source={{uri: item.links.mission_patch}} />
              <ContentView>
                <Title>{item.mission_name}</Title>
                <TextYear>{item.launch_year}</TextYear>
                <ButtonSaberMais
                  onPress={() => this.handleDetails(item.flight_number)}>
                  <ButtonSaberMaisText>SABER MAIS</ButtonSaberMaisText>
                </ButtonSaberMais>
              </ContentView>
            </Content>
          )}
          keyExtractor={(item, index) => index.toString()}
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
