const RowdyGoat = artifacts.require("RowdyGoat")

module.exports = async function (deployer) {

    const GOAT_CLUB_SAFE_ADDRESS = process.env.GOAT_CLUB_SAFE_ADDRESS;
    const IPFS_IMAGE_METADATA_URI = `ipfs://${process.env.IPFS_IMAGE_METADATA_CID}/`
    const IPFS_HIDDEN_IMAGE_METADATA_URI = `ipfs://${process.env.IPFS_HIDDEN_IMAGE_METADATA_CID}/hidden.json`
    const NFT_MINT_DATE = new Date(process.env.NFT_MINT_DATE).getTime().toString().slice(0, 10)

    const goatNFT = await deployer.deploy(
        RowdyGoat,
        process.env.PROJECT_NAME,
        process.env.PROJECT_SYMBOL,
        process.env.MINT_COST,
        process.env.MAX_SUPPLY,
        NFT_MINT_DATE,
        IPFS_IMAGE_METADATA_URI,
        IPFS_HIDDEN_IMAGE_METADATA_URI,
        5,
        process.env.WALLET_1
    );
    // Interacting with contracts truffle, CLI, console. 
    // 1. Make a gnosis safe on testnet
    // 2. set the env variable GOAT_CLUB_SAFE_ADDRESS (or hard code it)
    // 3. figure out the right turffle way to execute transfer Ownership, is .call() needed?
    
    //const tx = await goatNFT.transferOwnership(GOAT_CLUB_SAFE_ADDRESS).call();
    //console.log("Transaction: ", tx);
};