import React, {Component} from 'react';
import {TouchableOpacity, View, Linking} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

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
  FooterButtons,
} from './style';

import arrowBack from '../../assets/left-chevron.png';
import video from '../../assets/youtube.png';

class About extends Component {
  handleGoback = () => {
    const {navigation} = this.props;

    navigation.goBack();
  };

  async componentDidMount() {
    const {navigation, getListIdRequest} = this.props;
    const item = navigation.getParam('id');

    getListIdRequest(item);
  }

  render() {
    const {list, navigation} = this.props;
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
        <FooterButtons>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => Linking.openURL(list.data[i].links.article_link)}>
            <Article>ACESSE O ARTIGO</Article>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => Linking.openURL(list.data[i].links.video_link)}>
            <IconVideo source={video} />
          </TouchableOpacity>
        </FooterButtons>
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
