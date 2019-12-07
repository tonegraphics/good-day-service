import React from "react"
import { Link } from "gatsby"
import Layout from 'components/layout'
import SEO from "components/seo"

export default function () {
  return (
    <Layout page='/access'>
      <SEO title="Access" />
      <h1>アクセスページです。</h1>
      <Link to="/company">会社概要へ</Link>
    </Layout>
  );
}
