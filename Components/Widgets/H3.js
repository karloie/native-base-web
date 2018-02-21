/* @flow */
'use strict';

import PropTypes from 'prop-types';
import React from 'react';
import Text from './Text';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';


export default class H3NB extends NativeBaseComponent {

    propTypes: {
        style : PropTypes.object
    }
    
    prepareRootProps() {

        var type = {
            color: this.getTheme().textColor,
            fontSize: this.getTheme().fontSizeH3
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
