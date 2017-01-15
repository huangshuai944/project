import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import '../css/Section.css';
import SectionTop from './section/SectionTop.js';
import SectionLeft from './section/SectionLeft.js';
import SectionRight from './section/SectionRight.js';






class Section extends Component{
	render(){
		let Zli=this.props.img;
		let arr=this.props.words;
		return (
			<div>
				<div className="secTop">
					<SectionTop content={arr[0]} title={this.props.title}/>
				</div>
				<div className="secLeft">
					<SectionLeft contents={arr[1]}/>
				</div>
				<div className="secRight">
					<SectionRight img={Zli} content={arr[2]}/>
				</div>
			</div>
		)
	}
}
export default Section;