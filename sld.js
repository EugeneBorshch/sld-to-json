/*! sld v0.0.0 - MIT license */

'use strict';

/**
 * Module dependencies
 */

/**
 * Module exports
 */

var sldToJson = (function () {
    'use strict';

    var xml2js = require('xml2js');
    var fs = require('fs');

    var parser = new xml2js.Parser({trim:true, normalize:true, mergeAttrs:true, charkey:'val'});


    return {
        parse:function (xml, onComplete) {
            parser.parseString(xml, function (err, result) {
                onComplete(err, result);
            })
        },

        parseToFile:function (xml, output) {
            parser.parseString(xml, function (error, result) {
                fs.writeFile(output, JSON.stringify(result, null, 2), function (err) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("File saved: ", output);
                    }
                });
            })
        }
    };
})();

if (typeof module !== 'undefined') module.exports = sldToJson;