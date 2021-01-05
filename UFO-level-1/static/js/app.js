// from data.js
var ufoData = data;

// Use D3 to select the table body
var tbody = d3.select("tbody");

// Select the button
var button = d3.select("#button");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("enter date");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
}
// Append one table row `tr` to the table body
var row = tbody.append("tr");

//add a function here
function displayufodata(ufoData){
}
//loop through the cells to add all the data
data.forEach(function(data) => { 

// Append one cell for the student name
var cell = row.append("td")
cell.text(ufo.datetime)

cell = row.append("td")
cell.text(ufo.city)

cell = row.append("td")
cell.text(ufo.state)

cell = row.append("td")
cell.text(ufo.country)

cell = row.append("td")
cell.text(ufo.shape)

cell = row.append("td")
cell.text(ufo.durationMinutes)

cell = row.append("td")
cell.text(ufo.comments)

})
})