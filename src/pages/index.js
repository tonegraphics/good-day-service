import React from "react"
import { Link } from "gatsby"
import { makeStyles } from '@material-ui/core';
import Layout from 'components/layout'
import SEO from "components/seo"
import { colors } from "libs/colors";

const useStyles = makeStyles(theme => ({
  title: {
    color: colors.black,
    backgroundColor: colors.white
  }
}));

export default function () {
  const classes = useStyles();

  return (
    <Layout>
      <SEO title="Home" />
      <h1 className={classes.title}>グッドデイサービスです。</h1>
      <Link to="/services">サービスについてはこちら</Link>
    </Layout>
  );
}
