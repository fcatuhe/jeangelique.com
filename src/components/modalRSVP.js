import React from 'react'
import { Modal } from 'reactstrap'

class ModalRSVP extends React.Component {
  state = { modal: false }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }))
  }

  render() {
    return (
      <div>
        <button className="btn btn-block btn-primary" onClick={this.toggle}>
          Please RSVP Now
          <br />
          Jetz Hier Anmelden
        </button>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          unmountOnClose="false"
          className="modal-lg"
        >
          <div className="modal-body">{this.props.children}</div>
        </Modal>
      </div>
    )
  }
}

export default ModalRSVP
