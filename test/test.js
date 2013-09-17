var expect = require('chai').expect;
var sldToJson = require('../sld');
var fs = require('fs');

describe('Test SLD to JSON transformation', function () {

    it('Parse SLD xml file', function () {
        var xml = fs.readFileSync('test/data/ploygonsymbolizer.xml','utf8');

        sldToJson.parse(xml, function (err, result )
        {
            expect(err).to.be.null;
            expect(result).not.to.be.null;
            //console.log(JSON.stringify(result, null, 2));
            expect(result).to.have.property('StyledLayerDescriptor');

        });
    });

    it('Parse SLD xml file and save it', function () {
        var xml = fs.readFileSync('test/data/ploygonsymbolizer.xml','utf8');

        sldToJson.parseToFile(xml, 'test/ploygonsymbolizer.json');
    });

});
