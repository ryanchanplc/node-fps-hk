const ID = require("./id");
var Payload = require("./payload");
var CRC = require("./crc");

var _uid = "hk.com.hkicl";
var _merchantID = "";
var _transactionAmount = "";
var _billNumber = "";
var _mobileNumber = "";
var _storeLabel = "";
var _loyaltyNumber = "";
var _referenceLabel = "";
var _customerLabel = "";
var _terminalLabel = "";
var _purposeOfTransaction = "";
var _additionalCustomerDataRequest = "";

function getPayLoadFormat() {
    return new Payload(ID.PAYLOAD_FORMAT, "01").toString();
}

function getPointofInitiation() {
    if (_transactionAmount || _transactionAmount != "") {
        return new Payload(ID.POINT_OF_INITIATION, "12").toString();
    } else {
        return new Payload(ID.POINT_OF_INITIATION, "11").toString();
    }
}

function getMerhantCategoryCode() {
    return new Payload(ID.MERCHANT_CAT_CODE, "0000").toString();
}

function getTransactionCurrency() {
    return new Payload(ID.TRANSACTION_CURRENCY, "344").toString();
}

function getCountryCode() {
    return new Payload(ID.COUNTRY_CODE, "HK").toString();
}

function getMerchantName() {
    return new Payload(ID.MERCHANT_NAME, "NA").toString();
}

function getMerchantCity() {
    return new Payload(ID.MERCHANT_CITY, "HK").toString();
}

function getMerchantAccountInfo() {
    var uid = new Payload(ID.MERCHANT_ACC_INFO_GLOBALLY_UID, _uid).toString();
    var merc = new Payload(ID.MERCHANT_ACC_INFO_MERCHANT_ID, _merchantID).toString();
    return new Payload(ID.MERCHANT_ACC_INFO, uid + merc).toString();
}

function getTransactionAmount() {
    return new Payload(ID.TRANSACTION_AMOUNT, _transactionAmount).toString();
}

function getAdditionalInformation() {
    var payload = ""
    payload += new Payload(ID.ADDITIONAL_DATA_BILL_NUMBER, _billNumber);
    payload += new Payload(ID.ADDITIONAL_DATA_MOBILE_NUMBER, _mobileNumber);
    payload += new Payload(ID.ADDITIONAL_DATA_STORE_LABEL, _storeLabel);
    payload += new Payload(ID.ADDITIONAL_DATA_LOYALTY_NUMBER, _loyaltyNumber);
    payload += new Payload(ID.ADDITIONAL_DATA_REFERENCE_LABEL, _referenceLabel);
    payload += new Payload(ID.ADDITIONAL_DATA_CUSTOMER_LABEL, _customerLabel);
    payload += new Payload(ID.ADDITIONAL_DATA_TERMINAL_LABEL, _terminalLabel);
    payload += new Payload(ID.ADDITIONAL_DATA_PURPOSE_OF_TRANSACTION, _purposeOfTransaction);
    payload += new Payload(ID.ADDITIONAL_DATA_CUSTOMER_DATA_REQUEST, _additionalCustomerDataRequest);

    return new Payload(ID.ADDITIONAL_DATA, payload).toString();
}

function addCheckSum(string) {
    var checkSum = getCheckSUM(string + ID.CRC_CHECK + "04");
    return new Payload(ID.CRC_CHECK, checkSum).toString();
}

function getCheckSUM(string) {
    var input = Buffer.from(string, 'utf8');
    var output = CRC.computeCheckSum(input, 0xffff);
    var o = Buffer.from([output >> 8, output & 0xff]);
    return o.toString('hex').toUpperCase();
}

function setMerchantID(value) {
    _merchantID = value;
}

function setTransactionAmount(value) {
    _transactionAmount = parseFloat(value).toFixed(2).toString();
}
function setBillNumber(value) {
    _billNumber = value;
}
function setMobileNumber(value) {
    _mobileNumber = value;
}
function setStoreLabel(value) {
    _storeLabel = value;
}

function setLoyaltyNumber(value) {
    _loyaltyNumber = value;
}

function setReferenceLabel(value) {
    _referenceLabel = value;
}

function setCustomerLabel(value) {
    _customerLabel = value;
}

function setTerminalLabel(value) {
    _terminalLabel = value;
}

function setPurposeOfTransaction(value) {
    _purposeOfTransaction = value;
}

function setAdditionalCustomerDataRequest(value) {
    _additionalCustomerDataRequest = value;
}

function generate() {
    var result = "";
    result += getPayLoadFormat();
    result += getPointofInitiation();
    result += getMerchantAccountInfo();
    result += getMerhantCategoryCode();
    result += getTransactionCurrency();
    result += getTransactionAmount();
    result += getCountryCode();
    result += getMerchantName();
    result += getMerchantCity();
    result += getAdditionalInformation();
    result += addCheckSum(result);

    return result;
}

module.exports = {
    setAdditionalCustomerDataRequest,
    setBillNumber,
    setCustomerLabel,
    setMerchantID,
    setMobileNumber,
    setPurposeOfTransaction,
    setLoyaltyNumber,
    setReferenceLabel,
    setStoreLabel,
    setTerminalLabel,
    setTransactionAmount,
    generate
}