function computeCheckSum(input, seed) {
    var result = seed;
    var temp;
    var crc_table = generateCRC16Table();
    for (var i = 0, len = input.length; i < len; ++i) {
        temp = (input[i] ^ (result >> 8)) & 0xff;
        result = crc_table[temp] ^ (result << 8);
    }
    return result;
}

function generateCRC16Table() {
    var table = [];
    var poly = 0x1021;
    var temp;
    for (var i = 0; i < 256; ++i) {
        temp = (i << 8) & 0xFFFF;
        for (var j = 0; j < 8; ++j) {
            var bit = (temp & 0x8000)
            temp <<= 1;
            if (bit) {
                temp ^= poly;
            }
        }
        table[i] = temp & 0xFFFF;
    }
    return table;
}

module.exports = {
    computeCheckSum: computeCheckSum
};
