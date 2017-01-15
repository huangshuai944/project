import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import '../../css/Section.css';

class SectionLeft extends Component {
	constructor(){
		super();
		this.state={
			control:0
		};
	}
	
	render(){
		let liList=this.props.contents.map((ele,index)=>{
			if(index==0){
				return <li style={{height:"123px"}} key={this.state.control+index}>{ele}</li>
			}
			return <li key={this.state.control+index}>{ele}</li>
		});
		return (
			<ul className="secLeft" name="0">
				<li style={{height: '63px'}}>热销排行</li>
				{liList}
			</ul>
		)
	}
}
export default SectionLeft;