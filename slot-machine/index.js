"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var prompts = require('prompts');
var coins = [
    { title: '2.- EUR', value: 2 },
    { title: '1.- EUR', value: 1 },
];
var winningLines = [
    { positions: [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }] },
    { positions: [{ x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 }] },
    { positions: [{ x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }] },
    { positions: [{ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 2 }] },
    { positions: [{ x: 2, y: 0 }, { x: 1, y: 1 }, { x: 0, y: 2 }] },
    { positions: [{ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 0, y: 2 }] },
    { positions: [{ x: 2, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 2 }] },
    { positions: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }] },
    { positions: [{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }] },
    { positions: [{ x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }] },
];
//
var ROWS = 3;
var COLUMNS = 3;
var symbols = [
    { symbol: 'J', value: 5 },
    { symbol: 'Q', value: 7 },
    { symbol: 'K', value: 10 },
    { symbol: 'A', value: 15 },
    { symbol: '7', value: 50 },
    { symbol: '♤', value: 1 },
    { symbol: '♧', value: 1 },
    { symbol: '♥', value: 1 },
    { symbol: '♦', value: 1 },
];
var board = [];
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var _loop_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _loop_1 = function () {
                    var bank, insertCoins, bankResponse, continueResponse, keepSpinning, spinResponse, row, el;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                bank = 0;
                                insertCoins = true;
                                _b.label = 1;
                            case 1:
                                if (!insertCoins) return [3 /*break*/, 4];
                                return [4 /*yield*/, prompts({
                                        type: 'select',
                                        name: 'selection',
                                        message: '\nINSERT COINS\n',
                                        choices: coins
                                    })];
                            case 2:
                                bankResponse = _b.sent();
                                bank = bank + bankResponse.selection;
                                console.log("\nYou inserted ".concat(bank, " EUR\n"));
                                return [4 /*yield*/, prompts({
                                        type: 'toggle',
                                        name: 'value',
                                        message: '\nDo You want to insert more coins?\n',
                                        initial: true,
                                        active: 'yes',
                                        inactive: 'no'
                                    })];
                            case 3:
                                continueResponse = _b.sent();
                                insertCoins = continueResponse.value;
                                return [3 /*break*/, 1];
                            case 4:
                                keepSpinning = true;
                                _b.label = 5;
                            case 5:
                                if (!(keepSpinning && bank > 0)) return [3 /*break*/, 7];
                                return [4 /*yield*/, prompts({
                                        type: 'toggle',
                                        name: 'value',
                                        message: 'SPIN?',
                                        initial: 1,
                                        active: 'SPIN',
                                        inactive: 'Cash out'
                                    })];
                            case 6:
                                spinResponse = _b.sent();
                                keepSpinning = spinResponse.value;
                                if (!keepSpinning) {
                                    console.log('\n\nCashout: ', bank, ' EUR \n-------\n------\n');
                                    return [3 /*break*/, 7];
                                }
                                bank--;
                                console.log('\nBank: ', bank, ' EUR');
                                for (row = 0; row < ROWS; row++) {
                                    board[row] = [];
                                    for (el = 0; el < COLUMNS; el++) {
                                        board[row][el] = symbols[Math.floor(Math.random() * (symbols.length))];
                                    }
                                    ;
                                }
                                console.log("\nSPINNING!!\n");
                                board.forEach(function (row) {
                                    var boardElements = [];
                                    row.forEach(function (el) {
                                        boardElements.push(el.symbol);
                                    });
                                    console.log(boardElements.join('-'));
                                });
                                winningLines.forEach(function (line) {
                                    var isWin = [];
                                    line.positions.forEach(function (el) {
                                        isWin.push(board[el.x][el.y]);
                                    });
                                    if (isWin.every(function (val, i, line) { return val === line[0]; })) {
                                        console.log(isWin[0].symbol.repeat(ROWS), ' line pays\n ', isWin[0].value, 'EUR\n');
                                        bank = bank + isWin[0].value;
                                    }
                                });
                                return [3 /*break*/, 5];
                            case 7: return [2 /*return*/];
                        }
                    });
                };
                _a.label = 1;
            case 1:
                if (!true) return [3 /*break*/, 3];
                return [5 /*yield**/, _loop_1()];
            case 2:
                _a.sent();
                return [3 /*break*/, 1];
            case 3: return [2 /*return*/];
        }
    });
}); })();
