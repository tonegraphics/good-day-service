import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Link } from 'gatsby'
import { colors } from 'libs/colors'
import { fonts } from 'libs/fonts'

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: props => (props.matches ? 16 : 8),
    width: props => (props.matches ? 488 : 368),
    display: 'flex',
    justifyContent: 'space-between',
  },
  link: {
    fontWeight: 'bold',
    fontSize: props => fonts(props.matches).body,
    padding: '8px',
  },
  current: {
    color: colors.brown,
    backgroundColor: colors.yellow,
    borderRadius: 10,
  },
  other: {
    color: colors.yellow,
    backgroundColor: colors.brown,
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      color: colors.red,
    },
  },
}))

export default props => {
  const { currentPage, pageLinks, matches } = props

  const classes = useStyles({ matches })

  return (
    <div className={classes.root}>
      {pageLinks.map(link => (
        <Link
          key={link.to}
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
