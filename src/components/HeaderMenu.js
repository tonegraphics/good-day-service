import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Link } from 'gatsby'
import { colors } from 'libs/colors'

const useStyles = makeStyles(theme => ({
  root: props =>
    props.isApeared
      ? {
          fontSize: 24,
          display: 'flex',
          justifyContent: 'space-between',
        }
      : {
          display: 'none',
        },
  link: {
    display: 'flex',
    justifyContent: 'center',
    fontWeight: 'bold',
    width: 120,
    marginLeft: 24,
    padding: 8,
  },
  current: {
    color: colors.yellow,
    backgroundColor: colors.brown,
    borderRadius: 10,
  },
  other: {
    color: colors.brown,
    backgroundColor: colors.yellow,
  },
}))

export default props => {
  const { currentPage, pageLinks, isApeared } = props

  const classes = useStyles({ isApeared })

  return (
    <div className={classes.root}>
      {pageLinks.map(link => (
        <Link
          to={link.to}
          className={
            link.to === currentPage.toString()
              ? classes.link + ' ' + classes.current
              : classes.link + ' ' + classes.other
          }
        >
          {link.title}
        </Link>
      ))}
    </div>
  )
}
