const Logic = require('../');
const assert = require('assert');

class LogicOr extends Logic {
    constructor(item) {
        super();
        assert(item instanceof Logic, 'bad logic NOT');
        this._item = item;
    }

    toSql() {
        return `(NOT ${this._item.toSql()})`;
    }

    toParams() {
        return this._item.toParams();
    }
}

module.exports = (item) => {
    return new LogicOr(item);
}