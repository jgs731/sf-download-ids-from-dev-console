javascript: (function() {
    // var checkboxes = document.querySelectorAll("tbody > tr > td > label")
    // checkboxes[7].click(); // Selects Debug Mode checkbox 
    var tStamp = Date.now().toString();
    var executionLogRow = document.querySelectorAll("tbody > tr > td.x-grid-cell > div");
    var userDebugStatement; // variable used to store debug statement for further processing
    
    for (let j = 0; j < executionLogRow.length; j++)
        if((executionLogRow[j].textContent).includes("|DEBUG|")) {
            userDebugStatement = executionLogRow[j];
        }
    
    var debugRow = userDebugStatement.textContent.split("|DEBUG|"); // splits debug statement into 2 portions, [1] will contain IDs
    
    var listOfIds = [debugRow[1].split(", ")]; // creates array of IDs
    let csvContent = "data:text/csv;charset=utf-8,";
    
    listOfIds.forEach(function(rowArray) {
       let row = rowArray.join(",");
       csvContent += row + "\n";
    });
    
    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "my_data" + tStamp + ".csv");
    document.body.appendChild(link); // Required for FF
    link.click();
}
)();