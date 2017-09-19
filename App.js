// export default from './storybook';
import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Provider } from "react-redux";
import {
  Scene,
  Router,
  Actions,
  Tabs,
  Modal,
  Stack,
  Lightbox
} from "react-native-router-flux";
import listPageContainer from "./redux/containers/listPageContainer";
import addPageContainer from "./redux/containers/addPageContainer";
import DetailsPageComponent from "./components/DetailsPageComponent";
import Red from "./components/Red";
import Blue from "./components/Blue";
import Green from "./components/Green";
import Yellow from "./components/Yellow";

import setupStore from "./redux/setupStore";
const store = setupStore();

class TabIcon extends Component {
  render() {
    var color = this.props.selected ? "#00f240" : "#ffffff";
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          alignSelf: "center",
          justifyContent: "center",
          marginTop: 15
        }}
      >
        <Icon
          style={{ color: color }}
          name={this.props.iconName || "circle"}
          size={18}
        />
        <Text style={{ color: color, fontSize: 12 }}>
          {this.props.title}
        </Text>
      </View>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Stack key="root">
            <Scene
              key="tabbar"
              tabs={true}
              tabBarStyle={{ backgroundColor: "#c90000" }}
            >
              <Scene
                key="list"
                hideNavBar
                headerMode="float"
                component={listPageContainer}
                title="Goals"
                tabBarLabel=" "
                iconName="home"
                icon={TabIcon}
                initial
              />
              <Scene
                key="add"
                hideNavBar
                component={addPageContainer}
                title="Add Item"
                tabBarLabel=" "
                iconName="newspaper-o"
                icon={TabIcon}
              />
              <Scene
                key="green"
                component={Green}
                title="Stats"
                tabBarLabel=" "
                iconName="line-chart"
                icon={TabIcon}
              />
              <Scene
                key="yellow"
                component={Yellow}
                title="History"
                tabBarLabel=" "
                iconName="book"
                icon={TabIcon}
              />
            </Scene>
            <Scene
              key="details"
              component={DetailsPageComponent}
              title="Details"
            />
          </Stack>
        </Router>
      </Provider>
    );
  }
}

// componentDidMount() {
//   getItems().then(items => {
//     newItems = items.sort(function(a, b) {
//       return b.priority - a.priority;
//     });
//     this.setState({
//       items: newItems
//     });
//     Actions.pop({ refresh: { items: this.state.items } });
//   });
// }
