import React from 'react'

export default props => {
  const { classes, title, text, isHighlighted } = props

  return (
    <div>
      <p
        className={
          classes.body +
          ' ' +
          (isHighlighted
            ? classes.highlighter
            : classes.bold + ' ' + classes.brown)
        }
      >
        {title}
      </p>
      <p className={classes.small}>{text}</p>
    </div>
  )
}