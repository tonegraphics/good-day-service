import React from 'react'
import Table from 'components/common/Table'

const companyRows = [
  { title: '法人名', data: 'GOOD ONE 株式会社' },
  { title: '代表取締役', data: '吉田 一鷹' },
  { title: '住所', data: '〒820 - 0001\n福岡県飯塚市鯰田64番地1' },
  { title: 'TEL', data: '0948-29-4112' },
  { title: 'FAX', data: '0948-29-4144' },
]

export default () => <Table rows={companyRows} />
