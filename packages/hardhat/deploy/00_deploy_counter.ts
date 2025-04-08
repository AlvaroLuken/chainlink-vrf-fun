import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { deployWithAA } from "../utils/deployWithAA";

/**
 * Deploys a contract named "Counter" using a smart account associated to SIGNING_KEY, if provided,
 * or else a random signing key will be used
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
export const CONTRACT_NAME = "VRFConsumer";
const deployYourContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const factory = await hre.ethers.getContractFactory(CONTRACT_NAME);

  // use account abstraction to deploy the contract, with the gas sponsored for us!
  const vrfConsumerAddress = await deployWithAA(factory, CONTRACT_NAME, hre, ["15057850048170279833714056653430227677924422704593209816789171719720958009567"]);
  console.log("👋 VRFConsumer deployed to:", vrfConsumerAddress);

  const counter = await hre.ethers.getContractAt(CONTRACT_NAME, vrfConsumerAddress);
  console.log("👋 Initial value of subscriptionId:", await counter.s_subscriptionId());
};

export default deployYourContract;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags Counter
deployYourContract.tags = ["VRFConsumer"];
