import { Connection, LAMPORTS_PER_SOL, PublicKey, clusterApiUrl } from "@solana/web3.js";
const publicKey = new PublicKey('DGH7M6fFjbSt5t3EugY4JLb3fMziwZCAyCd6kVjveu9N');

const connection = new Connection(clusterApiUrl("devnet"));

const checkBalance = async () => {
  try {
    const balanceInLamports = await connection.getBalance(publicKey);
    const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;
    console.log(`💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`);
  } catch (err) {
    console.error(err);
  }
};

checkBalance();
