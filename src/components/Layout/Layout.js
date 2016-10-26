/* @flow */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import s from './Layout.css';
import Navbar from '../Navbar';
import Notification from '../../containers/Notification';

function Layout({ children }) {
  return (
    <MuiThemeProvider>
      <div>
        <Navbar />
        {React.Children.only(children)}
        <Notification />
      </div>
    </MuiThemeProvider>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default withStyles(s)(Layout);
