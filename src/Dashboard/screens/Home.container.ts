import { connect } from 'react-redux';
import HomeScreen from './Home';
import DashboardActions from '../actions';

const mapStateToProps = state => ({
    routeNames: state.dashboard.routeNames,
    routes: state.dashboard.routes,
    routeImages: state.dashboard.routeImages,
});

const mapDispatchToProps = dispatch => ({
    chooseRoute: data => dispatch(DashboardActions.chooseRoute(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
