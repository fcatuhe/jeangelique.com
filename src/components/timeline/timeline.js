import React from 'react'
import classNames from 'classnames'

const Timeline = ({ animate, children, className, layout }) => (
  <div
    className={classNames(className, 'timeline', {
      'timeline--animate': animate,
      'timeline--two-columns': layout === '2-columns',
      'timeline--one-column': layout === '1-column',
    })}
  >
    {children}
  </div>
)

Timeline.defaultProps = {
  animate: true,
  className: '',
  layout: '2-columns',
}

export { Timeline }
