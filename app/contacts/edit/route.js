import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		return this.store.find('contact', params.contact_id);
	},
	setupController: function(controller, model) {
		controller.set('attrs.model', model);
	},
	actions: {
		updateContact: function(contact) {
			contact.save();
			this.transitionTo('contacts.contact', contact.get('id'));
		}
	}
});
