// from data.js
var tableData = data;

// Select the table for the data to populate
var tbody = d3.select("tbody");

console.log(tableData);

// Iterate through data and insert into table
data.forEach(function(ufosighting) {
    console.log(ufosighting);
    var rows = tbody.append("tr");
    
    Object.entries(ufosighting).forEach(function([key, value]) {
        console.log(key,value);
        
        var cells = rows.append("td");
        cells.text(value);
    });
});
