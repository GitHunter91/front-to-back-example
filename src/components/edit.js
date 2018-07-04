import React from 'react';

const editable = (props) => {
  return (
    <div className='editable'>
      <input type="text" onClick={props.editable}/>
    </div>
  );
};

export default editable;
