import Moralis from 'moralis/dist/moralis.min.js';


export default async function login() {
    Moralis.initialize("z7dlyVtNRv6S9Iq4I8d2hXTQLsuquVUwRjmqH0mq"); // Application id from moralis.io
    Moralis.serverURL = "https://uztcsdcyjsaf.usemoralis.com:2053/server"; //Server url from moralis.io
    console.log("login clicked");
    var user = await Moralis.Web3.authenticate();
    if (user) {
        console.log(user);
        user.usernamep = "pradeepvarma";
        user.save();

    }
}
