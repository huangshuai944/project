import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import '../../css/Section.css';

let lastEle,ulElement;
class SectionTop extends Component {
	constructor(){
		super();
		this.state={
			control:0,
		};
	}
	
	onOverLi(e){
		lastEle=e.target.getAttribute("class");
		this.setState({
			control:this.state.control+this.props.content.length,
		})
	}

  render() {
	let listyle={color:'#000',background:'#FFF'};
  	let data=this.props.content;
  	let liList=data.map((ele,index)=>{
			return <li className={index} style={listyle} onMouseOver={this.onOverLi.bind(this)} key={index+this.state.control}>{ele}</li>
		});
	
  	return (
	  	<div className="secTop">
	  		<span><b></b>》{this.props.title}</span>
	  		<ul ref={this.refCallBack}>{liList}</ul>
	  		<a className="fr" href="javascript:;">更多&gt;&gt;</a>
	  	</div>
  	)
  }
	refCallBack(ele){
		ulElement=ele;
	}
	componentDidUpdate() {
		let nodeList=ulElement.childNodes;
		for(var i=0;i<nodeList.length;i++){
			if(i==lastEle){
				nodeList.item(i).style.color='#FFF';
				nodeList.item(i).style.background='#E50065';
				
			}
		}
	}
}
export default SectionTop;