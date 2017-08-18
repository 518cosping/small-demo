var less = require('../less/entry.less');
var React = require('react');  //引入模块
var ReactDom = require('react-dom');

// var App = React.createClass({  //首字母必须大写
//     getInitialState:function(){
//         return{
//             open:true
//         }
//     },
//     onChangeColor : function(){
//         var flag = !this.state.open;
//         this.setState({
//             open:flag,            
//         })
//     },
//     render: function(){
//         var fontStyle = {
//             color:'red',
//         }
//         if(!this.state.open){
//             fontStyle.color = 'green';
//         }
//         var data = this.props.stars;
//         return (
//             <div onClick={this.onChangeColor}style={fontStyle}>
//                  <ul >
//                     {
//                         data.map(function(ele,index){
//                             return <li key = {index}>{ele}{index}</li>
//                         })
//                     }
//                 </ul> 
//             </div>
//         )
//     }
// });
    var Mask = React.createClass({
        getDefaultProps:function(){
            return {
                style:{
                    width:'100%',
                    opacity:0.5,
                    background:'#ccc',
                    height:'100%',
                    display: 'none'
                }
            }
        },
        render:function(){
            var newStyle = Object.assign({},this.props.style)
            if(this.props.openFlag){
                newStyle.display='block';
            }
            return(
                <div style={newStyle}>
                    {this.props.children}
                </div>
            )
        }
    })
    var Info = React.createClass({
        getDefaultProps:function(){
            return {
                message:'Hello World',
                style: {
                    margin: '100 auto',
                    textAlign: 'center',
                    height: '150px',
                    lineHeight: '150px',
                    color: '#f00',
                    background: 'orange',
                }
            }
        },
        render:function(){
            return(
                <div style={this.props.style}>{this.props.message}</div>
            )
        }
    });
    var ButtonDa = React.createClass({
        getInitialState:function(){
            return {
                open:false,
            }
        },
        onChangestate:function(){
            var flag = !this.state.open;
            this.setState({
                open : flag
            })
        },
        getDefaultProps:function(){
            return {
                style:{
                    width: '150px',
                    height: '50px',
                    background: 'red',
                    fontSize: '20px'
                }
            }
        } ,
        render:function(){
            return(
               <div>
                   <button style={this.props.style}
                   onClick={this.onChangestate}>点我</button>
                   <Mask openFlag={this.state.open}>
                       <Info/>
                   </Mask>
               </div>
           )
       } 
    })
ReactDom.render(
    <ButtonDa/>,
    document.getElementById('root')
)