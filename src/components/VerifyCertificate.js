import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useMoralis } from "react-moralis";
import { getOwnerABI } from "./../contracts/getOwnerABI";
import { toast } from "react-toastify";

const VerifyCertificate = () => {
  const [url, setUrl] = React.useState("");
  const [sender, setSender] = React.useState("");

  const { Moralis } = useMoralis();

  const handleVerify = async () => {
    try {
      const readOptions = {
        contractAddress: process.env.REACT_APP_ORG_CONTRACT_ADDRESS,
        functionName: "getOwner",
        abi: getOwnerABI,
        params: {
          url: url,
        },
      };
      toast.info("Verifying...");
      await Moralis.enableWeb3();
      const message = await Moralis.executeFunction(readOptions);
      toast.success("Verified successfully");
      setSender(message);
    } catch (error) {
      toast.error("Oppss something went wrong");
      console.log(error);
    }
  };

  return (
    <>
      <TextField
        id="url"
        label="URL"
        variant="outlined"
        fullWidth
        size="small"
        sx={{ my: 1 }}
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleVerify}
      >
        Verify
      </Button>
      <br />
      <br />
      {sender && <p>Sender: {sender}</p>}
    </>
  );
};

export default VerifyCertificate;
