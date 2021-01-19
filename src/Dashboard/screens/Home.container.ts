import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import HomeScreen from './Home';
import DashboardActions from '../actions';

const mapStateToProps = (state) => ({
    routeNames: state.dashboard.routeNames,
    routes: state.dashboard.routes,
})

const mapDispatchToProps = (dispatch) => ({
    chooseRoute: (data) => dispatch(DashboardActions.chooseRoute(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
