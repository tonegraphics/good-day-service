import React from 'react'
import Table from 'components/common/Table'

const relatedOfficeRows = [
  { title: '特定相談支援', data: '4035500232' },
  { title: '障害児相談支援', data: '4075502932' },
]

export default () => (
  <div>
    <p>
      障がい者や障がい児の計画作成等をする、特定・障がい児相談支援「
      <strong>プランニングッド</strong>」併設!!
    </p>
    <Table rows={relatedOfficeRows} />
  </div>
)
