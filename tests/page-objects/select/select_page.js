var select = {
  url: function set_url() {
    return '/select';
  },
  elements: {
    pageTitleBizzySelect: 'Bizzy Select - Exclusive Procurement Solution - Bizzy'
  },
  commands: [{
    assertPageTitleBizzySelect: function() {
      return this.assert.title(select.elements.pageTitleBizzySelect);
    }
  }]
}

module.exports = select;
