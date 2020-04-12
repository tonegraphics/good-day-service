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
    <Layout page="/company" isTop={false}>
      <SEO title="Company" />
      <Container
        body={
          <div>
            <H1 title="会社概要" />
            <CompanyIntro />
          </div>
        }
      />
      <Container
        body={
          <div>
            <H1 title="事業所概要" />
            <OfficeIntro />
            <H2 title="事業所番号" />
            <OfficeNumbers />
            <H2 title="関連事業所" />
            <RelatedOfficeIntro />
            <H2 title="こどもデイ「41プラス」5/1(金)オープン！" />
            <NewBuildingIntro {...{ isDesktop }} />
          </div>
        }
      />
    </Layout>
  )
}
