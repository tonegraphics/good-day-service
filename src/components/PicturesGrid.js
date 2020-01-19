import React from 'react'
import Image from 'components/Image'
import { Grid } from '@material-ui/core'

export default props => {
  const { isDesktop, filenames } = props
  const imgWidth = isDesktop ? 6 : 12

  return (
    <Grid container spacing={4}>
      {filenames.map((f, i) => (
        <Grid item xs={imgWidth} key={i}>
          <Image filename={f} />
        </Grid>
      ))}
    </Grid>
  )
}
