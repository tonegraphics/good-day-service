import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Image from 'components/Image'
import H2 from 'components/H2'
import { Grid } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {},
  image: {},
  text: {},
}))

export default props => {
  const { title, imageSrc, children } = props
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <H2>{title}</H2>
      <Grid container spacing={2} className={classes.content}>
        <Grid item xs={6} className={classes.image}>
          <Image filename={imageSrc} />
        </Grid>
        <Grid item xs={6} className={classes.text}>
          {children}
        </Grid>
      </Grid>
    </div>
  )
}
