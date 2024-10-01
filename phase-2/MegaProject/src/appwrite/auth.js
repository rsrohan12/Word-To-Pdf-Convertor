// the methods we used here are picked up from the documentation of 'appwrite'

//import conf from "../conf/conf"
import {Client, Account, ID} from "appwrite"

export class Auth{
    client = new Client()
    account;

    constructor(){
        this.client
            .setEndpoint('appwriteUrl')  // Your API Endpoint
            .setProject('appwriteProjectId');  // Your project ID
        this.account = new Account(this.client);
    }
    // create an account of user
    async createAccount({email, password, name}){  // we pass in an object
        try {
           const userAccount = await this.account.create(ID.unique(),  // create() method is used
            email, password, name) // we have to pass these values as that order
            if (userAccount) {
                return this.login({email, password}) // call the login method after account created
            } else {
                return userAccount;
            }

        } catch (error) {  // simply catches the error if occur 
            throw error;  // handles the error, mostly try catch used in backend
        }
    }
    
    // after account creation, then login
    async login({email, password}){
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }
    
    // to check the account is present or not
    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            //throw error;
            // second way to show error
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }

        return null;
    }
    
    // for logout the user account
    async logOut(){
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logOut :: error", error);
        }
    }


}

const authService = new Auth() // create an new object calling a class

export default authService