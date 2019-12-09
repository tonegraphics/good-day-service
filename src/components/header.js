import { Link } from 'gatsby'
import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { useMediaQuery } from '@material-ui/core'
import Image from 'components/Image'
import HeaderMenu from 'components/HeaderMenu'
import { colors } from 'libs/colors'
import { fonts } from 'libs/fonts'
import Logo from 'assets/logo.svg'
import Identity from 'components/Identity'

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: 32,
  },
  header: {
    padding: props => (props.matches ? '8px 32px 0' : '4px 16px 0'),
    backgroundColor: colors.yellow,
    display: 'flex',
    flexWrap: 'wrap',
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
    fill: colors.brown,
    height: props.matches ? 56 : 32,
    marginBottom: 16,
    transition: 'fill 0.3s ease-in-out',
    '&:hover': {
      fill: colors.red,
    },
  }),
  logoText: props => ({
    fontSize: fonts(props.matches).headerText,
    margin: '0 0 0 4px',
    lineHeight: '1rem',
  }),
  hero: {
    width: '100vw',
    position: 'relative',
  },
}))

export default props => {
  const { pageLinks, currentPage } = props
  const matches = useMediaQuery('(min-width: 1024px)')
  const classes = useStyles({ matches })

  return (
    <div className={classes.root}>
      <header className={classes.header} id="back-to-top-anchor">
        <Link to="/" className={classes.logoWrapper}>
          <p className={classes.logoText}>
            高齢者・障がい者・障がい児多世代通所型(共生型)
          </p>
          <Logo className={classes.logo} />
        </Link>
        <HeaderMenu
          currentPage={currentPage}
          pageLinks={pageLinks}
          matches={matches}
        />
      </header>
      {currentPage.toString() === '/' && (
        <div className={classes.hero}>
          <Identity />
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
