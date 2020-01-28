import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Grid } from '@material-ui/core'
import Image from 'components/Image'
import H2 from 'components/common/H2'

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: props => (props.isSub ? 24 : 56),
  },
}))

export default props => {
  const { title, imageSrc, isWide, isSub, children } = props
  const classes = useStyles({ isSub })
  const itemWidth = isSub || !isWide ? 12 : 6

  return (
    <div className={classes.root}>
      {title && <H2>{title}</H2>}
      {/* spacing={1} が 8px に相当. */}
      {/* makeStyles に自分で定義した theme の内容で spacing のサイズを調整できるっぽい */}
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
