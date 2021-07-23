import React from 'react'
import { ContainerProp } from 'interface'
import clsx from 'clsx'

const Container = ({ children, className }: ContainerProp) => {
  const classes = clsx(className, 'container px-4 mx-auto lg:max-w-5xl')
  return <div className={classes}>{children}</div>
}

export default Container
