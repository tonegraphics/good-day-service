import React from "react"
import { Link } from "gatsby"
import Layout from 'components/layout'
import SEO from "components/seo"

export default function () {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>アクセスページです。</h1>
      <Link to="/CompanyPage">会社概要へ</Link>
    </Layout>
  );
}
