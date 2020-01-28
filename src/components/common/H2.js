import React from 'react'
import { makeStyles } from '@material-ui/core'
import { colors } from 'libs/colors'
import { fonts } from 'libs/fonts'
import { useMediaQuery } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  title: props => ({
    color: colors.brown,
    fontSize: fonts(props.matches).headline,
    borderBottom: `4px solid ${colors.red}`,
    marginBottom: 16,
    display: 'inline-block',
  }),
}))

export default props => {
  const matches = useMediaQuery('(min-width: 1080px)')
  const classes = useStyles({ matches })
  const { title } = props
  return (
    <div>
      <h2 className={classes.title}>{title}</h2>
    </div>
  )
}
