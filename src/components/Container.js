import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { useMediaQuery } from '@material-ui/core'
import { colors } from 'libs/colors'

const useStyles = makeStyles(theme => ({
  root: {
    margin: props => (props.matches ? 16 : 8),
    padding: props => (props.matches ? '16px 16px 40px' : '16px 8px 40px'),
    backgroundColor: colors.white,
    borderRadius: 10,
  },
}))

export default props => {
  const matches = useMediaQuery('(min-width: 1024px)')
  const classes = useStyles({ matches })
  return <div className={classes.root}>{props.children}</div>
}
