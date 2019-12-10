import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Image from 'components/Image'
import H2 from 'components/H2'
import { Grid } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: 40,
  },
}))

export default props => {
  const { title, imageSrc, isWide, children } = props
  const classes = useStyles()
  const itemWidth = isWide ? 6 : 12

  return (
    <div className={classes.root}>
      <H2>{title}</H2>
      <Grid container spacing={2} direction={isWide ? 'row-reverse' : 'row'}>
        <Grid item xs={itemWidth}>
          {children}
        </Grid>
        <Grid item xs={itemWidth}>
          <Image filename={imageSrc} />
        </Grid>
      </Grid>
    </div>
  )
}
