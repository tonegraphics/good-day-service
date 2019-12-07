import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'gatsby';
import { colors } from 'libs/colors';

const useStyles = makeStyles(theme => ({
  root: {
    height: 76,
    paddingRight: 64,
    fontSize: 24,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  link: {
    display: 'flex',
    justifyContent: 'center',
    fontWeight: 'bold',
    textDecoration: 'none',
    width: 120,
    marginLeft: 32,
    padding: 8
  },
  current: {
    color: colors.yellow,
    backgroundColor: colors.brown,
    borderRadius: 10
  },
  other: {
    color: colors.brown,
    backgroundColor: colors.yellow
  }
}));

export default props => {
  const {
    currentPage,
    pageLinks
  } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {pageLinks.map(link =>
        <Link
          to={link.to}
          className={
            link.to === currentPage.toString()
              ? classes.link + ' ' + classes.current
              : classes.link + ' ' + classes.other
          }
        >
          {link.title}
        </Link>
      )}
    </div>
  );
}