emp = new Meteor.Collection("Mentores");
Inv = new Meteor.Collection("Invitados");

if (Meteor.isClient){ 
 Template.form.events({
     'submit #insert-form':function(e,t){
        e.preventDefault();
        var name=t.find('#name').value;
        var Men=t.find('#Mentorado').value;
        var Dir=t.find('#Direccion').value;
        emp.insert({name:name,Mentorado:Men,Direccion:Dir});
     }
 });
 
 Template.form.helpers({
     'records':function(){
         return emp.find({});
         
     }
  });

 Template.form.events ({
  'click .delete': function(){
    emp.remove(this._id);
  }
 });


/*Template.form.events({
  "click .Update": function(e, tpl){
    e.preventDefault();
    emp.set('name', this._id);
  },
 
});*/

Template.IngresoInvitados.helpers({
     'Mentores':function(){
         return emp.find({});
         
     }
    });

Template.IngresoInvitados.events({
     'submit #insert-form':function(e,t){
        e.preventDefault();
        var asist=t.find('#Asiste')
        var Anf=t.find('#Anfitrion').value;
        var Dir=t.find('#Direccion').value;
        var name=t.find('#NombreInv').value;
        var Apell=t.find('#ApellidoInv').value;
        var Edad=t.find('#EdadInv').value;
        var Telf=t.find('#TelfonoInv').value;
        var Celular=t.find('#inputCell').value;
        var Email=t.find('#Email').value;
        Inv.insert({Si:asist,Mentor:Men,Direccion:Dir,NombreInv:name,
          ApellidoInv:Apell,EdadInv:Edad,TelefonoInv:Telf,inpurCell:Celular,Email:Email});
     }
 });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    
  });
}




