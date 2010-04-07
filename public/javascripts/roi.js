var ROICalculator = Class.create({

  initialize: function() {
    this.USER_INPUT_FIELDS = new Array('program-months', 'spend-per-month', 'coop-reimburse', 'participating', 'daily-searches', 'conversion-rate', 'average-sale', 'profit-margin');
    this.CALCULATED_FIELDS = new Array('total-budget', 'adjusted-spend', 'visitor-count', 'potential-customers', 'total-sales', 'sales-profit', 'total-cost', 'roi');
    this.ELEMENT_IDS = this.USER_INPUT_FIELDS.concat(this.CALCULATED_FIELDS);

    this.vals = {};
    this.elems = {};
    this.addOnloadHandler();
  },

  watchUserInput: function() {
    this.USER_INPUT_FIELDS.each(function(field) {
      $(field).observe('blur', function() { this.calculate(); }.bind(this));
      }.bind(this));
  },

  addOnloadHandler: function() {
    document.observe('dom:loaded', 
      function() { this.calculate(); this.watchUserInput(); }.bind(this));
  },

  readElements: function() {
    this.ELEMENT_IDS.each(function(id) {
      this.elems[id] = $(id);
      this.s(id,this.valueFor($(id)));
      }.bind(this));
  },

  calculate: function() {
    this.readElements();
    this.calculateCreditCardData();
    this.calculateGoogleData();
    this.calculateConversions();
    this.calculateROI();
  },

  calculateCreditCardData: function() {
    this.s('total-budget',
        (this.g('program-months')*this.g('spend-per-month'))/(this.g('coop-reimburse')/100));
  },

  calculateGoogleData: function() {
    this.s('adjusted-spend',
        this.g('participating')*this.g('total-budget'));

    this.s('visitor-count',
        this.g('daily-searches')*30*this.g('program-months'));
  },

  calculateConversions: function() {
    this.s('potential-customers',
        ((this.g('conversion-rate')/100)*this.g('visitor-count')));

    this.s('total-sales', 
      this.g('average-sale')*this.g('potential-customers'));

    this.s('sales-profit', this.g('total-sales')*(this.g('profit-margin')/100));
  },

  calculateROI: function() {
    this.s('total-cost',
        (this.g('spend-per-month')*this.g('program-months'))+(3600*this.g('program-months')));
    this.s('roi', this.g('sales-profit')/this.g('total-cost')*100);
  },

  s: function(field, value) {
    this.elems[field].setValue(addCommas(Math.round(value*100)/100));
    this.vals[field] = parseFloat(new String(value).gsub('[^0-9\.]',''));
  },

  g: function(field) {
    return this.vals[field];
  },

  valueFor: function(field) {
    return parseFloat(new String(field.getValue()).gsub('[^0-9\.]',''));
  }

});

function addCommas(nStr)
{
	nStr += '';
	x = nStr.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}


