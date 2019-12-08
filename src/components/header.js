import { Link } from 'gatsby'
import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { useMediaQuery } from '@material-ui/core'
import Image from 'components/Image'
import HeaderMenu from 'components/HeaderMenu'
import { colors } from 'libs/colors'
import { fonts } from 'libs/fonts'

const useStyles = makeStyles(theme => ({
  header: {
    height: props => (props.matches ? 108 : 90),
    padding: '0 0 16px',
    paddingLeft: props => (props.matches ? 32 : 16),
    backgroundColor: colors.yellow,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  logo: {
    color: colors.brown,
  },
  logoText: props => ({
    fontSize: fonts(props.matches).headerText,
    margin: 0,
    textAlign: 'center',
  }),
  hero: {
    width: '100vw',
    marginBottom: 32,
  },
}))

export default props => {
  const { pageLinks, currentPage } = props
  const matches = useMediaQuery('(min-width: 1024px)')
  const classes = useStyles({ matches })

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <Link to="/" className={classes.logo}>
          <p className={classes.logoText}>
            高齢者・障がい者・障がい児多世代通所型(共生型)
          </p>
          <Image
            filename="logo.png"
            style={
              matches
                ? {
                    height: 56,
                    width: 325.08,
                  }
                : {
                    height: 40,
                    width: 232.2,
                  }
            }
          />
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
