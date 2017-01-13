"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (req, res, next) => {
    console.log(`${req.method} - ${req.path}`);
    next();
};
//# sourceMappingURL=all.js.map