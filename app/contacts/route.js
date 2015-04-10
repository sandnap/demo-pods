import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.store.find('contact');
	},
	setupController: function(controller, model) {
		controller.set('attrs.model', model);
	},
	actions: {
		didTransition: function() {
			this.get('controller.attrs.model').forEach(function(model) {
				model.rollback();
			});
		}
	}
});
