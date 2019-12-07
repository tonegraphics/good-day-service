import React from "react"
import { Link } from "gatsby"
import { makeStyles } from '@material-ui/core';
import Layout from 'components/layout'
import SEO from "components/seo"

const useStyles = makeStyles(theme => ({
  title: {
    color: 'rebeccapurple',
  }
}));

export default function () {
  const classes = useStyles();

  return (
    <Layout>
      <SEO title="Home" />
      <h1 className={classes.title}>グッドデイサービスです。</h1>
      <Link to="/ServicesPage">サービスについてはこちら</Link>
    </Layout>
  );
}
