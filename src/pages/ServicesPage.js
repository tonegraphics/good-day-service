import React from "react"
import { Link } from "gatsby"
import Layout from 'components/layout'
import SEO from "components/seo"

export default function () {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>サービスページです。</h1>
      <Link to="/AccessPage">Go to page 2</Link>
    </Layout>
  );
}
