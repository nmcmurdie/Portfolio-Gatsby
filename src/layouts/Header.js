import React, { Component } from 'react'
import Shape from '../components/Shape'
import './Header.css'

const TYPES = ['x', 'circle', 'square'];
const RESIZE_UPDATE_MS = 300;

export default class Header extends Component {
    constructor() {
        super();

        this.numTypes = TYPES.length;
        this.screenWidth = window.innerWidth;
        this.state = this.generateShapes();
    }

    componentDidMount() {
        window.addEventListener("resize", () => this.debouncedResize());
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
        window.removeEventListener("resize", () => this.debouncedResize());
    }

    debouncedResize() {
        this.debounce(() => {
            if (window.innerWidth !== this.screenWidth) {
                this.screenWidth = window.innerWidth;
                this.setState(() => this.generateShapes())
            }
        }, RESIZE_UPDATE_MS);
    }

    debounce(fn, timeout) {
        clearTimeout(this.timer);
        this.timer = setTimeout(function() {
            this.timer = null;
            fn.apply(this, arguments);
        }, timeout);
    }

    generateShapes() {
        let generatedShapes = [];
        let numShapes = Math.ceil(this.screenWidth / 180),
            typeOffset = Math.round(Math.random() * numShapes),
            shapeWidth = Math.round(this.screenWidth / numShapes),
            shapeOffset = shapeWidth / 2;

        for (let i = 0; i < numShapes; i++) {
            generatedShapes.push({
                type: TYPES[(i + typeOffset) % this.numTypes],
                key: i,
                position: shapeWidth * i + shapeOffset
            });
        }

        return { shapes: generatedShapes};
    }

    render() {
        return (
            <div className="page-header">
                {
                    this.state.shapes.map(item => (
                        <Shape type={item.type} key={item.key} position={item.position} />
                    ))
                }
            </div>
        )
    }
}

