<template>
  <h1 id="title">Account Summary</h1>
  <div class="box">
    <div class="accountBox">
      <h2 id="accountNum">{{$store.getters.getTransactions.Transactions[0].AccountNumber}}</h2>
      <h3 class="heading"> Account Number</h3>
    </div>
    <div class="availableBox">
      <h2 class="accountBalance">{{$store.getters.getTransactions.Transactions[0].AvailableBalance}} </h2>
      <h3 class="heading">Available Balance</h3>
    </div>
  </div>

  <h2 class="subtitle"> Pending Transactions </h2>

  <div class="categoryBox">
      <h4 class="catDate cate">Date</h4>
      <h4 class="catDesc cate">Description</h4>
      <h4 class="catType cate">Type</h4>
      <h4 class="catAmount cate">Amount</h4>
      <h4 class="catAvailable cate">Available</h4>
  </div>

  <ul class="listsBox">
    <li class="list" v-for="(transaction, x) in $store.getters.getTransactions.NotSettled" :key="transaction.MerchantId">
        <p>{{$store.getters.getTransactions.NotSettled[x].TransactionDate}}</p>
        <p>{{$store.getters.getTransactions.NotSettled[x].Description}}</p>
        <p>{{$store.getters.getTransactions.NotSettled[x].TransactionTypeId}}</p>
        <p>{{$store.getters.getTransactions.NotSettled[x].Amount}}</p>
        <p>{{$store.getters.getTransactions.NotSettled[x].AvailableBalance}}</p>
    </li>
  </ul>

  <h2 class="subtitle">Posted Transactions</h2>

  <div class="categoryBox">
      <h4 class="catDate cate">Date</h4>
      <h4 class="catDesc cate">Description</h4>
      <h4 class="catType cate">Type</h4>
      <h4 class="catAmount cate">Amount</h4>
      <h4 class="catAvailable cate">Available</h4>
  </div>

  <ul class="listsBox">
    <li class="list" v-for="(transaction, x) in $store.getters.getTransactions.Transactions" :key="transaction.MerchantId">
        <p>{{$store.getters.getTransactions.Transactions[x].TransactionDate}}</p>
        <p>{{$store.getters.getTransactions.Transactions[x].Description}}</p>
        <p>{{$store.getters.getTransactions.Transactions[x].TransactionTypeId}}</p>
        <p>{{$store.getters.getTransactions.Transactions[x].Amount}}</p>
        <p>{{$store.getters.getTransactions.Transactions[x].AvailableBalance}}</p>
    </li>
  </ul>

  
  
</template>

<script>
export default {
  data()
  {
    return {

    }
  }
}
</script>

<style>
    #title
    {
      font-size: 3rem;
      text-align: center;
      font-weight: bolder;
    }

    .box
    {
      display: flex;
      justify-content: space-between;
    }

    .accountBox
    {
      
      background: black;
      color: white;
      width: 30vw;
      padding: 5px;
      text-align: center;
      border-radius: 10px;
    }

    #accountNum
    {
      font-size: 2rem;
      margin-bottom: 0;
    }

    .heading
    {
      font-size: 2rem;
      margin-top: 1vh;
    }

    .availableBox
    {
      float: right;
      display: inline;
      background: black;
      color: white;
      padding: 5px;
      width: 30vw;
      text-align: center;
      border-radius: 10px;
    }

    .accountBalance
    {
      font-size: 2rem;
      margin-bottom: 0;
    }

    .subtitle
    {
      font-size: 3rem;
      text-align: center;
      background: black;
      color: white;
      border-radius: 10px;
      width: 50vw;
      padding: 10px;
      margin-left: 24vw;
      margin-top: 10vh;
    }

    .categoryBox
    {
      display: flex;
      justify-content: space-between;
      width: 85vw;
      background: black;
      color: white;
      padding: 10px 70px;
      border-radius: 5px;
      margin-top: 5vh;
      margin-left: 1.5vw;
      font-size: 1.5rem;
    }

    .listsBox
    {
      background: black;
      color: white;
      width: 83vw;
      padding: 10px 70px;
      margin-left: 2.7vw;
      font-size: 1.5rem;
      border-radius: 5px;
      margin-top: -2vh;
      
    }

    .list
    {
      list-style: none;
      display: flex;
      justify-content: space-between;
      border-bottom: 2px solid white;
    }
</style>