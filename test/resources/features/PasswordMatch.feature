Feature: Password validation

    Scenario: User enters different passwords
       Given User is on Homepage
       When User adds first item to cart
       And User clicks to cart
       And User proceeds with Checkout
       And User clicks to Register account
       And User fills the form with different passwords
       Then message "Passwords doesnot match appears"