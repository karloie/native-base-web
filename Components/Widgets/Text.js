/* @flow */
'use strict';

import PropTypes from 'prop-types';
import React from 'react';
import {Text} from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';


export default class TextNB extends NativeBaseComponent {

	propTypes: {
        style : PropTypes.object
    }

	prepareRootProps() {

		var type = {
			color: this.getContextForegroundColor(),
			fontSize: this.getTheme().fontSizeBase,
			lineHeight: this.getTheme().lineHeight,
			fontFamily: this.getTheme().fontFamily
		}

		var defaultProps = {
			style: type
		}

		return computeProps(this.props, defaultProps);

	}
	render() {
		return(
			<Text {...this.prepareRootProps()}>{this.props.children}</Text>
		);
	}

}
