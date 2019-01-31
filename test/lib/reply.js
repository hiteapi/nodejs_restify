var pluralize = require('pluralize');

module.exports = class Reply {

  constructor(label, salutations, updates) {
    this.label = label;
    this.availableSalutations = salutations;
    this.availableUpdates = updates;    
    this.resourceID = Reply.resourceCounter;
  }

  get uri() {
    // TODO: think about hostname
    return "http://127.0.0.1:3000/" + this.resourceName() + '/' + this.resourceID;
  }

  resourceName() {
    return pluralize(Reply.name.toLowerCase());
  }

  static get resourceCounter() {
    Reply._resourceCounter = (Reply._resourceCounter || 0) +1;
    return Reply._resourceCounter;
  }
    
}
