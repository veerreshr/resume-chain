import React, { useState } from "react";
import { useMoralis } from "react-moralis";
import { useStore } from "./../store";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { setDataABI } from "../contracts/setDataABI";
import { toast } from "react-toastify";

const UploadResume = () => {
  const { Moralis, isAuthenticated, user } = useMoralis();

  const basics = useStore((state) => state.basics);
  const education = useStore((state) => state.education);
  const experience = useStore((state) => state.experience);
  const skills = useStore((state) => state.skills);
  const awards = useStore((state) => state.awards);
  const projects = useStore((state) => state.projects);
  const work = useStore((state) => state.work);

  const [loading, setLoading] = useState(false);

  const uploadResume = async () => {
    if (!isAuthenticated) {
      alert("Please connect to the network to upload a resume");
      return;
    }
    const object = {
      basics,
      education,
      experience,
      skills,
      awards,
      projects,
      work,
    };
    const data = btoa(JSON.stringify(object));

    const options = {
      contractAddress: process.env.REACT_APP_CONTRACT_ADDRESS,
      functionName: "setData",
      abi: setDataABI,
      params: {
        data: data,
      },
    };
    setLoading(true);
    try {
      const web3 = await Moralis.enableWeb3();
      const transaction = await Moralis.executeFunction(options);
      toast.info("Transaction Pending: " + transaction.hash);
      await transaction.wait();
      console.log(transaction);
      toast.success("Resume uploaded successfully");
    } catch (error) {
      toast.error("Oppss something went wrong");
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <Button
      style={{ color: "white" }}
      onClick={uploadResume}
      disabled={loading}
    >
      {loading ? <CircularProgress color="inherit" /> : "Upload Resume"}
    </Button>
  );
};

export default UploadResume;
