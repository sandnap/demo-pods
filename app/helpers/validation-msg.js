import Ember from 'ember';

export function validationMsg(params, hash) {
	var result = '';
	if (params) {
		var hide = hash.showAttr !== undefined && hash.showAttr === false;
		result = '<span class="%@ error-message">%@</span>';
		result = Ember.String.htmlSafe(result.fmt(hide === true ? 'hide' : '', params.toString()));
	}
  return result;
}

export default Ember.HTMLBars.makeBoundHelper(validationMsg);
