//DNS Lookup

const dns = require('dns');

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is the domain name? ', (answer) => {
  const lookup = dns.lookup(answer, function (err, addresses, family) {
  console.log('IP Address:', addresses);
  rl.close();
  });
});
