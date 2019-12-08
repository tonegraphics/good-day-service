import { Link } from "gatsby";
import React from "react";
import { makeStyles } from '@material-ui/styles';
import { useMediaQuery } from '@material-ui/core';
import Image from 'components/Image';
import HeaderMenu from "components/HeaderMenu";
import { colors } from 'libs/colors';

const useStyles = makeStyles(theme => ({
  header: {
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
  logoText: props => props.matches ? {
    margin: '0 0 8px 0',
    fontSize: 24,
  } : {
    margin: '0 0 4px 0',
    fontSize: 14,
  },
  hero: {
    width: '100vw',
    marginBottom: 160
  }
}));

export default props => {
  const {
    pageLinks,
    currentPage
  } = props;
  const matches = useMediaQuery('(min-width: 1024px)');
  const classes = useStyles({ matches });

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <Link to='/' className={classes.logo}>
          <p className={classes.logoText}>
            高齢者・障がい者・障がい児多世代通所型(共生型)
          </p>
          <Image
            filename='logo.png'
            style={matches ? {
              height: 64,
              width: 371.5
            } : {
              height: 40,
              width: 232.2
            }}
          />
        </Link>
        <HeaderMenu
          currentPage={currentPage}
          pageLinks={pageLinks}
          isApeared={matches}
        />
      </header>
      {currentPage.toString() === '/' &&
        <div className={classes.hero}>
          <Image
            filename='top_image.jpg'
            style={{
              height: matches ? '80vh' : '40vh',
              width: '100vw'
            }}
          />
        </div>
      }
    </div>
  );
}
