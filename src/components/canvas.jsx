import React    from 'react'
import ReactDOM from 'react-dom'

export default class Canvas extends React.Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		this.canvas = ReactDOM.findDOMNode(this.refs.canvas)
		this.canvas.width  = this.props.width
		this.canvas.height = this.props.height
		this.draw(
			this.canvas, 
			this.props.clock_x + this.props.clock_size / 2, 
			this.props.clock_y + this.props.clock_size / 2
		)
	}

	/**
	 * 描画
	 */
	render() {
		if(this.canvas) {
			this.canvas.width  = this.props.width
			this.canvas.height = this.props.height
			this.draw(
				this.canvas, 
				this.props.clock_x + this.props.clock_size / 2, 
				this.props.clock_y + this.props.clock_size / 2
			)	
		}

		return (
			<canvas className="canvas" ref="canvas"></canvas>
		)
	}

	draw(canvas, x, y) {
		let ctx = canvas.getContext('2d')

		for(let i=0; i < this.props.nav.length; i++) {
			ctx.beginPath()
			ctx.strokeStyle = this.props.nav[i][2]
			ctx.moveTo(x, y)
			ctx.lineTo(this.props.nav[i][0], this.props.nav[i][1])
			ctx.stroke()
			ctx.closePath()
		}
	}
}
