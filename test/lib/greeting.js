var pluralize = require('pluralize');

module.exports = class Greeting {
  
  constructor(greeting, reply) {
    this.label = greeting;
    this.reply = reply;
    this.resourceID = Greeting.resourceCounter;
  }

  get uri() {
    // TODO: think about hostname
    return "http://127.0.0.1:3000/" + this.resourceName() + '/' + this.resourceID;
  }


  get hite() {
    var hite = {
      label: this.label,
      uri: this.uri,
      // think about available requests and to-be-created resource
      // what does greetings/1/replies map to?
      available_requests: this.available_requests
    };
    return JSON.stringify(hite);
  }
  
  get available_requests() {
    return [
      {
	label: this.reply.label,
	method: 'POST',
	uri: this.reply.uri,
	body: [
	  {},
	  {
	    choices: [
	      {},
	      {},
	      {label: this.reply.availableUpdates[2]}
	    ]
	  }
	]
      }
    ];
  }
  
  resourceName() {
    return pluralize(Greeting.name.toLowerCase());
  }

  static get resourceCounter() {
    Greeting._resourceCounter = (Greeting._resourceCounter || 0) +1;
    return Greeting._resourceCounter;
  }
  
}
