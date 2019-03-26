(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){},33:function(e,t,a){e.exports=a(66)},38:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),s=a.n(c),i=(a(38),a(8)),o=a(9),l=a(11),m=a(10),h=a(12),u=(a(16),a(17),a(4)),p=a(14),d=function(){return r.a.createElement("nav",{class:"navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement("a",{class:"navbar-brand",href:"#"},"Character Manager"),r.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{class:"navbar-toggler-icon"})),r.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{class:"navbar-nav"},r.a.createElement("li",{class:"nav-item active"},r.a.createElement(u.b,{className:"nav-link",to:"/"},"Home")),r.a.createElement("li",{class:"nav-item"},r.a.createElement(u.b,{className:"nav-link",to:"/Create"},"Create")))))},g=a(13),b=a.n(g),v=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={character:[]},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"deleteCharacter",value:function(e){console.log("test"),b.a.delete("https://character-database.becode.xyz/characters/"+e).then(function(e){return e.json()})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://character-database.becode.xyz/characters").then(function(e){return e.json()}).then(function(t){return e.setState({character:t})})}},{key:"componentDidUpdate",value:function(){var e=this;fetch("https://character-database.becode.xyz/characters").then(function(e){return e.json()}).then(function(t){return e.setState({character:t})})}},{key:"render",value:function(){var e=this,t=this.state.character;return r.a.createElement(r.a.Fragment,null,r.a.createElement("link",{href:"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css",rel:"stylesheet",id:"bootstrap-css"}),r.a.createElement("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"}),r.a.createElement("link",{rel:"stylesheet",href:"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"}),r.a.createElement("script",{src:"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"}),r.a.createElement("script",{src:"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"}),r.a.createElement("div",{class:"container mt-40"},r.a.createElement("h3",{class:"text-center"},"Character List"),r.a.createElement("div",{class:"row mt-30"},t.map(function(t){return r.a.createElement("div",{class:"col-md-4 col-sm-6"},r.a.createElement("div",{class:"box3"},r.a.createElement("img",{src:"data:image/jpeg;base64,".concat(t.image),className:"img-responsive",alt:""}),r.a.createElement("div",{class:"box-content"},r.a.createElement("h3",{class:"title"},t.name),r.a.createElement("span",{class:"post"}),r.a.createElement("p",{class:"description"},t.shortDescription),r.a.createElement(u.b,{to:"/Edit/"+t.id},r.a.createElement("button",null,"Edit")),r.a.createElement(u.b,{to:"/character/"+t.id},r.a.createElement("button",null,"Read More")),r.a.createElement(u.b,{class:"social-icon text-xs-center",to:"/",onClick:function(a){window.confirm("Are you sure .")&&e.deleteCharacter(t.id)}},r.a.createElement("i",{class:"fas fa-trash-alt"})," delete"))))}))),r.a.createElement("script",{src:"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"}),r.a.createElement("script",{src:"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"}))}}]),t}(n.Component),f=a(1),E=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).onChangeName=a.onChangeName.bind(Object(f.a)(Object(f.a)(a))),a.onChangeShortDesc=a.onChangeShortDesc.bind(Object(f.a)(Object(f.a)(a))),a.onChangeDesc=a.onChangeDesc.bind(Object(f.a)(Object(f.a)(a))),a.state={file:"",imagePreviewUrl:""},a.onChangeImg=a.onChangeImg.bind(Object(f.a)(Object(f.a)(a))),a.onSubmit=a.onSubmit.bind(Object(f.a)(Object(f.a)(a))),a.state={character:[],name:"",image:"",shortDescription:"",description:"",file:"",imagePreviewUrl:""},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.a.get("https://character-database.becode.xyz/characters/"+this.props.match.params.id).then(function(t){e.setState({name:t.data.name,image:t.data.image,shortDescription:t.data.shortDescription,description:t.data.description})}).catch(function(e){console.log(e)})}},{key:"onChangeName",value:function(e){this.setState({name:e.target.value})}},{key:"onChangeShortDesc",value:function(e){this.setState({shortDescription:e.target.value})}},{key:"onChangeDesc",value:function(e){this.setState({description:e.target.value})}},{key:"onChangeImg",value:function(e){this.setState({image:e.target.value})}},{key:"onSubmit",value:function(e){var t;e.preventDefault(),t=this.state.imagePreviewUrl?this.state.imagePreviewUrl.substr(this.state.imagePreviewUrl.indexOf(",")+1):this.state.image;var a={name:this.state.name,shortDescription:this.state.shortDescription,description:this.state.description,image:t};console.log(a),b.a.put("https://character-database.becode.xyz/characters/"+this.props.match.params.id,a).then(this.props.history.push("/"))}},{key:"_handleSubmit",value:function(e){e.preventDefault(),console.log("handle uploading-",this.state.file)}},{key:"_handleImageChange",value:function(e){var t=this;e.preventDefault();var a=new FileReader,n=e.target.files[0];a.onloadend=function(){t.setState({file:n,imagePreviewUrl:a.result})},a.readAsDataURL(n)}},{key:"render",value:function(){var e=this,t=(this.state.character,this.state.imagePreviewUrl),a=null;t?a=r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{class:"preview-img",ref:"image",src:t,width:"100",height:"100"})):a=this.state.image?r.a.createElement("img",{class:"preview-img",ref:"image",src:"data:image/;base64,"+this.state.image,width:"100",height:"100"}):r.a.createElement("img",{class:"preview-img",src:"https://img3.cliparto.com/pic/s/256180/5361912-user-icon-handcuffs-icon.jpg",width:"100",height:"100"});return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{marginTop:10}},r.a.createElement("h3",{align:"center"},"Super Hero"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Name:  "),r.a.createElement("input",{type:"text",className:"form-control",defaultValue:this.state.name,onChange:this.onChangeName})),r.a.createElement("div",{className:"previewComponent"},r.a.createElement("form",{onSubmit:function(t){return e._handleSubmit(t)}},r.a.createElement("input",{className:"fileInput",type:"file",onChange:function(t){return e._handleImageChange(t)}}),r.a.createElement("button",{className:"submitButton",type:"submit",onClick:function(t){return e._handleSubmit(t)}},"Upload Image")),r.a.createElement("div",{className:"imgPreview"},a)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Short Description: "),r.a.createElement("input",{type:"text",className:"form-control",defaultValue:this.state.shortDescription,onChange:this.onChangeShortDesc})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Description: "),r.a.createElement("input",{type:"text",className:"form-control",defaultValue:this.state.description,onChange:this.onChangeDesc})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",defaultValue:"Submit",className:"btn btn-primary"})))))}}]),t}(n.Component),j=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).onChangeName=a.onChangeName.bind(Object(f.a)(Object(f.a)(a))),a.onChangeShortDesc=a.onChangeShortDesc.bind(Object(f.a)(Object(f.a)(a))),a.onChangeDesc=a.onChangeDesc.bind(Object(f.a)(Object(f.a)(a))),a.state={file:"",imagePreviewUrl:""},a.onChangeImg=a.onChangeImg.bind(Object(f.a)(Object(f.a)(a))),a.onSubmit=a.onSubmit.bind(Object(f.a)(Object(f.a)(a))),a.state={character:[],name:"",image:"",shortDescription:"",description:"",file:"",imagePreviewUrl:""},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"onSubmit",value:function(e){e.preventDefault();var t={name:this.state.name,description:this.state.description,shortDescription:this.state.shortDescription,image:this.state.imagePreviewUrl.substr(this.state.imagePreviewUrl.indexOf(",")+1)};b.a.post("https://character-database.becode.xyz/characters/",t).then(this.props.history.push("/"))}},{key:"_handleImageChange",value:function(e){var t=this;e.preventDefault();var a=new FileReader,n=e.target.files[0];a.onloadend=function(){t.setState({file:n,imagePreviewUrl:a.result})},a.readAsDataURL(n)}},{key:"onChangeName",value:function(e){this.setState({name:e.target.value})}},{key:"onChangeShortDesc",value:function(e){this.setState({shortDescription:e.target.value})}},{key:"onChangeDesc",value:function(e){this.setState({description:e.target.value})}},{key:"onChangeImg",value:function(e){this.setState({image:e.target.value})}},{key:"render",value:function(){var e=this,t=this.state.imagePreviewUrl,a=null;t?a=r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{class:"preview-img",ref:"image",src:t,width:"100",height:"100"})):a=this.state.super_hero_image?r.a.createElement("img",{class:"preview-img",ref:"image",src:"data:image/;base64,"+this.state.super_hero_image,width:"100",height:"100"}):r.a.createElement("img",{class:"preview-img",src:"https://img3.cliparto.com/pic/s/256180/5361912-user-icon-handcuffs-icon.jpg",width:"100",height:"100"});return r.a.createElement("div",null,r.a.createElement(r.a.Fragment,null,r.a.createElement(u.b,{to:"/"},"Return to home"),r.a.createElement("h1",null,"Add a new super hero"),r.a.createElement("form",{class:"col-md-6 mx-auto",onSubmit:this.onSubmit},r.a.createElement("input",{class:"form-control",type:"text",name:"name",ref:"name",defaultValue:this.state.name,onChange:this.onChangeName}),r.a.createElement("div",{class:"preview text-center"},a,r.a.createElement("div",{class:"browse-button"},r.a.createElement("i",{class:"fa fa-pencil-alt"}),r.a.createElement("input",{class:"browse-input",type:"file",name:"image",id:"UploadedFile",onChange:function(t){return e._handleImageChange(t)}})),r.a.createElement("span",{class:"Error"})),r.a.createElement("input",{class:"form-control",type:"text",ref:"shortDescription",name:"shortDescription",defaultValue:this.state.shortDescription,onChange:this.onChangeShortDesc}),r.a.createElement("textarea",{class:"form-control",ref:"description",name:"description",rows:"10",onChange:this.onChangeDesc},this.state.description),r.a.createElement("input",{type:"submit",class:"form-control btn btn-primary",value:"submit"}))))}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={character:[],name:"",image:"",shortDescription:"",description:""},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.a.get("https://character-database.becode.xyz/characters/"+this.props.match.params.id).then(function(t){e.setState({name:t.data.name,image:t.data.image,shortDescription:t.data.shortDescription,description:t.data.description})})}},{key:"render",value:function(){this.state.character;return r.a.createElement("div",{class:"container"},r.a.createElement("h1",{class:"my-4"},this.state.name),r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-lg-6 mb-4"},r.a.createElement("div",{class:"card h-100"},r.a.createElement("img",{src:"data:image/jpeg;base64,".concat(this.state.image),width:"100",height:"100",className:"img-responsive",alt:""}),r.a.createElement("div",{class:"card-body"},r.a.createElement("h4",{class:"card-title"},r.a.createElement("a",{href:"#"},this.state.shortDescription)),r.a.createElement("p",{class:"card-text"},this.state.description))))))}}]),t}(n.Component),C=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(u.a,null,r.a.createElement("div",null,r.a.createElement(d,null),r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",component:v}),r.a.createElement(p.a,{exact:!0,path:"/Edit/:id",component:E}),r.a.createElement(p.a,{exact:!0,path:"/Create",component:j}),r.a.createElement(p.a,{exact:!0,path:"/character/:id",component:y}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,1,2]]]);
//# sourceMappingURL=main.4daf0133.chunk.js.map