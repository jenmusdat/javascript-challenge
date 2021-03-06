// from data.js
var ufoData = data;

// Use D3 to select the table body
var tbody = d3.select("tbody");

// Select the button
var button1 = d3.select("#filter-btn-date");
//var button2 = d3.select("#filter-btn-city");

// Create event handlers
button1.on("click", runEnter);
//else button2.on("click", runEnter);

// Complete the event handler function for the form
function runEnter() {
  tbody.html("");
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  var filterData = data.filter((obj) => obj.datetime == inputDateValue);

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#city");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  filterData = filterData.filter((obj) => obj.city == inputCityValue);
  console.log(filterData);
  displayufodata(filterData);
  console.log(inputDateValue, inputCityValue);
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
