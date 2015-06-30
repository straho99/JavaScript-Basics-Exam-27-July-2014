/**
 * Created by Strahil on 11/10/14.
 */

var sampleInputs = [
  '<a href="http://softuni.bg" class="new"></a>',
    '<p>This text has no links</p>',
    'onclick="go()" href= "#">Forum</a></li>',
    '<!DOCTYPE html>',
    '<html>',
    '<head>',
    '<title>Hyperlinks</title>',
    '<link href="theme.css" rel="stylesheet" />',
    '</head>',
    '<body>',
    '<ul><li><a   href="/"  id="home">Home</a></li><li><a',
    'class="selected" href=/courses>Courses</a>',
    '</li><li><a href = ',
    '\'/forum\' >Forum</a></li><li><a class="href"',
    'onclick="go()" href= "#">Forum</a></li>',
    '<li><a id="js" href =',
    '\"javascript:alert(\'hi yo\')\"',
    'class="new">click</a></li>',
    '<li><a id=\'nakov\' href =',
    'http://www.nakov.com class=\'new\'>nak</a></li></ul>',
    '<a href="#empty"></a>',
    '<a id="href">href=\'fake\'<img src=\'http://',
    'abv.bg/i.gif\' ',
    'alt=\'abv\'/></a><a href="#">&lt;a href=\'hello\'&gt;</a>',
    '<!-- This code is commented:',
    '<a href="#commented">commentex hyperlink</a> -->',
    '</body>'

];

extractLinks(sampleInputs);

function extractLinks(lines) {
    var totalText = lines.join('');
    var aTags = [];
    var openingTag = totalText.indexOf('<a');
    while (openingTag >= 0 ) {
        var closingTag = totalText.indexOf('>', openingTag);
        var aTag = totalText.substring(openingTag+2, closingTag);
        aTags.push(aTag);
        openingTag = totalText.indexOf('<a', closingTag);
    }

    var hrefs =[];
    for (var i in aTags) {
        var regExQuotes = new RegExp('href\\s?=\\s?[\'"]+[\\w.:/#()\' ]+[\'"]+', 'g');
        var foundHREF = aTags[i].match(regExQuotes);
        if (foundHREF) {
            hrefs.push(foundHREF);
        } else {
            var regExNoQuotes = new RegExp('href\\s?=\\s?[\\w.:/#]+', 'g');
            foundHREF = aTags[i].match(regExNoQuotes);
            if (foundHREF) {
                hrefs.push(foundHREF);
            }
        }
    }

    for (var i in hrefs) {
        hrefs[i] = hrefs[i].toString().replace(/href\s?=\s?/, '');
        hrefs[i] = hrefs[i].toString().replace(/^[\'"]/g, '');
        hrefs[i] = hrefs[i].toString().replace(/[\'"]$/g, '');
    }
    console.log(hrefs.join('\n'));
}

function extractLinks2(input) {
    var html = input.join('\n');
    var regex = /<a\s+([^>]+\s+)?href\s*=\s*('([^']*)'|"([^"]*)|([^\s>]+))[^>]*>/g;
    var match;
    while (match = regex.exec(html)) {
        var hrefValue = match[3];
        if (hrefValue == undefined) {
            var hrefValue = match[4];
        }
        if (hrefValue == undefined) {
            var hrefValue = match[5];
        }
        console.log(hrefValue);
    }
}