import React from "react"
import { Link } from "gatsby"
import Layout from 'components/layout'
import SEO from "components/seo"

export default () => {
  return (
    <Layout page='/company'>
      <SEO title="Company"/>
      <h1>会社概要です。</h1>
      <Link to="/">トップへ</Link>
    </Layout>
  );
}
