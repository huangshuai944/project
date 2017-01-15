import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import '../../css/Section.css';

class SectionRight extends Component {
	constructor(){
		super();
		this.state={
			control:0
		};
	}

	render(){
		let imgs=this.props.img[1];
		let liList=imgs.map((ele,index)=>{
			return (<li key={this.state.control+index}>
				<img src={ele} style={{height:'155px',width:'155px'}}/>
			</li>)
		});
		return (
			<div className="secRight">
				<div className="picture">
					<img src={this.props.img[0]} height="440" width="255"/>
				</div>
				<ul className="fr">
					{liList}
				</ul>
			</div>
			
		)
	}
}
export default SectionRight;