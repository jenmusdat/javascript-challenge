// from data.js
var tableData = data;

// Use D3 to select the table body
var tbody = d3.select("tbody");


// Append one table row `tr` to the table body
var row = tbody.append("tr");

//loop through the cells to add all the data
data.forEach(function(data))=>{

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

}