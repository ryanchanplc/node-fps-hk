
## node-hk-fps
A Nodejs module that help to generate QR code content string of the Hong Kong Faster Payment System. Please refer the [blog](https://medium.com/@ryanchanplc/understanding-the-qr-code-used-in-hong-kong-faster-payment-system-6cc1671405d2)

## Installation

Install with npm
```  
npm install node-fps-hk
```
and in your code
```javascript
var  fps = require('node-fps-hk')
```

## Usage

```javascript
//import module
var  fps = require('node-fps-hk')

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
var  qrContent = fps.generate();
```

## Example
```
cd ./example
npm install
node index.js
```
visit `http://localhost:8080`

## License
[MIT](https://github.com/ryanchanplc/node-fps-hk/blob/master/LICENSE)

## Useful Links
Please find the specification of the QR Code used in FPS at:
[https://fps.hkicl.com.hk/eng/fps/merchants/qr_code.php](https://fps.hkicl.com.hk/eng/fps/merchants/qr_code.php)

The QR Code content string used in FPS contains the **CRC16 CCITT** check sum.
Please find more details at: [http://www.sunshine2k.de/articles/coding/crc/understanding_crc.html](http://www.sunshine2k.de/articles/coding/crc/understanding_crc.html)
