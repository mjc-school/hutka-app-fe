import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Map from './Map';
import DashboardActions from '../actions';

const mapStateToProps = (state) => ({
    choosed: state.dashboard.choosed,
})
export default connect(mapStateToProps)(Map)
