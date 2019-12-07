import { Link } from "gatsby";
import React from "react";
import { makeStyles } from '@material-ui/styles';
import Image from 'components/image';
import { colors } from 'libs/colors';

const useStyles = makeStyles(theme => ({
  root: {
    height: 144,
    padding: '0 16px 0 32px',
    backgroundColor: colors.yellow,
    color: colors.brown
  },
  logo: {
    textDecoration: 'none',
    padding: '16px 0',
    margin: 0
  },
  logoText: {
    margin: '0 0 8px 0',
    fontSize: 24,
  },
  logoImage: {
    height: 64,
    width: 371.52,
    margin: 0,
  }
}));

export default ({ siteTitle }) => {
  const classes = useStyles();
  return (
    <header className={classes.root}>
      <div className={classes.logo}>
        <p className={classes.logoText}>高齢者・障がい者・障がい児多世代通所型(共生型)</p>
        <Link to='/'>
          <div className={classes.logoImage}>
            <Image filename='logo.png' />
          </div>
        </Link>
      </div>
    </header>
  );
}
