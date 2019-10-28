## hk-fps

A Nodejs module that help to generate QR code content string of the Hong Kong Fast Payment System.

## Installation

Install with npm

    npm install node-fps-hk
   
and in your code
	

    var fps = require('node-fps-hk')

## Usage
		

    //import module
    var fps = require('node-fps-hk')
	
	// set custom variables
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

	//generate qr content string
	var qrContent = fps.generate();
	
## Example

    cd ./example
    npm install
    node index.js

visit `http://localhost:8080`

## License
MIT

## Useful Links
Please find the specification of the QR Code used in FPS : [https://fps.hkicl.com.hk/eng/fps/merchants/qr_code.php](https://fps.hkicl.com.hk/eng/fps/merchants/qr_code.php)

The QR Code used the **CRC16 CCITT** check sum. Please find more details : [http://www.sunshine2k.de/articles/coding/crc/understanding_crc.html](http://www.sunshine2k.de/articles/coding/crc/understanding_crc.html)