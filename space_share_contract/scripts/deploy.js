const hre = require("hardhat");

const main = async () => {
  const transactionsFactory = await hre.ethers.getContractFactory("Space_Share");
  const spaceShareContract = await transactionsFactory.deploy();

  await spaceShareContract.deployed();

  console.log("Space Share address: ", spaceShareContract.address);
}

const runMain = async() => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

runMain();
