	var msgs = [];
	var i=-1;
	var array = [];
	function init(){
		console.log("In init");
		 PostMessage("Vishal","Hi");
		 PostMessage("Vishal","I am good. How are you");
		 PostMessage("Aditya","Hey hi. I am there");
		 PostMessage("Aditya","I am doing good too");
		 PostMessage("Agam","Can we meet?");
		 PostMessage("Aditya","Sure.")
	}
	function user2(messageNumber)
	{ 
	    var div1 = document.createElement('div');
	    
		var msg = msgs[i];
		div1.innerHTML="<p class=\"user2\">" +msgs[i].getNameandMessage(); "</p>";
		$("#loadConversation").append(div1);
		//event.preventDefault();
		var height = 0;
		$('#loadConversation p').each(function(i, value){
		    height += parseInt($(this).height());
		});

		height += '';

		$('#loadConversation').animate({scrollTop: height});
        
	}
	function User(name,message){
		this.name=name;
		this.message=message;
	}
	
	User.prototype = {
			constructor:User,
			getNameandMessage:function(){
				return this.name+":"+this.message;
			}
	}
	function PostMessage(name,message){
		var cm =new User(name,message)
		msgs.push(cm);
	}
	var postCount = 0;
	function postChat()
	{
		 i++;
    	 console.log(i);
		var conversationText = document.getElementById('conversation_text').value;
		document.getElementById('conversation_text').value = "";
		var div1 = document.createElement('div');
		div1.innerHTML="<p class=\"mychat\">" +"Yash: " + conversationText  +"</p>";
		$("#loadConversation").append(div1);
		//event.preventDefault(); 
		var height = 0;
		$('#loadConversation p').each(function(i, value){
		    height += parseInt($(this).height());
		});

		height += '';

		$('#loadConversation').animate({scrollTop: height});
        
		setTimeout(function(){user2();},1000);
	}
	("#submitThis").keyup(function(event){
	    if(event.keyCode == 13)
	    {
	    	//alert("I am here");
	    	
	    	postChat();
	       
	       
	    }
	});
	