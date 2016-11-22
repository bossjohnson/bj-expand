# bj-expand

*An AngularJS directive to simplify the creation of expandable and contractable elements.*

##Usage

By default, this directive assumes that you have created a global variable named `app` to which you have assigned the main 
application module.  If this is not the case in your application, simply replace `app` on line 5 of the directive with the
module for which you wish to use the directive.

##Attributes
* `bj-expand`: Marks an element as expandable and contractable.  This element begins in a contracted state by default.
* `bj-expand-duration`: Sets the duration (in seconds) of the expand/contract animation.  Defaults to .25s.
* `bj-expand-direction`: Sets the direction of expansion/contraction.  Possible values are `horizontal` or `vertical`. 
Defaults to `vertical`.
* `bj-expand-trigger` *(required)* : Takes a CSS selector to identify the element which, when clicked, triggers the expansion
or contraction of the `bj-expand` element.

###Comments and suggestions welcome!
