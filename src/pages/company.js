import React from 'react'
import Layout from 'components/layout'
import SEO from 'components/seo'
import Container from 'components/Container'
import H1 from 'components/H1'
import H2 from 'components/H2'
import Table from 'components/Table'
import { useMediaQuery } from '@material-ui/core'
import PicturesGrid from 'components/PicturesGrid'

const companyRows = [
  { title: '法人名', data: 'GOOD ONE 株式会社' },
  { title: '代表取締役', data: '吉田 一鷹' },
  { title: '住所', data: '〒820 - 0001\n福岡県飯塚市鯰田64番地1' },
  { title: 'TEL', data: '0948-29-4112' },
  { title: 'FAX', data: '0948-29-4144' },
]

const officeRows = [
  {
    title: '事業所名',
    data: '高齢者〜障がい者〜障がい児\n多世代通所型(共生型) グッドデイサービス',
  },
  { title: '住所', data: '〒820 - 0001\n福岡県飯塚市鯰田64番地1' },
  { title: 'TEL', data: '0948-29-4112' },
  { title: 'FAX', data: '0948-29-4144' },
]

const officeNumberRows = [
  { title: '地域密着型介護', data: '4071803482' },
  { title: '共生型生活介護', data: '4015501481' },
  { title: '共生型児童発達支援', data: '4055502969' },
  { title: '共生型放課後等デイサービス', data: '4055502969' },
  { title: '日中一時支援', data: '4065501480' },
]

const relatedOfficeRows = [
  { title: '特定相談支援', data: '4035500232' },
  { title: '障害児相談支援', data: '4075502932' },
]

export default () => {
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const filenames = [
    '41plus1.jpg',
    '41plus2.jpg',
    '41plus3.jpg',
    '41plus4.jpeg',
  ]
  return (
    <Layout page="/company">
      <SEO title="Company" />
      <Container>
        <H1>会社概要</H1>
        <Table rows={companyRows} />
      </Container>
      <Container>
        <H1>事業所概要</H1>
        <Table rows={officeRows} />
        <H2>事業所番号</H2>
        <Table rows={officeNumberRows} />
        <H2>関連事業所</H2>
        <p>
          障がい者や障がい児の計画作成等をする、特定・障がい児相談支援「
          <strong>プランニングッド</strong>」併設!!
        </p>
        <Table rows={relatedOfficeRows} />
        <H2>児童デイサービス「41プラス(仮)」建設中!</H2>
        <strong>5/1 オープン予定!</strong>
        <PicturesGrid {...{ isDesktop, filenames }} />
      </Container>
    </Layout>
  )
}
