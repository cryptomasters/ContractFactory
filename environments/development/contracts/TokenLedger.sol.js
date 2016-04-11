// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"_total","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"title","outputs":[{"name":"","type":"bytes32"}],"type":"function"},{"constant":false,"inputs":[{"name":"_amount","type":"uint256"}],"name":"generateShares","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_symbol","type":"bytes4"}],"name":"setSharesSymbol","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"bytes4"}],"type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"changeOwner","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"newContract","type":"address"}],"name":"kill","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_title","type":"bytes32"}],"name":"setSharesTitle","outputs":[],"type":"function"},{"inputs":[],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":true,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":true,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_previousOwner","type":"address"},{"indexed":true,"name":"_newOwner","type":"address"},{"indexed":false,"name":"_now","type":"uint256"}],"name":"OwnerChanged","type":"event"}],
    binary: "606060405260008054600160a060020a0319163317905560003411156022576002565b610656806100306000396000f3606060405236156100ae5760e060020a6000350463095ea7b381146100b657806318160ddd146100cd57806323b872dd146100e05780634a79d50c146100fa5780635e823d96146101035780635ef00f181461012457806370a08231146101385780638da5cb5b1461014e57806395d89b4114610160578063a6f9dae11461016f578063a9059cbb14610190578063cbf0b0c0146101a7578063dd62ed3e146101c8578063f074347e146101e1575b6101f5610002565b6101f5600435602435600034111561054d57610002565b6101f76000600034111561064f57610002565b6101f5600435602435604435600034111561034257610002565b6101f760025481565b6101f560043560005433600160a060020a039081169116146105f857610002565b6101f5600435600034111561028257610002565b6101f7600435600060003411156105de57610002565b6101f7600054600160a060020a031681565b6101f760035460e060020a0281565b6101f560043560005433600160a060020a0390811691161461020d57610002565b6101f560043560243560003411156102a157610002565b6101f560043560005433600160a060020a0390811691161461020157610002565b6101f7600435602435600060003411156105b557610002565b6101f5600435600034111561029c57610002565b005b6060908152602090f35b80600160a060020a0316ff5b80600160a060020a03166000141561022457610002565b600054426060908152600160a060020a038084169216907f4c37b24b600916176446859ec41fb06842ec1dfaeeb0bee28784b51f24b8c30890602090a380600060006101000a815481600160a060020a030219169083021790555050565b6003805460e060020a830463ffffffff1990911617905550565b600255565b338180600014156102b157610002565b600160a060020a038216600090815260046020526040902054819010156102d757610002565b60406000205480820110156102eb57610002565b6040600081812080548490039055600160a060020a03808716808352928220805485019055839291908516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906060a450505050565b8281806000141561035257610002565b600160a060020a0382166000908152600460205260409020548190101561037857610002565b604060002054818101101561038c57610002565b8483806000141561039c57610002565b600560209081526040600081812033600160a060020a03168252909252902054819010156103c957610002565b6005600050600083600160a060020a03168152602001908152602001600020600050600033600160a060020a0316815260200190815260200160002060005054816005600050600085600160a060020a03168152602001908152602001600020600050600033600160a060020a031681526020019081526020016000206000505401101561045657610002565b846004600050600089600160a060020a03168152602001908152602001600020600082828250540392505081905550846004600050600088600160a060020a03168152602001908152602001600020600082828250540192505081905550846005600050600089600160a060020a03168152602001908152602001600020600050600033600160a060020a031681526020019081526020016000206000828282505403925050819055508486600160a060020a031688600160a060020a03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405180905060405180910390a450505050505050565b60015481111561055c57610002565b33600160a060020a039081166000818152600560209081526040808320948716808452949091528120849055839291907f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906060a45050565b600160a060020a0392831681526005602090815260408083209490931682529290925290205490565b600160a060020a0390911681526004602052604090205490565b600034111561060657610002565b806000141561061457610002565b60015481018190101561062657610002565b600080546001805484019055600160a060020a0316815260046020526040902080548201905550565b506001549056",
    unlinked_binary: "606060405260008054600160a060020a0319163317905560003411156022576002565b610656806100306000396000f3606060405236156100ae5760e060020a6000350463095ea7b381146100b657806318160ddd146100cd57806323b872dd146100e05780634a79d50c146100fa5780635e823d96146101035780635ef00f181461012457806370a08231146101385780638da5cb5b1461014e57806395d89b4114610160578063a6f9dae11461016f578063a9059cbb14610190578063cbf0b0c0146101a7578063dd62ed3e146101c8578063f074347e146101e1575b6101f5610002565b6101f5600435602435600034111561054d57610002565b6101f76000600034111561064f57610002565b6101f5600435602435604435600034111561034257610002565b6101f760025481565b6101f560043560005433600160a060020a039081169116146105f857610002565b6101f5600435600034111561028257610002565b6101f7600435600060003411156105de57610002565b6101f7600054600160a060020a031681565b6101f760035460e060020a0281565b6101f560043560005433600160a060020a0390811691161461020d57610002565b6101f560043560243560003411156102a157610002565b6101f560043560005433600160a060020a0390811691161461020157610002565b6101f7600435602435600060003411156105b557610002565b6101f5600435600034111561029c57610002565b005b6060908152602090f35b80600160a060020a0316ff5b80600160a060020a03166000141561022457610002565b600054426060908152600160a060020a038084169216907f4c37b24b600916176446859ec41fb06842ec1dfaeeb0bee28784b51f24b8c30890602090a380600060006101000a815481600160a060020a030219169083021790555050565b6003805460e060020a830463ffffffff1990911617905550565b600255565b338180600014156102b157610002565b600160a060020a038216600090815260046020526040902054819010156102d757610002565b60406000205480820110156102eb57610002565b6040600081812080548490039055600160a060020a03808716808352928220805485019055839291908516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906060a450505050565b8281806000141561035257610002565b600160a060020a0382166000908152600460205260409020548190101561037857610002565b604060002054818101101561038c57610002565b8483806000141561039c57610002565b600560209081526040600081812033600160a060020a03168252909252902054819010156103c957610002565b6005600050600083600160a060020a03168152602001908152602001600020600050600033600160a060020a0316815260200190815260200160002060005054816005600050600085600160a060020a03168152602001908152602001600020600050600033600160a060020a031681526020019081526020016000206000505401101561045657610002565b846004600050600089600160a060020a03168152602001908152602001600020600082828250540392505081905550846004600050600088600160a060020a03168152602001908152602001600020600082828250540192505081905550846005600050600089600160a060020a03168152602001908152602001600020600050600033600160a060020a031681526020019081526020016000206000828282505403925050819055508486600160a060020a031688600160a060020a03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405180905060405180910390a450505050505050565b60015481111561055c57610002565b33600160a060020a039081166000818152600560209081526040808320948716808452949091528120849055839291907f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906060a45050565b600160a060020a0392831681526005602090815260408083209490931682529290925290205490565b600160a060020a0390911681526004602052604090205490565b600034111561060657610002565b806000141561061457610002565b60015481018190101561062657610002565b600080546001805484019055600160a060020a0316815260046020526040902080548201905550565b506001549056",
    address: "",
    generated_with: "2.0.6",
    contract_name: "TokenLedger"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("TokenLedger error: Please call load() first before creating new instance of this contract.");
    }

    Contract.Pudding.apply(this, arguments);
  };

  Contract.load = function(Pudding) {
    Contract.Pudding = Pudding;

    Pudding.whisk(contract_data, Contract);

    // Return itself for backwards compatibility.
    return Contract;
  }

  Contract.new = function() {
    if (Contract.Pudding == null) {
      throw new Error("TokenLedger error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("TokenLedger error: lease call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("TokenLedger error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.TokenLedger = Contract;
  }

})();
