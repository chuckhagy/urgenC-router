import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

import AddPageComponent from './components/AddPageComponent'
import ListPageComponent from './components/ListPageComponent'
import DetailsPageComponent from './components/DetailsPageComponent'

import Red from './components/Red'
import Blue from './components/Blue'
import Green from './components/Green'
import Yellow from './components/Yellow'
import {
  Scene,
  Router,
  Actions,
  Reducer,
  ActionConst,
  Overlay,
  Tabs,
  Modal,
  Drawer,
  Stack,
  Lightbox,

} from 'react-native-router-flux';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key='tabbar' tabs={true} tabBarStyle={{ backgroundColor: '#FFFFFF' }}>
            <Scene key="list" component={ListPageComponent} title="List PAGE" initial />
            <Scene key="red" component={Red} title="RED PAGE" />
            <Scene key="green" component={Green} title="GREEN PAGE" />
            <Scene key="yellow" component={Yellow} title="YELLOW PAGE" />
          </Scene>
          <Scene key="details" component={DetailsPageComponent} title="Details" />
        </Stack>
      </Router>
    );
  }
}
