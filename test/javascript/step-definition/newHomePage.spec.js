const { Given, When, Then } = require('@cucumber/cucumber');
const newhomeobject = require('../pageobjects/NewHome.page');


Given(/^User is on Homepage$/,()=>{
    var title = browser.getTitle();
    //console.log(title);
    newhomeobject.open(); 
   // homeobject.adminLogin();
    //homeobject.verifyCurrentPage();
});
When(/^User adds first item to cart$/,()=>{
    newhomeobject.addFirstItemToCart();
});



When(/^Select the home button$/,()=>{
    homeobject.navigateToHomepage();
});


Then(/^User moves to home page$/,()=>{
    homeobject.verifyHomePage();
})