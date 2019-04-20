import React, { Component } from 'react'
import classNames from 'classnames'
import VisibilitySensor from 'react-visibility-sensor'

class TimelineElement extends Component {
  state = { visible: false }

  onVisibilitySensorChange = isVisible => {
    if (isVisible) {
      this.setState({ visible: true })
    }
  }

  render() {
    const {
      id,
      children,
      icon,
      iconStyle,
      iconOnClick,
      date,
      position,
      style,
      className,
      visibilitySensorProps,
    } = this.props

    const { visible } = this.state

    return (
      <div
        id={id}
        className={classNames(className, 'timeline-element', {
          'timeline-element--left': position === 'left',
          'timeline-element--right': position === 'right',
          'timeline-element--no-children': children === '',
        })}
        style={style}
      >
        <VisibilitySensor
          {...visibilitySensorProps}
          onChange={this.onVisibilitySensorChange}
        >
          <>
            <span // eslint-disable-line jsx-a11y/no-static-element-interactions
              style={iconStyle}
              onClick={iconOnClick}
              className={`timeline-element-icon ${
                visible ? 'bounce-in' : 'is-hidden'
              }`}
            >
              {icon}
            </span>
            <div
              className={`timeline-element-content ${
                visible ? 'bounce-in' : 'is-hidden'
              }`}
            >
              <div className="timeline-element-content-xxx">
                <span className="timeline-element-date">{date}</span>
                {children}
              </div>
            </div>
          </>
        </VisibilitySensor>
      </div>
    )
  }
}

TimelineElement.defaultProps = {
  id: '',
  children: '',
  className: '',
  icon: null,
  iconStyle: null,
  style: null,
  date: '',
  position: '',
  iconOnClick: null,
  visibilitySensorProps: { partialVisibility: true, offset: { bottom: 80 } },
}

export { TimelineElement }
