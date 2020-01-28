import React from 'react'

export default props => {
  const { classes, title, text, isHighlighted } = props

  return (
    <div>
      <p className={classes.routine}>{title}</p>
      <p className={classes.bodyTopic}>{text}</p>
    </div>
  )
}
