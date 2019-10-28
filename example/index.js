var fps = require('node-fps-hk')
var qrimage = require('qr-image');
var http = require('http');

http.createServer(function (req, res) {
    if (req.url == '/') {
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
        var string = fps.generate();
        var code = qrimage.image(string, { type: 'png' });
        res.setHeader('Content-type', 'image/png');  //sent qr image to client side
        code.pipe(res);
    }
}).listen(8080);
