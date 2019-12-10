import React from 'react'
import { makeStyles, useMediaQuery } from '@material-ui/core'
import { fonts } from 'libs/fonts'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    whiteSpace: 'pre-line',
    marginBottom: 8,
  },
  cell: {
    margin: '0 0 8px',
    padding: 0,
    border: 0,
    fontSize: props => fonts(props.matches).table,
    fontFamily: 'inherit',
  },
  title: {
    fontWeight: 'bold',
    width: '35%',
  },
  data: {
    marginLeft: '16px',
    width: '65%',
  },
}))

export default props => {
  const { rows } = props
  const matches = useMediaQuery('(min-width: 1024px)')
  const classes = useStyles({ matches })

  return (
    <div className={classes.root}>
      <table className={classes.table}>
        {rows.map(row => (
          <tr key={row.title} className={classes.row}>
            <th scope="row" className={classes.cell + ' ' + classes.title}>
              {row.title}
            </th>
            <td className={classes.cell + ' ' + classes.data}>{row.data}</td>
          </tr>
        ))}
      </table>
    </div>
  )
}
