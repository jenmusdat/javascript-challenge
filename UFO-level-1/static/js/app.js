// from data.js
var ufoData = data;

// Use D3 to select the table body
var tbody = d3.select("tbody");

// Select the button
var button = d3.select("#filter-btn");

// Create event handlers
button.on("click", runEnter);

// Complete the event handler function for the form
function runEnter() {
  tbody.html("");
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  var filterData = data.filter((obj) => obj.datetime == inputValue);
  console.log(filterData);
  displayufodata(filterData);
  console.log(inputValue);
}

//add a function here
function displayufodata(ufoData) {
  //loop through the cells to add all the data
  ufoData.forEach((line) => {
    // Append one table row `tr` to the table body
    var row = tbody.append("tr");

    Object.values(line).forEach((values) => {
      var cell = row.append("td");
      cell.text(values);
    });
  });
}
displayufodata(data);
