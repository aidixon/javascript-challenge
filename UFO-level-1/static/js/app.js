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


// Create table that filters the data
function filtertable() {
    // Variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value;
    table = document.getElementById("ufo-table");
    tr = table.getElementsByTagName("tr");

    // For loop to iterate through rows
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];

        // Conditional to hide data that does not match filter
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.indexOf(filter) > -1) {
                tr[i].style.display = "";
            }
            else {
                tr[i].style.display = "none"
            }
        }
    }
}