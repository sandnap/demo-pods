import DS from 'ember-data';

export default DS.Model.extend({
		firstName: DS.attr('string'),
		middleInitial: DS.attr('string'),
		lastName: DS.attr('string'),
		streetAddress: DS.attr('string'),
		city: DS.attr('string'),
		state: DS.attr('string'),
		postalCode: DS.attr('string'),
		fullName: function() {
			var fn = this.get('firstName');
			var ln = this.get('lastName');
			var mi = this.get('middleInitial');
			mi = mi && mi !== null ? mi + ' ' : '';
			return '%@ %@%@'.fmt(fn, mi, ln);
		}.property('firstName', 'middleInitial', 'lastName'),
		fullAddress: function() {
			var s = this.get('streetAddress');
			var c = this.get('city');
			var st = this.get('state');
			var pc = this.get('postalCode');
			return '%@ %@ %@  %@'.fmt(s ? s + ', ' : '', c ? c + ', ' : '', st ? st : '', pc ? pc : '');
		}.property('streetAddress', 'city', 'state', 'postalCode')
});
