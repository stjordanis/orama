
import React from 'react'

import DropCard from './DropCard'

const styles = {
  container: {
    minWidth: 200,
    maxWidth: 200,
  },
  item: {
    fontSize: 15,
    margin: 5,
    padding: 5,
  },
  item2: {
    background: 'hsl(0, 0%, 90%)',
    fontSize: 15,
    margin: 5,
    padding: 5,
  },
}

export default React.createClass({
  displayName: 'DropUI',
  propTypes: {
  },
  getDefaultProps() {
    return {
    }
  },
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.item}>x</div>
        <DropCard
            text={this.props.xProp}
            setText={this.props.setXProp}
            />
        <div style={styles.item}>y</div>
        <DropCard
            text={this.props.yProp}
            setText={this.props.setYProp}
            />
      </div>
    )
  },
})