/**
 * Created by Strahil on 11/9/14.
 //*/

function solve(args) {
    var start = parseInt(args[0]);
    var end = parseInt(args[1]);
    var tableHTML = '<table>' + '\n' +
        '<tr><th>Num</th><th>Square</th><th>Fib</th></tr>' + '\n';
    for (var i = start; i <= end; i++) {
        tableHTML += '<tr><td>' + i + '</td><td>' + i * i + '</td><td>';
        if (isFibonacci(i)) {
            tableHTML += 'yes';
        } else {
            tableHTML += 'no';
        }
        tableHTML += '</td></tr>' + '\n';
    }
    tableHTML += '</table>';
    console.log(tableHTML);

    function isFibonacci(number) {
        var formula1= Math.sqrt(5 * number*number + 4);
        var formula2= Math.sqrt(5 * number*number - 4);
        if (Math.round(formula1) == formula1 || Math.round(formula2) == formula2) {
            return true;
        } else {
            return false;
        }
    }
}

