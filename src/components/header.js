import { Link } from 'gatsby'
import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { useMediaQuery } from '@material-ui/core'
import Image from 'components/Image'
import HeaderMenu from 'components/HeaderMenu'
import { colors } from 'libs/colors'
import { fonts } from 'libs/fonts'
import Logo from 'assets/logo.svg'

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: 32,
  },
  header: {
    height: props => (props.matches ? 108 : 66),
    padding: props => (props.matches ? '0 32px 16px' : '0 16px 12px'),
    backgroundColor: colors.yellow,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  logoWrapper: {
    color: colors.brown,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  logo: props => ({
    height: props.matches ? 56 : 32,
  }),
  logoText: props => ({
    fontSize: fonts(props.matches).headerText,
    marginBottom: 0,
    lineHeight: '1.25rem',
  }),
  hero: {
    width: '100vw',
  },
}))

export default props => {
  const { pageLinks, currentPage } = props
  const matches = useMediaQuery('(min-width: 1024px)')
  const classes = useStyles({ matches })

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <Link to="/" className={classes.logoWrapper}>
          <p className={classes.logoText}>
            高齢者・障がい者・障がい児多世代通所型(共生型)
          </p>
          <Logo className={classes.logo} />
        </Link>
        <HeaderMenu
          currentPage={currentPage}
          pageLinks={pageLinks}
          isApeared={matches}
        />
      </header>
      {currentPage.toString() === '/' && (
        <div className={classes.hero}>
          <Image
            filename="top_image.jpg"
            style={{
              height: matches ? '80vh' : '40vh',
              width: '100vw',
            }}
          />
        </div>
      )}
    </div>
  )
}
