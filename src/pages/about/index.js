import React, {Component} from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Linking,
  Image,
  WebView,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Video from 'react-native-video';

import ListActions from '../../store/ducks/list';
import {
  Container,
  IconArrow,
  Content,
  NameAbout,
  ImageLogo,
  Details,
  DetailrText,
  DetailsTitle,
  Article,
  IconVideo,
} from './style';
import Modal from '../../components/modal';

import arrowBack from '../../assets/left-chevron.png';
import remove from '../../assets/remove.png';
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
  }

  renderWebView = () => {
    return <WebView source={{uri: ''}} />;
  };

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
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => Linking.openURL(list.data[i].links.video_link)}>
            <IconVideo source={youtube} />
          </TouchableOpacity>
          <Modal visible={visible} onRequestClose={() => {}}>
            <TouchableOpacity
              onPress={this.closeModal}
              style={{marginLeft: 340, marginBottom: 20}}>
              <Image source={remove} style={{width: 15, height: 15}} />
            </TouchableOpacity>
            <Video
              source={{uri: list.data[i].links.video_link}}
              style={{
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                width: 200,
                height: 200,
              }}
              // resizeMode={'cover'}
              repeat={true}
            />
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
