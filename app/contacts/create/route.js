import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return {};
	},
	setupController: function(controller, model) {
		controller.set('attrs.model', model);
	},
	actions: {
		createContact: function(contact) {
			var pContact = this.store.createRecord('contact', contact);
			pContact.save();
			this.transitionTo('contacts');
		}
	}
});
