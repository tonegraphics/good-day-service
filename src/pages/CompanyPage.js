import React from "react"
import { Link } from "gatsby"

import Layout from 'components/layout'
import SEO from "components/seo"

export default function () {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>会社概要です。</h1>
      <Link to="/">トップへ</Link>
    </Layout>
  );
}
