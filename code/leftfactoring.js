let nonTerminal = 'S';
// let productions = 'iEtS|iEtSeS|a|iES';
// let productions = 'iEtS|iEtSeS|a';
let productions = 'bSSaaS|bSSaSb|a|bSb';
// let productions = 'bSSaaS|bSSaSb|a|bSb|bSSaSc';
console.log(`The given grammer is: ${nonTerminal} --> ${productions}`);


const LeftFactoring = (productions) => {
  let words = productions.split('|').filter(e => e !== '');
  // console.log(words)
  if(words.length>1){
    const counts = words.reduce((acc, w) => {
      prefix = '';
      for (i = 0; i < w.length; i++) {
        prefix += w[i]
        // console.log(prefix)
        acc[prefix] = (acc[prefix] || 0) + 1;
        // console.log(prefix,acc[prefix],acc[prefix] || 0)
        // console.log((undefined || 5));
      }
      return acc;
    }, {});
    
    // console.log(counts)
    try {
      const alpha = Object.entries(counts)
      .filter(([k, v]) => v > words.length / 2.0)
      .sort((a, b) => b[0].length - a[0].length)[0][0];
      //   .sort((a, b) => {
      //     console.log(a[0]);
      // })
      
      console.log(alpha)
      let nonTerminalPrime = '';
      // console.log(words)
      words.filter(word => word.includes(alpha))
                      .map(word => word.replace(alpha,''))
                      .filter(e => e!=='')
                      .forEach(e => nonTerminalPrime += e+'|');
      // console.log(words);

      let gama = words.filter(word => !word.includes(alpha));
      
      // console.log(gama)
      // console.log(beta);
      console.log(`${nonTerminal} --> ${alpha}${nonTerminal}'${gama?`|${gama}`:''}`)
      console.log(`${nonTerminal}' --> ${nonTerminalPrime}#`); 
      nonTerminal = `${nonTerminal}'`;
      LeftFactoring(nonTerminalPrime);
    } catch {
      console.log('...................');
    }
  }
}
console.log(`After Left Factoring:`);
LeftFactoring(productions);
