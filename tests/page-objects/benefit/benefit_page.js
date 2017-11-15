var benefit = {
  url: function set_url() {
    return '/select';
  },
  elements: {
    pageTitleBizzyBenefit: 'Bizzy Benefit - Bizzy'
  },
  commands: [{
    assertPageTitleBizzyBenefit: function() {
      return this.assert.title(benefit.elements.pageTitleBizzyBenefit);
    }
  }]
}

module.exports = benefit;
