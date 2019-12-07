import React from "react"
import { Link } from "gatsby"
import Layout from 'components/Layout'
import SEO from "components/seo"

export default function () {
  return (
    <Layout page='/services'>
      <SEO title="Services" />
      <h1>サービスページです。</h1>
      <Link to="/access">アクセスについてはこちら</Link>
    </Layout>
  );
}
