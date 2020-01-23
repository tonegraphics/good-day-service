import React from 'react'
import Table from 'components/common/Table'

const officeRows = [
  {
    title: '事業所名',
    data: '高齢者〜障がい者〜障がい児\n多世代通所型(共生型) グッドデイサービス',
  },
  { title: '住所', data: '〒820 - 0001\n福岡県飯塚市鯰田64番地1' },
  { title: 'TEL', data: '0948-29-4112' },
  { title: 'FAX', data: '0948-29-4144' },
]

export default () => <Table rows={officeRows} />
