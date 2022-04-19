import { createApp } from 'vue'
import App from './App.vue'

//importing the createStore method
import {createStore} from 'vuex'

//configuring the store
const store = createStore({
    state(){
        return{
            "Statement": 
            {
                "Transactions": [{
                    "OriginalTraceAuditNo": null,
                    "AccountNumber": "123456789",
                    "TransactionTypeId": "Debit",
                    "TransactionDate": "2020-08-28T03:36:33",
                    "BusinessDate": "2020-08-28T03:36:33",
                    "AvailableBalance": 400.00,
                    "Amount": 12.08,
                    "Description": "Other: POS Transaction",
                    "Billed": false,
                    "MerchantName": "Good Buy",
                    "MerchantId": "GbLV-01"
                },
                {
                    "OriginalTraceAuditNo": null,
                    "AccountNumber": "123456789",
                    "TransactionTypeId": "Debit",
                    "TransactionDate": "2020-08-28T03:50:01",
                    "BusinessDate": "2020-08-28T03:50:01",
                    "AvailableBalance": 400.00,
                    "Amount": 129.74,
                    "Description": "Other: POS Transaction",
                    "Billed": false,
                    "MerchantName": "Wally World",
                    "MerchantId": "WWV-000-1220"
                },
                {
                    "OriginalTraceAuditNo": null,
                    "AccountNumber": "123456789",
                    "TransactionTypeId": "Debit",
                    "TransactionDate": "2020-08-28T06:43:12",
                    "BusinessDate": "2020-08-28T06:43:12",
                    "AvailableBalance": 400.00,
                    "Amount": 8.08,
                    "Description": "Other: POS Transaction",
                    "Billed": true,
                    "MerchantName": "Quickly Gas Stop",
                    "MerchantId": "QGS-01"
                }],
                "NotSettled": [{
                    "OriginalTraceAuditNo": null,
                    "AccountNumber": "123456789",
                    "TransactionTypeId": "Debit",
                    "TransactionDate": "2020-08-28T03:36:33",
                    "BusinessDate": "2020-08-28T03:36:33",
                    "AvailableBalance": 400.00,
                    "Amount": 12.08,
                    "Description": "Other: POS Transaction",
                    "MerchantName": "Good Buy",
                    "MerchantId": "GbLV-01"
                },
                {
                    "OriginalTraceAuditNo": null,
                    "AccountNumber": "123456789",
                    "TransactionTypeId": "Debit",
                    "TransactionDate": "2020-08-28T03:50:01",
                    "BusinessDate": "2020-08-28T03:50:01",
                    "AvailableBalance": 400.00,
                    "Amount": 129.74,
                    "Description": "Other: POS Transaction",
                    "MerchantName": "Wally World",
                    "MerchantId": "WWV-000-1220"
                }]
            }
        }
    },
    getters: {
        getTransactions(state){
            return state.Statement
        }
    }
})

const app = createApp(App)
//Using the store in the app
app.use(store)


app.mount('#app')
