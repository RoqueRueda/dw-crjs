import React, { Component } from 'react';

class ApprovalCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isApprove: undefined
    }
  }

  userHasNotApproveOrReject = () => {
    return this.state.isApprove === undefined
  }

  approveContent = () => {
    this.setState({
      isApprove: true
    });
  }

  rejectContent = () => {
    this.setState({
      isApprove: false
    });
  }

  renderCard = () => {
    return (
      <div className="ui card">
        <div className="content">{this.props.children}</div>
        <div className="extra content">
          <div className="ui two buttons">
            <button 
              onClick={()=> { this.approveContent() }}
              className="ui basic green button">Approve</button>
            <button 
              onClick={()=> { this.rejectContent() }}
              className="ui basic red button">Reject</button>
          </div>
        </div>
      </div>
    );
  }

  renderOnlyContent = () => {
    if (this.state.isApprove) {
      return this.props.children
    } else {
      return null
    }
  }

  render() {
    return (
      this.userHasNotApproveOrReject() ? 
      this.renderCard() : this.renderOnlyContent()
    );
  }

}

export default ApprovalCard;