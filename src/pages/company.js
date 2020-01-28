import React from 'react'
import Layout from 'components/layout'
import SEO from 'components/seo'
import Container from 'components/layouts/Container'
import H1 from 'components/common/H1'
import H2 from 'components/common/H2'
import { useMediaQuery } from '@material-ui/core'
import CompanyIntro from 'components/company/CompanyIntro'
import OfficeIntro from 'components/company/OfficeIntro'
import OfficeNumbers from 'components/company/OfficeNumbers'
import RelatedOfficeIntro from 'components/company/RelatedOfficeIntro'
import NewBuildingIntro from 'components/company/NewBuildingIntro'

export default () => {
  const isDesktop = useMediaQuery('(min-width: 1080px)')

  return (
    <Layout page="/company">
      <SEO title="Company" />
      <Container>
        <H1>会社概要</H1>
        <CompanyIntro />
      </Container>
      <Container>
        <H1>事業所概要</H1>
        <OfficeIntro />
        <H2>事業所番号</H2>
        <OfficeNumbers />
        <H2>関連事業所</H2>
        <RelatedOfficeIntro />
        <H2>こどもデイ「41プラス(仮)」建設中!</H2>
        <NewBuildingIntro {...{ isDesktop }} />
      </Container>
    </Layout>
  )
}
