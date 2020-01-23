import React from 'react'
import Table from 'components/common/Table'

const officeNumberRows = [
  { title: '地域密着型介護', data: '4071803482' },
  { title: '共生型生活介護', data: '4015501481' },
  { title: '共生型児童発達支援', data: '4055502969' },
  { title: '共生型放課後等デイサービス', data: '4055502969' },
  { title: '日中一時支援', data: '4065501480' },
]

export default () => <Table rows={officeNumberRows} />
