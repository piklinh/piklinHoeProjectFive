(this["webpackJsonpghost-writer"]=this["webpackJsonpghost-writer"]||[]).push([[0],{13:function(e,t,a){e.exports=a(24)},18:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),i=a.n(o),h=(a(18),a(9)),l=a(10),s=a(12),u=a(11),m=[{number:1,plot:"\u201cIf you are in here, then who is that out there?\u201d",author:"Ben Carson"},{number:2,plot:"I saw movement in the church. I shouldn\u2019t have gone in.",author:"Damien Thorn"},{number:3,plot:"REDRUM.",author:"Johnny"},{number:4,plot:"I have been waking up in the middle of the night for no reason. Tonight I know why.",author:"Nightowl"},{number:5,plot:"My pregnant wife has a disturbing craving.",author:"Guy Woodhouse"},{number:6,plot:"You\u2019ve always hated silence. When it\u2019s silent, they come back for you.",author:"Mary Shaw"},{number:7,plot:"There is a padlock in the basement.",author:"Doctor Brewer"},{number:8,plot:"There is always blood on the axe in the shed.",author:"Jason Voorhees"},{number:9,plot:"It is perched on a branch, not far from my window, watching with an unfathomable black eye.",author:"The Raven"},{number:10,plot:"The grandfather clock has been in your family for generations started running backward.",author:"Alexander Hartdegen"},{number:11,plot:"Her eyes are sharp, her teeth are sharper.",author:"Vampira"},{number:12,plot:"I just saw my reflection blink.",author:"Bloody Mary"},{number:13,plot:"I went upstairs to check on my toddler. The window was open and the bed empty.",author:"Goblin King"},{number:14,plot:"The last man on earth sat alone in the room. There was knock on the door.",author:"Will Smith"},{number:15,plot:"My partner asked me why I was breathing so heavily. It wasn't me.",author:"Scooby Doo"},{number:16,plot:"There is a picture of me sleeping in my phone. I live alone.",author:"Beth Raymond"},{number:17,plot:"The grinning face stared at me in the darkness outside my window.",author:"Pennywise"},{number:18,plot:"\u201cThere are monsters under my bed. I can hear them breathing.\u201d",author:"Carol Anne Freeling"},{number:19,plot:"I used the oujia board last night. I got the answer today, in blood.",author:"Laine Morris"},{number:20,plot:"The wailing from the baby monitor won't stop. There is no child.",author:"Chucky"},{number:21,plot:"I heard footsteps in the unit above me. It has been vacant for months.",author:"Casper"},{number:22,plot:"For sale, pair of baby shoes, never worn.",author:"Morticia Adams"},{number:23,plot:"The knife, it slices so smoothly.",author:"Norman Bates"},{number:24,plot:"Delicious, the eyeballs were the best.",author:"Hannibal Lecter"},{number:25,plot:"I saw the children swinging. Their bodies have been hanging for days.",author:"Bughuul"},{number:26,plot:"Roses are red. Violets are blue. There is someone right behind you.",author:"Slimer"},{number:27,plot:"Ring-a-ring-a-rosies. A pocket full of posies. Ashes, ashes. We all fall down.",author:"Black Death"},{number:28,plot:"I was fascinated by how much my brain resembled oatmeal, splattered on the concrete.",author:"Sam Wheat"},{number:29,plot:"I got a doll delivered today. At night, I heard the bubble wrap popping.",author:"Anne"},{number:30,plot:"Why won't it compile?!",author:"Cohort 28 :("}],c=a(3),p=a.n(c);a(20);p.a.initializeApp({apiKey:"AIzaSyD28M6a8QMoniBupxuBqRR9uHm-GViANwE",authDomain:"ghost-writer-7d08c.firebaseapp.com",databaseURL:"https://ghost-writer-7d08c.firebaseio.com",projectId:"ghost-writer-7d08c",storageBucket:"ghost-writer-7d08c.appspot.com",messagingSenderId:"767658760377",appId:"1:767658760377:web:d877b741931fdce6ffa368"});var d=p.a,b=(a(23),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(h.a)(this,a),(e=t.call(this)).generateRandomNumber=function(){e.setState({number:Math.floor(30*Math.random())})},e.handleGenerate=function(){e.generateRandomNumber()},e.handleChange=function(t){e.setState({storyInput:t.target.value})},e.handleClick=function(t){t.preventDefault(),d.database().ref().push(e.state.storyInput),e.setState({storyInput:""})},e.state={number:0,liveStory:[]},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;d.database().ref().on("value",(function(t){var a=t.val(),n=[];for(var r in a)n.push(a[r]);e.setState({liveStory:n})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("h1",null,"Ghostwriter"),r.a.createElement("h2",null,"Let your inner spirit guide you")),r.a.createElement("div",{className:"storyEntry"},r.a.createElement("div",{className:"generatePrompt"},r.a.createElement("div",{className:"prompt"},m[this.state.number].plot),r.a.createElement("div",{className:"author"},m[this.state.number].author),r.a.createElement("button",{onClick:this.handleGenerate},"Generate a prompt")),r.a.createElement("div",{className:"storyInput"},r.a.createElement("p",null,"Share your dark tale with us"),r.a.createElement("form",{action:""},r.a.createElement("label",{htmlFor:"newStory"},"Share your dark tale with us"),r.a.createElement("input",{"aria-hidden":"true",type:"text",name:"newStory",id:"newStory",onChange:this.handleChange,value:this.state.storyInput}),r.a.createElement("button",{onClick:this.handleClick},"Submit"))))),r.a.createElement("div",{className:"wrapper displayStory"},r.a.createElement("ul",null,this.state.liveStory.map((function(e){return r.a.createElement("li",null,r.a.createElement("p",null,e))})))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.996378be.chunk.js.map