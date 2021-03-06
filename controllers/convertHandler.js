/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    const num = input.replace(/[a-zA-z]+/, '');
    if(!num) return 1;
    const m = num.match(/\//g);
    if(m && m.length > 1)
      return 'invalid number';
    try
      {
        return eval(num);
      }
    catch(error)
      {
        return 'invalid number';
      }
  };
  
  this.getUnit = function(input) {
    const m = input.match(/[a-zA-z]+/);
    if(!m) return 'invalid unit';
    let unit = m[0];
    return ['gal', 'lbs', 'l', 'kg', 'mi', 'km'].indexOf(unit.toLowerCase()) > -1 ? unit : 'invalid unit';
  };
  
  this.getReturnUnit = function(initUnit) {
    
    const unit = [
      ['gal', 'l'],
      ['lbs', 'kg'],
      ['mi', 'km']
    ];
    
    for(const pair of unit)
      {
        const i = pair.indexOf(initUnit.toLowerCase());
        if(i > -1)
          return pair[Math.abs(i - 1)];
      }
  };

  this.spellOutUnit = function(unit) {
    switch(unit.toLowerCase())
      {
        case 'gal': return 'galileo';
        case 'l': return 'litre';
        case 'lbs': return 'pound';
        case 'kg': return 'kilogram';
        case 'mi': return 'mile';
        case 'km': return 'kilometer';
        default: throw new Error('invalid unit');
      }
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    const returnUnit = this.getReturnUnit(initUnit);
    
    switch(returnUnit.toLowerCase())
      {
        case 'l': return initNum * galToL;
        case 'gal': return initNum / galToL;
        case 'kg': return initNum * lbsToKg;
        case 'lbs': return initNum / lbsToKg;
        case 'km': return initNum * miToKm;
        case 'mi': return initNum / miToKm;
        default: throw new Error('invalid unit');
      }
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    const i_plural = initNum >= 2 ? 's' : '';
    const r_plural = returnNum >= 2 ? 's' : '';
    return `${initNum} ${this.spellOutUnit(initUnit) + i_plural} converts to ${returnNum.toFixed(5)} ${this.spellOutUnit(returnUnit) + r_plural}`;
  };
  
}

module.exports = ConvertHandler;
