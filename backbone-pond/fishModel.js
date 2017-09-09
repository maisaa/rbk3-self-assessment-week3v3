// Please modify this file!

var Fish = Backbone.Model.extend({

  defaults: {
    name: 'Larry',
    image: 'http://www.google.com',
    description: 'Regular old fish',
    displayInfo: false
  }
  toggleDescription(){
  	//in side this function i would check if the events for this fish is clicked
  	// then i will change the state of toggle on or off
  	// so i need to add new variable with name toggle (bollen) 
  	//if(this.Model.get(this.clicked))

  }

});
//[ ] Inside of `fishModel.js`, create a `toggleDescription` function such that when a fish <tr> is clicked, the fish description will toggle on or off. DO NOT MODIFY any other files.

// 
