const amount = document.getElementById('amount');
const entryPrice = document.getElementById('entryPrice');
const exitPrice = document.getElementById('exitPrice');
const stopLoss = document.getElementById('stopLoss');
const lev = document.getElementById('lev');
const dollar = document.getElementById('dollar');
const liq = document.getElementById('liq');

const amountPreview = document.getElementById('amountPreview');
const entryPricePreview = document.getElementById('entryPricePreview');
const exitPricePreview = document.getElementById('exitPricePreview');
const stopLossPreview = document.getElementById('stopLossPreview');
const levPreview = document.getElementById('levPreview');
const dollarPreview = document.getElementById('dollarPreview');
const liqPreview = document.getElementById('liqPreview');

const diff = document.getElementById('diff');
const diff2 = document.getElementById('diff2');
const gross = document.getElementById('gross');
const RR = document.getElementById('RR');
const lossPercentage = document.getElementById('lossPercentage');
const totalLoss = document.getElementById('totalLoss');
const profitPercentage = document.getElementById('profitPercentage');
const totalProfit = document.getElementById('totalProfit');
const lossPercentageLev = document.getElementById('lossPercentageLev');
const totalLossLev = document.getElementById('totalLossLev');
const profitPercentageLev = document.getElementById('profitPercentageLev');
const totalProfitLev = document.getElementById('totalProfitLev');
const totalLossLevInToman = document.getElementById('totalLossLevInToman');
const totalProfitLevInToman = document.getElementById('totalProfitLevInToman');

function commafy( num ) {
    var str = num.toString().split('.');
    if (str[0].length >= 5) {
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
    if (str[1] && str[1].length >= 5) {
        str[1] = str[1].replace(/(\d{3})/g, '$1 ');
    }
    return str.join('.').split(' ')[0];
}

const update = () => {
    amountPreview.innerText = amount?.value;
    entryPricePreview.innerText = entryPrice?.value;
    exitPricePreview.innerText = exitPrice?.value;
    stopLossPreview.innerText = stopLoss?.value;
    levPreview.innerText = lev?.value;
    dollarPreview.innerText = dollar?.value;
    liqPreview.innerText = liq?.value;

    const _diff = exitPrice?.value - entryPrice?.value
    const _diff2 = entryPrice?.value - stopLoss?.value
    const _gross = amount?.value * lev?.value

    console.log(totalProfit?.value);
    console.log(totalLoss?.value);

    const _lossPercentage = (_diff2) * 100 / entryPrice?.value
    const _totalLoss = _lossPercentage * amount?.value / 100
    const _profitPercentage = (_diff) * 100 / entryPrice?.value
    const _totalProfit = _profitPercentage * amount?.value / 100

    const _lossPercentageLev = _lossPercentage * lev?.value
    const _totalLossLev = _totalLoss * lev?.value
    const _profitPercentageLev = _profitPercentage * lev?.value
    const _totalProfitLev = _totalProfit * lev?.value
    const _totalLossLevInToman = _totalLossLev * dollar?.value
    const _totalProfitLevInToman = _totalProfitLev * dollar?.value
    const _RR = _totalLoss / _totalProfit

    
    diff.innerText = commafy(_diff);
    diff2.innerText = commafy(_diff2);
    gross.innerText = commafy(_gross);
    
    lossPercentage.innerText = commafy(_lossPercentage);
    // totalLoss.innerText = commafy(_totalLoss);
    profitPercentage.innerText = commafy(_profitPercentage);
    // totalProfit.innerText = commafy(_totalProfit);
    
    // lossPercentageLev.innerText = commafy(_lossPercentageLev);
    totalLossLev.innerText = commafy(_totalLossLev);
    // profitPercentageLev.innerText = commafy(_profitPercentageLev);
    totalProfitLev.innerText = commafy(_totalProfitLev);

    totalLossLevInToman.innerText = commafy(_totalLossLevInToman);
    totalProfitLevInToman.innerText = commafy(_totalProfitLevInToman);
    RR.innerText = commafy(_RR);
}