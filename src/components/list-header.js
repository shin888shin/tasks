import React from 'react';

export default class ListHeader extends React.Component {
  render() {
  	return (  		  
      <thead>
        <tr>
          <th>Task</th>
          <th>Actions</th>
        </tr>
      </thead>
  	);
  }
}