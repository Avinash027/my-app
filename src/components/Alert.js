import React, { useState } from 'react';

export default function Alert(props) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
      {props.Alert}
      <button
        type="button"
        className="close"
        onClick={() => setVisible(false)}
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
}
