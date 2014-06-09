(function() {

  var app = angular.module('store', []);

  app.controller('StoreController', function() {
    this.products = gems;
  });

  app.controller('PanelController', function() {
    this.tab = 1;

    this.selectTab = function(setTab) {
      this.tab = setTab;
    };

    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };
  });

  app.controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(product) {
      product.reviews ? product.reviews.push(this.review) : (product.reviews = [this.review]);
      this.review = {};
    };
  });

  var gems = [
    {
      name: 'Ruby',
      price: 2.59,
      description: 'Ruby is red.',
      canPurchase: true,
      soldOut: false,
      images: [
        {
          full: 'http://placehold.it/350x150',
          thumb: 'http://placehold.it/100x50'
        },
        {
          full: 'http://placehold.it/350x150',
          thumb: 'http://placehold.it/100x50'
        }
      ],
      reviews: [
        {
          stars: 5,
          body: "I love this gem!",
          author: "bob@thebob.com"
        },
        {
          stars: 3,
          body: "Slightly useful",
          author: "grumpy@latetowork.net"
        }
      ]
    },
    {
      name: 'PHP',
      price: 1.50,
      description: 'PHP is gray.',
      canPurchase: false,
      soldOut: false,
      images: [
        {
          full: 'http://placehold.it/350x150',
          thumb: 'http://placehold.it/100x50'
        },
        {
          full: 'http://placehold.it/350x150',
          thumb: 'http://placehold.it/100x50'
        }
      ]
    }
  ];
})();