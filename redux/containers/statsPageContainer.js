import { connect } from "react-redux";
import { compose, lifecycle } from "recompose";
import StatsPageComponent from "../../components/StatsPageComponent";
import getItemsProcess from "../thunks/getItemsProcess";

function mapStateToProps(state) {
  return { ...state };
}

function mapDispatchToProps(dispatch) {
  return {
    onDidMount: () => dispatch(getItemsProcess())
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const withLifecycle = lifecycle({
  componentDidMount() {
    this.props.onDidMount();
  }
});

export default compose(connectToStore, withLifecycle)(StatsPageComponent);
