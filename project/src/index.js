import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Section from './components/js/Section.js';
import Footer from './components/js/Footer.js';
import './index.css';
let data=require('./Data.json');



//header部分
ReactDOM.render(
  <App menu={data.goodsClass}/>,
  document.getElementById('header')
);



//section部分
function getImg(arr){
	let section=[];
	for(var i=0;i<arr.length;i++){
		section.push(require(arr[i]));
	}
	let t=section[0];
	section.shift();
	return [t,section];
}
let image1=getImg(data.section1);
let image2=getImg(data.section2);
let image3=getImg(data.section3);
let image4=getImg(data.section4);
let images=["本数组包含section的所有图片",image1,image2,image3,image4];
let title=data.sectionTitle;

let arr=data.sectionWords;
for(var i=1;i<=4;i++){
	ReactDOM.render(
	  <Section img={images[i]} words={arr[i-1]} title={title[i-1]}/>,
	  document.getElementById('section'+i)
	);
}


//footer部分
ReactDOM.render(
<Footer />,
document.getElementById('footer')
);