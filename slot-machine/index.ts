import { validateHeaderName } from "http";
import { waitForDebugger } from "inspector";
import { type } from "os";

const prompts = require('prompts');

type Coins = {
    title : string,
    value : number,
}

const coins: Coins[] = [
    {title : '2.- EUR', value: 2},
    {title : '1.- EUR', value: 1},
];

type Positions = {
    x : number,
    y : number,
}

type Line = {
    positions : Positions[]
}
const winningLines : Line[] = [
    {positions: [{x: 0, y :0}, {x: 0, y: 1}, {x: 0, y: 2}]},
    {positions: [{x: 1, y: 0}, {x: 1, y: 1}, {x: 1, y: 2}]},
    {positions: [{x: 2, y: 0}, {x: 2, y: 1}, {x: 2, y: 2}]},
    {positions: [{x: 0, y: 0}, {x: 1, y: 1}, {x: 2, y: 2}]},
    {positions: [{x: 2, y: 0}, {x: 1, y: 1}, {x: 0, y: 2}]},
    {positions: [{x: 0, y: 0}, {x: 1, y: 1}, {x: 0, y: 2}]},
    {positions: [{x: 2, y: 0}, {x: 1, y: 1}, {x: 2, y: 2}]},
    {positions: [{x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}]},
    {positions: [{x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}]},
    {positions: [{x: 0, y: 2}, {x: 1, y: 2}, {x: 2, y: 2}]},
];

type SlotSymbol = {
    symbol: string,
    value: number,
}
//
const ROWS: number = 3;
const COLUMNS: number = 3;

const symbols: SlotSymbol[] = [
    {symbol: 'J', value: 5},
    {symbol: 'Q', value: 7},
    {symbol: 'K', value: 10},
    {symbol: 'A', value: 15},
    {symbol: '7', value: 50},
    {symbol: '♤', value: 1},
    {symbol: '♧', value: 1},
    {symbol: '♥', value: 1},
    {symbol: '♦', value: 1},
];

let board: SlotSymbol[][] = [];

(async () => {
    while(true){

        let bank:number = 0;
    
        let insertCoins : boolean = true
    
        while(insertCoins){
            const bankResponse = await prompts({
                type: 'select',
                name: 'selection',
                message: '\nINSERT COINS\n',
                choices: coins,
                });
    
            bank = bank + bankResponse.selection;
    
            console.log(`\nYou inserted ${bank} EUR\n`)
    
            const continueResponse = await prompts({
                type: 'toggle',
                name: 'value',
                message: '\nDo You want to insert more coins?\n',
                initial: true,
                active: 'yes',
                inactive: 'no'
            });
    
            insertCoins = continueResponse.value
            }
    
        // chance of winning ??
        let keepSpinning:boolean = true
        while(keepSpinning && bank > 0){
            const spinResponse = await prompts({
                type: 'toggle',
                name: 'value',
                message: 'SPIN?',
                initial: 1,
                active: 'SPIN',
                inactive: 'Cash out'
            });
            keepSpinning = spinResponse.value;
    
            if (!keepSpinning){
                console.log('\n\nCashout: ', bank, ' EUR \n-------\n------\n');
                break
            }
    
            bank--
            console.log('\nBank: ', bank, ' EUR')
            for (let row = 0; row < ROWS; row++) {
                board[row] = [];
                for (let el = 0; el < COLUMNS; el++) {
                    board[row][el] = symbols[Math.floor(Math.random()*(symbols.length))];
                };
                
            }
        
            console.log("\nSPINNING!!\n");
            board.forEach(row => {
                let boardElements:string[] = [];
                row.forEach(el => {
                    boardElements.push(el.symbol);
                })
                console.log(boardElements.join('-'));
            })
        
            winningLines.forEach((line) => {
                let isWin: SlotSymbol[] = [];
                line.positions.forEach(el => {
                    isWin.push(board[el.x][el.y]);
                })
                if (isWin.every((val, i, line) => val === line[0])){
                    console.log(isWin[0].symbol.repeat(ROWS), ' line pays\n ' , isWin[0].value, 'EUR\n')
                    bank = bank + isWin[0].value;
                }
            })
        }
    }
})();