import { useEffect, useState } from "react";
import { Address } from "viem";
import { useClient } from "~~/hooks/scaffold-alchemy/useClient";
import { useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-alchemy";

export const HouseAssignmentUI = () => {
  const [loading, setLoading] = useState(false); // Loading state
  const [rollInProgress, setRollInProgress] = useState(false); // Track if roll is in progress

  const { address } = useClient();

  const { writeContractAsync: writeYourContractAsync } = useScaffoldWriteContract({
    contractName: "VRFConsumer",
  });

  const { data: assignedHouse, refetch: refetchHouse } = useScaffoldReadContract({
    contractName: "VRFConsumer",
    functionName: "house",
    args: [address as Address],
  });

  const handleRollDice = async () => {
    setLoading(true); // Set loading when the dice roll begins
    try {
      // Initiate the VRF roll request
      await writeYourContractAsync({
        functionName: "rollDice",
        args: [address as Address],
      });
      // Check the status if the roll is in progress after initiating the request
      await refetchHouse();
      setRollInProgress(true); // Set that roll is in progress
    } catch (e) {
      console.error("Error rolling dice:", e);
    }
  };

  useEffect(() => {
    if (assignedHouse) {
      setLoading(false); // Stop loading when house is assigned or the roll is complete
      setRollInProgress(false); // Stop indicating that the roll is in progress
    }
  }, [assignedHouse]);

  return (
    <div className="flex flex-col items-center border-2 border-base-300 rounded-xl p-6">
      <div className="text-sm mb-2 font-semibold uppercase text-base-content/70">
        Game of Thrones House Assignment
      </div>
      
      {loading ? ( // Show loading spinner if still waiting for response
        <div className="loader">Rolling...</div>
      ) : assignedHouse ? (
        <div className="flex flex-col items-center gap-4">
          <div className="text-2xl font-bold">House {assignedHouse}</div>
          <p className="text-base-content/70">You have been assigned to your house!</p>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4">
          <p className="text-base-content/70">
            Click the button below to get randomly assigned to a Game of Thrones house
          </p>
          <button 
            className="btn btn-primary"
            onClick={handleRollDice}
            disabled={!address || rollInProgress} // Disable if the roll is in progress
          >
            Get Assigned to a House
          </button>
          {!address && (
            <p className="text-sm text-error">Please connect your wallet first</p>
          )}
          {rollInProgress && (
            <p className="text-sm text-warning">Your roll is in progress...</p>
          )}
        </div>
      )}
    </div>
  );
};

export default HouseAssignmentUI;
