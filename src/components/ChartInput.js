
import React, {findDOMNode, PropTypes} from 'react'
import R from 'ramda'

import utils from '../utils/utils'

const styles = {
  tooltip: {
    background: 'hsl(0, 0%, 45%)',
    // border: '2px solid gray',
    color: 'hsl(0, 0%, 100%)',
    fontFamily: 'sans-serif',
    margin: 13,
    maxWidth: 300,
    padding: '9px 10px',
    pointerEvents: 'none',
    position: 'fixed',
  },
  canvas: {
    display: 'block',
    position: 'absolute',
    cursor: 'pointer',
  },
}

export default React.createClass({
  displayName: 'ChartInput',
  propTypes: {
    renderData: PropTypes.array,
    size: PropTypes.object,
  },
  getDefaultProps() {
    return {
      renderData: [],
    }
  },
  getInitialState() {
    return {
      tooltipShow: false,
      tooltipTop: 0,
      tooltipLeft: 0,
    }
  },
  componentDidMount() {
    this.renderCanvas()
  },
  componentDidUpdate() {
    this.renderCanvas()
  },
  onMouseMove(evt) {
    const canvasNode = findDOMNode(this.refs.canvas)
    const canvasRect = canvasNode.getBoundingClientRect()
    const ctx = canvasNode.getContext('2d')
    const mouse = {
      x: evt.clientX - canvasRect.left,
      y: evt.clientY - canvasRect.top,
    }
    utils.canvas.clearRect(ctx, this.props.size)
    ctx.lineWidth = 20
    const pathCheck = R.any(d => {
      if (ctx.isPointInPath(d.path2D, mouse.x, mouse.y)) {
        this.setState({
          hoverData: d,
          mouse: {x: evt.clientX, y: evt.clientY},
        })
        return true
      }
    }, this.props.renderData)
    if (pathCheck) return
    const strokeCheck = R.any(d => {
      if (ctx.isPointInStroke(d.path2D, mouse.x, mouse.y)) {
        this.setState({
          hoverData: d,
          mouse: {x: evt.clientX, y: evt.clientY},
        })
        return true
      }
    }, this.props.renderData)
    if (!strokeCheck && this.state.hoverData) {
      this.setState({hoverData: undefined})
    }
  },
  onMouseLeave() {
    this.setState({hoverData: undefined})
  },
  renderCanvas() {
    const {hoverData} = this.state
    var ctx = findDOMNode(this.refs.canvas).getContext('2d')
    ctx.fillStyle = 'hsl(0, 50%, 20%)'
    utils.canvas.clearRect(ctx, this.props.size)
    ctx.lineWidth = 2
    if (hoverData) {
      ctx.strokeStyle = 'black'
      ctx.stroke(hoverData.path2D)
    }
  },
  render() {
    return (
      <div>
        <canvas
            height={this.props.size.height}
            onMouseMove={this.onMouseMove}
            onMouseLeave={this.onMouseLeave}
            ref='canvas'
            style={styles.canvas}
            width={this.props.size.width}
            />
        {this.state.hoverData &&
          <div style={R.merge(styles.tooltip, {top: this.state.mouse.y, left: this.state.mouse.x})}>
            <div>{this.state.hoverData.label}</div>
          </div>
        }
      </div>
    )
  },
})