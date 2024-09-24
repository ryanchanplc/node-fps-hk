var should = require('should');
var rewire = require("rewire");
var crc = rewire('../src/crc');
var fps = rewire('../src/index');
const expected_CRC = require('./crctable.js');
const testContent = "00020101021226270012hk.com.hkicl0207000000152040000530334454075000.005802HK5902NA6002HK62680104000202081234567803040003040400040504ABCD0604000507040006080400076304"
const checkSUM = "8D1D";
describe('#checkCRCTable', () => {

    it('check the crc generated table', done => {
        var generateCRC16Table = crc.__get__('generateCRC16Table');
        var crcArray = generateCRC16Table();
        crcArray.should.eql(expected_CRC)
        done();
    })

    it('check crc checksum', done => {
        fps.setMerchantID("0000001");
        fps.setBillNumber("0002");
        fps.setStoreLabel("0003");
        fps.setLoyaltyNumber("0004");
        fps.setCustomerLabel("0005");
        fps.setTerminalLabel("0006");
        fps.setPurposeOfTransaction("0007");
        fps.setMobileNumber("12345678");
        fps.setTransactionAmount("5000");
        fps.setReferenceLabel("ABCD");
        var qrContent = fps.generate();

        qrContent.should.equal(testContent + checkSUM)
        done();
    })
});