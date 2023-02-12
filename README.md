# DISCORD PLACEHOLDER

### This is a simple placeholder package for **discord.js**.
 You can install this package with:
 ```
 npm i discord-placeholders
 ```
 >Below are some code examples using this package:
 ```js
 const client = new discord.Cient()
 const placeholder = require('discord-placeholder')

 let placeholder = {
   //Use @ in front of the placeholder name to tag a user
    "@{user}":"1234",
    //Use # in front of the placeholder name to tag a channel
    "#{channel}":"1234",
    //Use & in front of the placeholder name to tag a role
    "&{role}":"1234",
    //Use nothing to replace 'example' with 'Hi'
    "example":"Hi"
 }

 let string = "example , @{user}.You can read the rule in #{channel}. &{role}"

 placeholder = placeholder.placeHolder(string,placeholder)
 //placeholder.placeHolder(string,placeholder) will return the string with placeholder applied
 ```
 # For any problem you can contact me on [discord](htts://discord.com/): Maurizio#0268.
