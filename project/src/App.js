import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Rangelist from './components/js/Rangelist.js';

class App extends Component {
	constructor(){
		super();
		this.state={
			flag:false
		};
	}
	focus(e){
		e.target.parentNode.style.backgroundPositionY="0px";
	}
	blur(e){
		e.target.parentNode.style.backgroundPositionY="-39px";
	}
  render() {
	let array=this.props.menu;
  	let arr=["收藏果酷","企业管理入口"];
  	let ary=["欢迎光临果酷","请登录","免费注册","我的订单"];
    return (
    	<div>
	    	<nav id="nav">
		    		<div className="top">
		    			<span className="fl"></span>
		    			<span className="fl">{arr[0]}</span>
		    			<span className="fl" style={{color:'red'}}>{arr[1]}</span>
		    			<ul className="fr range">
		    				<li className="fl">{ary[0]}</li>
		    				<li className="fl">{ary[1]}</li>
		    				<li className="fl">{ary[2]}</li>
		    				<li className="fl">{ary[3]}</li>
		    			</ul>
		    		</div>
		    		<div className="bottom">
		    			<div className="topLeft"></div>
		    			<div className="topCenter">
		    				<input type="search"onBlur={this.blur.bind(this)} onFocus={this.focus.bind(this)}/>
		    			</div>
		    			<div className="topRight">
		    			<span></span>我的果酷
		    			<span></span>我的购物车
		    			</div>
		    		</div>
		    </nav>
		    <article id="article">
	    		<ul className="ul1">
	    			<li>全部商品分类
			    		<Rangelist arr={array}/>
	    			</li>
	    			<li>闪购促销</li>
	    			<li>最新活动</li>
	    		</ul>
	    	</article>
    	</div>
    );
  }
}

export default App;
