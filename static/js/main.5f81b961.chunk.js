(this.webpackJsonpclickygame=this.webpackJsonpclickygame||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"image":"https://i.pinimg.com/originals/1d/da/7b/1dda7b4e6b8298cbd99a70b1cccd2c34.jpg","clicked":true},{"id":2,"image":"https://img1.looper.com/img/gallery/rumor-report-is-marvel-really-making-captain-america-4/intro-1571140919.jpg","clicked":false},{"id":3,"image":"https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Frobcain%2Ffiles%2F2017%2F07%2FHulk.jpg","clicked":false},{"id":4,"image":"https://static.comicvine.com/uploads/original/11124/111246198/6319726-0193335044-gotg_.jpg","clicked":false},{"id":5,"image":"https://www.syfy.com/sites/syfy/files/styles/1200x680/public/2018/02/black_panther_hero_image.jpg","clicked":false},{"id":6,"image":"https://images.squarespace-cdn.com/content/v1/5cec0ec284d3ad0001c28a32/1567518616319-781T44MQFE9NBW3JHTHK/ke17ZwdGBToddI8pDm48kGDpvalPb1SqHoCn1hwN0Y57gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmQPoRzxSr1hzN-vPBHt7YyLLXgctAyUJRqJUUGWVDK_ZzIgvsybGcZEPqUYiXY8im/image-asset.jpeg","clicked":false},{"id":7,"image":"https://www.nme.com/wp-content/uploads/2018/02/Black-Widow-Avengers-696x442.jpg","clicked":false},{"id":8,"image":"https://i.pinimg.com/474x/76/fc/5d/76fc5dd539b627541f1f4840179c71eb.jpg","clicked":false},{"id":9,"image":"https://akns-images.eonline.com/eol_images/Entire_Site/201926/rs_1024x759-190306102618-Marvel-Star-Anthony-Mackie.jpg","clicked":false},{"id":10,"image":"https://vignette.wikia.nocookie.net/spiderman-films/images/4/4e/Spider-Man_AIW_Poster_%28Textless%29.jpg/revision/latest?cb=20180514032146","clicked":false},{"id":11,"image":"https://img.cinemablend.com/filter:scale/quill/b/a/6/2/1/b/ba621ba10a9794ad162c6dc36138f3189c76013f.jpg?mw=600","clicked":false},{"id":12,"image":"https://cnet4.cbsistatic.com/img/4B8lYzw5cUF3cTSigBiGTVMcMNQ=/1092x0/2019/11/07/fda87e16-1335-4f0b-b9d7-473f12a605a2/doct.jpg","clicked":false}]')},,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(0),i=a.n(c),r=a(3),n=a.n(r),s=(a(13),a(4)),l=a(5),o=a(6),m=a(7);a(14);var d=function(e){return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{src:e.image,onClick:function(){return e.beenClicked()}}))))};a(15);var g=function(e){return i.a.createElement("div",{className:"wrapper"},e.children)};a(16);var p=function(e){return i.a.createElement("div",{className:"jumbotron"},i.a.createElement("h1",null,"MARVEL CLICKY GAME"),i.a.createElement("br",null),i.a.createElement("p",null,"Click an Image To Get Started"),i.a.createElement("p",null,e.children))},f=a(1),u=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(s.a)(this,a);for(var c=arguments.length,i=new Array(c),r=0;r<c;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={characters:f,totalScore:0,score:0},e.beenClicked=function(t){!1===e.state.characters.clicked?12===e.state.score?(e.setState({totalScore:e.state.totalScore+e.state.score}),e.setState({score:0}),alert("You Win!")):e.setState({score:e.state.score+1}):!0===e.state.characters.clicked&&alert("Game Over!"),e.setState({characters:e.state.characters.clicked=!0}),e.randomizeCharacters(f)},e.randomizeCharacters=function(t){for(var a=t.length-1;a>0;a--){var c=Math.floor(Math.random()*(a+1)),i=[t[c],t[a]];t[a]=i[0],t[c]=i[1]}e.setState({characters:t})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement(g,null,i.a.createElement(p,null,"Score: ",this.state.score," || Total Score: ",this.state.totalScore," "),this.state.characters.map((function(t){return i.a.createElement(d,{id:t.id,key:t.id,image:t.image,clicked:t.clicked,beenClicked:e.beenClicked})})))}}]),a}(c.Component);n.a.render(i.a.createElement(u,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.5f81b961.chunk.js.map