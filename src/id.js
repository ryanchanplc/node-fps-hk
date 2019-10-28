module.exports = Object.freeze({
    /*
    * 00 Payload Format Indicator
    */
    PAYLOAD_FORMAT: '00',
    /*
    * 01 Point of Initiation Method
    */
    POINT_OF_INITIATION: '01',
    /*
    * 26 Reserved for the Faster Payment System for use in Hong Kong
    */
    MERCHANT_ACC_INFO: '26',
    /*
    * 26 00 Globally Unique Identifier
    */
    MERCHANT_ACC_INFO_GLOBALLY_UID: '00',
    /*
    * 26 02 Merchant ID
    */
    MERCHANT_ACC_INFO_MERCHANT_ID: '02',
    /* 
    * 52 Point of Initiation Method
    */
    MERCHANT_CAT_CODE: '52',
    /* 
    * 53 Transaction Currency
    */
    TRANSACTION_CURRENCY: '53',
    /*
    * 54 Transaction Amount
    */
    TRANSACTION_AMOUNT: '54',
    /*
    * 58 Country Code
    */
    COUNTRY_CODE: '58',
    /*
    * 59 Merchant Name
    */
    MERCHANT_NAME: '59',
    /*
    * 60 Merchant City
    */
    MERCHANT_CITY: '60',
    /*
    * 62 Additional Data Template
    */
    ADDITIONAL_DATA: '62',
    ADDITIONAL_DATA_BILL_NUMBER: '01',
    ADDITIONAL_DATA_MOBILE_NUMBER: '02',
    ADDITIONAL_DATA_STORE_LABEL: '03',
    ADDITIONAL_DATA_LOYALTY_NUMBER: '04',
    ADDITIONAL_DATA_REFERENCE_LABEL: '05',
    ADDITIONAL_DATA_CUSTOMER_LABEL: '06',
    ADDITIONAL_DATA_TERMINAL_LABEL: '07',
    ADDITIONAL_DATA_PURPOSE_OF_TRANSACTION: '08',
    ADDITIONAL_DATA_CUSTOMER_DATA_REQUEST: '09',
    /*
    * 63 Cyclic Redundancy Check
    */
    CRC_CHECK: '63', //63
    /*
    * 64 Merchant Information - Language Template 
    */
    MERCHANT_INFO: '64',

});