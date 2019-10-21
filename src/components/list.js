import React from 'react';
import ListHeader from './list-header';
import ListItem from './list-item';

export default class List extends React.Component {
  renderItems() {
    const localProps = {};
    for (var p in this.props) {
      if (p === 'tasks') {
      } else {
        localProps[p] = this.props[p];
      }
    }
    return (
      this.props.tasks.map((task, index) =>
        <ListItem key={index} {...task} {...localProps} 
        />
      )
    )
  }

  render() {
  	return (
  		<table>
        <ListHeader />
        <tbody>
          {this.renderItems()}
        </tbody>
  		</table>
  	);
  }
}