import React, { useState } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { useMoralis } from "react-moralis";
import { toast } from "react-toastify";
import { addCertificateABI } from "./../contracts/addCertificateABI";

const Input = styled("input")({
  display: "none",
});

const UploadCertificateComponent = () => {
  const [metadata, setMetadata] = React.useState("");

  const [image, setImage] = useState("");

  const { Moralis, user, isAuthenticated } = useMoralis();

  const handleCertificate = async (e) => {
    if (!isAuthenticated) {
      alert("Please connect to the network to upload a photo");
      return;
    }
    const data = e.target.files[0];
    const file = new Moralis.File(`${user.get("ethAddress")}_certificte`, data);
    toast.info("Uploading certificate to ipfs...");
    await file.saveIPFS();
    toast.info("Certificate uploded successfully to ipfs...");
    setImage(file._ipfs);
  };

  const mintCertificate = async () => {
    if (!isAuthenticated) {
      alert("Please connect to the network to mint a certificate");
      return;
    }

    const options = {
      contractAddress: process.env.REACT_APP_ORG_CONTRACT_ADDRESS,
      functionName: "addCertificate",
      abi: addCertificateABI,
      params: {
        url: image,
        metadata: metadata,
      },
    };
    toast.info("Minting certificate...");
    try {
      await Moralis.enableWeb3();
      const transaction = await Moralis.executeFunction(options);
      toast.info("Transaction Pending: " + transaction.hash);
      await transaction.wait();
      console.log(transaction);
      toast.success("Certificated uploaded successfully");
    } catch (error) {
      toast.error("Oppss something went wrong");
      console.error(error);
    }
  };

  return (
    <>
      {image && <img src={image} alt="Certificate Preview" width="300px" />}
      {image && <p>url : {image}</p>}
      <label htmlFor="upload_certificate_image">
        <Input
          accept="image/*"
          id="upload_certificate_image"
          type="file"
          multiple={false}
          onChange={handleCertificate}
        />
        <Button
          variant="contained"
          component="span"
          size="small"
          color="secondary"
          fullWidth
          endIcon={<AttachFileIcon />}
        >
          Add Certificate
        </Button>
      </label>
      <TextField
        id="metadata"
        label="Metadata"
        variant="outlined"
        fullWidth
        size="small"
        sx={{ my: 1 }}
        multiline
        minRows={4}
        value={metadata}
        onChange={(e) => setMetadata(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={mintCertificate}
      >
        Mint Certificate
      </Button>
    </>
  );
};

export default UploadCertificateComponent;
