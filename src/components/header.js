import { Link } from "gatsby";
import React from "react";
import { makeStyles } from '@material-ui/styles';
import Image from 'components/image';
import HeaderMenu from "components/HeaderMenu";
import { colors } from 'libs/colors';

const useStyles = makeStyles(theme => ({
  root: {
    height: 144,
    padding: 0,
    paddingLeft: 32,
    backgroundColor: colors.yellow,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    color: colors.brown,
    textDecoration: 'none'
  },
  logoText: {
    margin: '0 0 8px 0',
    fontSize: 24,
  },
  logoImage: {
    height: 64,
    width: 371.52,
    padding: 0,
    margin: 0,
  }
}));

export default props => {
  const {
    pageLinks,
    currentPage
  } = props;
  const classes = useStyles();
  return (
    <header className={classes.root}>
      <Link to='/' className={classes.logo}>
        <p className={classes.logoText}>
          高齢者・障がい者・障がい児多世代通所型(共生型)
        </p>
        <div className={classes.logoImage}>
          <Image filename='logo.png'/>
        </div>
      </Link>
      <HeaderMenu
        currentPage={currentPage}
        pageLinks={pageLinks}
      />
    </header>
  );
}
