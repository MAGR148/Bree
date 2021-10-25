// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
const images = require.context('../images', true)
const imagePath = (name) => images(name, true)

import Rails from "@rails/ujs"
import "@hotwired/turbo-rails"

// import * as ActiveStorage from "@rails/activestorage"
// import "channels"
import '../stylesheets/application.scss'
import "controllers"
<<<<<<< HEAD

//Import chartkick
import "chartkick/chart.js"

//Import AlpineJS as module with the documentation
import Alpine from 'alpinejs'

Rails.start()

window.Alpine = Alpine
 
Alpine.start()
=======

//Import AlpineJS as module with the documentation
import Alpine from 'alpinejs'
>>>>>>> Grouping imports and sorting gems alphabetically

<<<<<<< HEAD

=======
//Import chartkick with the documentation
import "chartkick/chart.js"
<<<<<<< HEAD
>>>>>>> Add Chartkick and AlpineJS as a module
=======

Rails.start()

window.Alpine = Alpine
 
Alpine.start()
>>>>>>> Grouping imports and sorting gems alphabetically
