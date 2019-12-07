import { Link } from "gatsby";
import React from "react";
import { makeStyles } from '@material-ui/styles';
import Image from 'components/image';
import { colors } from 'libs/colors';

const useStyles = makeStyles(theme => ({
  root: {
    border: '1px solid'
  }
}));

export default function ({ siteTitle }) {
  const classes = useStyles();
  return (
    <header
      style={{
        background: `${colors.yellow}`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <Link
          to="/"
          style={{
            color: `${colors.brown}`,
            textDecoration: `none`,
          }}
        >
          <Image filename='logo.png' />
        </Link>
      </div>
    </header>
  );
}
