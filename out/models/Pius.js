"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuidv4_1 = require("uuidv4");
class Piu {
    constructor(text, creationDate, updateDate) {
        this.piuId = (0, uuidv4_1.uuid)();
        this.text = text;
        this.creationDate = creationDate;
        this.updateDate = updateDate;
    }
}
exports.default = Piu;
//# sourceMappingURL=Pius.js.map