// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

// class
contract Transactions {
  uint256 transactionCount;

  // A function that we're going to emit or call later on
  event Transfer(address from, address receiver, uint amount, string message, uint256 timestamp, string keyword);

  // Similar to an object properties like type/instance in TS
  struct TransferStruct {
    address sender;
    address receiver;
    uint amount;
    string message;
    uint256 timestamp;
    string keyword; // going to be used to store the image id
  }

  // Array of TransferStruct
  TransferStruct[] transactions;

  // Like regular JS function
  // memory here means that this is some specific data stored in the memory of that transaction
  function addToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword) public {
    transactionCount += 1;

    // msg is an object that we immediatelly get whenever we call a specific function in the blockchain
    transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword));

    // Make the transfer
    emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
  }

  function getAllTransactions() public view returns (TransferStruct[] memory) {
    return transactions;
  }

  function getTransactionCount() public view returns (uint256) {
    return transactionCount;
  }
}