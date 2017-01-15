import React,{Component} from 'react';
import '../css/Rangelist.css';


class Rangelist extends Component{
	render(){
		let arr=this.props.arr;
		let ary=["所有数据"];
		for(let i=0;i<arr.length;i++){
			let x=arr[i].map((ele,index)=>{
				return (<a key={Math.random()} href="javascript" className="listA" style={{color:'#999'}}>{ele}<br/></a>)
			})
			ary.push(x);
		}
		return (
		  <ul className="ul2">
		  	<li key={Math.random()} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
			  	<span className="span1"></span>
			  	<a href="javascript:;">专利果切</a>
			  	<i className="fr">&gt;</i>
			  	<div className="hide hide1" name='0'>
			  		{ary[1]}
			  	</div>
		  	</li>
		  	<li key={Math.random()} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
			  	<span className="span2"></span>
			  	<a href="javascript:;">冷榨果饮</a>
			  	<i className="fr">&gt;</i>
			  	<div className="hide hide1" name='1'>
			  	{ary[2]}
			  	</div>
		  	</li>
		  	<li key={Math.random()} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
			  	<span className="span3"></span>
			  	<a href="javascript:;">冲水果酱</a>
			  	<i className="fr">&gt;</i>
			  	<div className="hide hide1" name='2'>
			  	{ary[3]}
			  	</div>
			</li>
		  	<li key={Math.random()} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
			  	<span className="span4"></span>
			  	<a href="javascript:;">进口水果</a>
			  	<i className="fr">&gt;</i>
			  	<div className="hide hide1" name='3'>
			  	{ary[4]}
			  	</div>
			 </li>
		  	<li key={Math.random()} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
			  	<span className="span5"></span>
			  	<a href="javascript:;">国产水果</a>
			  	<i className="fr">&gt;</i>
			  	<div className="hide" name='4'>
			  	{ary[5]}
			  	</div>
			 </li>
		  	<li key={Math.random()} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
			  	<span className="span6"></span>
			  	<a href="javascript:;">酸奶零食</a>
			  	<i className="fr">&gt;</i>
			  	<div className="hide" name='5'>
			  	{ary[6]}
			  	</div>
			</li>
		  	<li key={Math.random()} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
			  	<span className="span7"></span>
			  	<a href="javascript:;">礼箱卡券</a>
			  	<i className="fr">&gt;</i>
			  	<div className="hide" name='6'>
			  	{ary[7]}
			  	</div>
			 </li>
		  </ul>
		);
	}
}
export default Rangelist;