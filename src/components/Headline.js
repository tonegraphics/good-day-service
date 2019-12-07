import React from 'react'
import { makeStyles } from '@material-ui/core'
import { colors } from 'libs/colors'

const useStyles = makeStyles(theme => ({
  title: {
    color: colors.brown,
    fontSize: '32px',
    borderBottom: `6px solid ${colors.red}`,
    marginBottom: '16px',
    display: 'inline-block',
    '&:first-letter': {
      fontSize: '48px',
    },
  },
}))

export default props => {
  const classes = useStyles()
  return (
    <div>
      <h1 className={classes.title}>{props.children}</h1>
    </div>
  )
}
