import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Component.extend(EmberValidations.Mixin, {
	attrs: undefined,
	showErrors: false,
  contact: Ember.computed.alias('attrs.model'),
  buttonText: function() {
  	if (this.get('isValid') === false && this.get('showErrors') === true) {
  		return 'Error(s)';
  	} else {
  		return 'Submit';
  	}
  }.property('showErrors', 'isValid'),
  validations: {
    'contact.firstName': {
      presence: true,
      length: {
        minimum: 1
      }
    },
    'contact.middleInitial': {
      length: {
        maximum: 1
      }
    },
    'contact.lastName': {
      presence: true,
      length: {
        minimum: 1
      }
    },
    'contact.postalCode': {
      format: {
        with: /^\d{5}(?:[-\s]\d{4})?$/,
        allowBlank: true,
        message: 'must be a valid US zip code'
      }
    }
  },
  actions: {
    saveContact: function(contact) {
    	console.log('Is valid? ' + this.get('isValid'));
    	if (this.get('isValid') === true) {
	      this.sendAction('action', contact);
    	} else {
    		this.set('showErrors', true);
    	}
    }
  }
});
