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
    const { children, date, icon, iconClassName } = this.props
    const { visible } = this.state

    return (
      <div
        className={classNames('timeline-element', {
          'timeline-element--no-children': children === '',
        })}
      >
        <VisibilitySensor onChange={this.onVisibilitySensorChange}>
          <>
            <div
              className={classNames(
                `timeline-element-icon ${visible ? 'bounce-in' : 'is-hidden'}`,
                iconClassName
              )}
            >
              {icon}
            </div>

            <div
              className={`timeline-element-bubble ${
                visible ? 'bounce-in' : 'is-hidden'
              }`}
            >
              <div className="timeline-element-bubble-content">
                <div className="timeline-element-date">{date}</div>

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
  icon: null,
  date: '',
  children: '',
}

export { TimelineElement }
