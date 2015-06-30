/**
 * Created by Strahil on 11/9/14.
 */
//
//var testString = [
//    'abcdexgh',
//    'bbbdxxxh',
//    'abcxxxxx'
//];
//var testString2 = [
//    'aa',
//    'aaa',
//    'aaaa',
//    'aaaaa'
//];
//revealTriangles(testString);

function revealTriangles(lines) {
    var output = [];
    for (var i = 0; i < lines.length; i++) {
        output.push([]);
        for (var j = 0; j < lines[i].length; j++) {
            output[i].push(lines[i][j]);
        }
    }
    for (var i = 0; i < lines.length - 1; i++) {
        for (var j = 0; j < lines[i].length; j++) {
            var a = lines[i][j];
            var b = lines[i + 1][j - 1];
            var c = lines[i + 1][j];
            var d = lines[i + 1][j + 1];
            if (a == b && b == c && c == d) {
                output[i][j] = '*';
                output[i + 1][j - 1] = '*';
                output[i + 1][j] = '*';
                output[i + 1][j + 1] = '*';
            }
        }
    }
    for (var i in output) {
        console.log(output[i].join(''));
    }
}