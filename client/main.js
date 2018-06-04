Template.topBar.events({
"click a#register":function(event,template){
	event.preventDefault();
	Modal.show('register');
	},
"click a#login":function(event,template){
	event.preventDefault();
	Modal.show('login');
	},
 "click a#logout":function(event,template){
	event.preventDefault();
	Modal.show('logout');
	},
});



/*Invitados = new Mongo.Collection('invitado')

if (Meteor.isClient){

Template.body.helpers({
invitados: function(){
	return Invitados.find();
}
});
}


if (Meteor.isServer){
	Meteor.startup(function () {

	});
}*/
