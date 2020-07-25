import React, { Component, useState } from 'react';

const ApprovalCard = ({ children }) => {

  const [approve, setApprove] = useState(undefined)

  const userHasNotApproveOrReject = () => approve === undefined

  const approveContent = () => { setApprove(true) }

  const rejectContent = () => { setApprove(false) }

  const card = (
    <div className="ui card">
      <div className="content">{children}</div>
      <div className="extra content">
        <div className="ui two buttons">
          <button 
            onClick={()=> { approveContent() }}
            className="ui basic green button">Approve</button>
          <button 
            onClick={()=> { rejectContent() }}
            className="ui basic red button">Reject</button>
        </div>
      </div>
    </div>
  )
  
  if (userHasNotApproveOrReject()) {
    return card
  } else if (approve) {
    return children
  } else {
    return null
  }
}

export default ApprovalCard;