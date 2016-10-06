import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import s from './Layout.css';
import Navbar from '../Navbar';
// import Header from '../Header'; // TODO: remove this component's files
// import Feedback from '../Feedback'; // TODO: remove this component's files
// import Footer from '../Footer'; // TODO: remove this component's files

function Layout({ children }) {
  return (
    <MuiThemeProvider>
      <div>
        <Navbar />
        {React.Children.only(children)}
      </div>
    </MuiThemeProvider>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default withStyles(s)(Layout);
