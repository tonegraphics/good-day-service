import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { useMediaQuery } from '@material-ui/core'
import { colors } from 'libs/colors'

const useStyles = makeStyles(theme => ({
  root: {
    margin: '0 16px 40px',
    padding: props => (props.matches ? '32px 32px 40px' : '16px 8px 40px'),
    backgroundColor: colors.white,
    borderRadius: 10,
    maxWidth: 1048,
  },
}))

export default props => {
  const { body } = props
  const matches = useMediaQuery('(min-width: 1080px)')
  const classes = useStyles({ matches })
<<<<<<< HEAD
  return (
    <div className={classes.root}>
      <main>{props.children}</main>
    </div>
  )
=======
  return <div className={classes.root}>{body}</div>
>>>>>>> 21b34fef6d800b838f1b25b26f7f09b86ae77a94
}
