import React, {Component} from 'react';
import {TouchableOpacity, Text, View, FlatList, Linking} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import VideoPlayer from 'react-native-video-player';

import ListActions from '../../store/ducks/list';
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
import Modal from '../../components/modal';

import arrowBack from '../../assets/left-chevron.png';
import example from '../../assets/example.png';
import youtube from '../../assets/youtube.png';

class About extends Component {
  state = {
    user: [],
    width: undefined,
    height: undefined,
    visible: false,
  };

  handleGoback = () => {
    const {navigation} = this.props;

    navigation.goBack();
  };

  onOpenModal = () => {
    this.setState({visible: true});
  };

  closeModal = () => {
    this.setState({visible: false});
  };

  async componentDidMount() {
    const {navigation, getListIdRequest} = this.props;
    const item = navigation.getParam('id');

    getListIdRequest(item);
    // const response = await api.get(`launches/${item}`);

    // this.setState({user: response.data});
    // const response = await api.get('launches/1');
    // this.setState({user: response.data});
  }

  render() {
    const {list, navigation} = this.props;
    const {visible} = this.state;
    const item = navigation.getParam('id');
    const i = item - 1;

    return (
      <Container>
        <TouchableOpacity activeOpacity={0.9} onPress={this.handleGoback}>
          <IconArrow source={arrowBack} />
        </TouchableOpacity>
        <Content>
          <View>
            <NameAbout>NAME: {list.data[i].mission_name}</NameAbout>
            <NameAbout>YEAR: {list.data[i].launch_year}</NameAbout>
          </View>
          <ImageLogo source={{uri: list.data[i].links.mission_patch}} />
        </Content>
        <Details>
          <DetailsTitle>Details</DetailsTitle>
          <DetailrText>{list.data[i].details}</DetailrText>
        </Details>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => Linking.openURL(list.data[i].links.article_link)}>
            <Article>ACESSE O ARTIGO</Article>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} onPress={this.onOpenModal}>
            <IconVideo source={youtube} />
          </TouchableOpacity>
          <Modal visible={visible} onRequestClose={() => {}}>
            <VideoPlayer
              endWithThumbmail
              thumbnail={{uri: list.data[i].links.video_link}}
              video={{uri: list.data[i].links.video_link}}
              autoplay
              // ref={r => (this.player = r)}
            />
            <TouchableOpacity onPress={this.closeModal}>
              <Text>Fechar</Text>
            </TouchableOpacity>
          </Modal>
        </View>
      </Container>
    );
  }
}

About.navigationOptions = {
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
)(About);
