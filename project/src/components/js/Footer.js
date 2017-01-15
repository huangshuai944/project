import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import '../css/Footer.css';
class Footer extends Component{
	render(){
		return (
			<div className="fooDiv">
				<div className="footop">
					<dl>
						<dd>关于果酷</dd>
						<dt>我们是谁</dt>
						<dt>媒体声音</dt>
						<dt>联系我们</dt>
						<dt>加入我们</dt>
					</dl>
					<dl>
						<dd>商务合作</dd>
						<dt>商家合作</dt>
						<dt>试吃报名</dt>
					</dl>
					<dl>
						<dd>服务与声明</dd>
						<dt>声明</dt>
					</dl>
					<dl>
						<dd>有橙下载</dd>
						<dt>ios版下载</dt>
						<dt>Android下载</dt>
					</dl>
				</div>
				<div className="foobottom">
					关注我们
					<span>
						<span className="sina"></span>
						<span className="wechat"></span>
					</span>
				</div>
			</div>
		)
	}
}
export default Footer;