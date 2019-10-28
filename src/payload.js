var Payload = function (_id, _value) {
    this.id = _id;
    this.value = _value;

    if (this.value)
        this.length = _value.length;
    else
        this.length = 0;
};

Payload.prototype.toString = function () {
    if (this.value == "")
        return ""
    else
        return this.id + this.pad(parseInt(this.length)) + this.value;
}

Payload.prototype.pad = function (num) {
    return (num < 10) ? '0' + num.toString() : num.toString();
}

module.exports = Payload;