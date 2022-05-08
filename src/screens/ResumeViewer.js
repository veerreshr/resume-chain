import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDataABI } from "./../contracts/getDataABI";
import { useMoralis } from "react-moralis";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Box from "@mui/material/Box";
import NotFoundComponent from "./../components/NotFoundComponent";
import { PDFViewer } from "@react-pdf/renderer";
import PreviewComponent from "../components/PreviewComponent";

const ResumeViewer = () => {
  let params = useParams();

  const [showPDF, setShowPDF] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  const { Moralis } = useMoralis();

  const getData = async (address) => {
    try {
      const readOptions = {
        contractAddress: process.env.REACT_APP_CONTRACT_ADDRESS,
        functionName: "getData",
        abi: getDataABI,
        params: {
          user: address,
        },
      };
      await Moralis.enableWeb3();
      const message = await Moralis.executeFunction(readOptions);
      setData(JSON.parse(atob(message)));
    } catch (error) {
      setError(true);
    }
  };
  useEffect(() => {
    if (params?.id?.trim()) {
      getData(params.id);
    }
  }, [params?.id]);
  return (
    <Box sx={{ p: 2 }}>
      {error ? (
        <NotFoundComponent />
      ) : (
        data && (
          <>
            <FormGroup sx={{ alignItems: "end" }}>
              <FormControlLabel
                control={<CustomSwitch />}
                label="Raw Data"
                value={!showPDF}
                onChange={(e) => setShowPDF(!e.target.checked)}
              />
            </FormGroup>
            {showPDF ? (
              <div style={{ width: "100%", height: "80vh" }}>
                <PDFViewer width="100%" height="100%" showToolbar={false}>
                  <PreviewComponent
                    basics={data?.basics}
                    education={data?.education}
                    skills={data?.skills}
                    awards={data?.awards}
                    projects={data?.projects}
                    work={data?.work}
                  />
                </PDFViewer>
              </div>
            ) : (
              <pre style={{ padding: "10px", backgroundColor: "#f1f1f1" }}>
                {JSON.stringify(data, null, 2)}
              </pre>
            )}
          </>
        )
      )}
    </Box>
  );
};

export default ResumeViewer;

const CustomSwitch = styled(Switch)(({ theme }) => ({
  padding: 8,
  "& .MuiSwitch-track": {
    borderRadius: 22 / 2,
    "&:before, &:after": {
      content: '""',
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      width: 16,
      height: 16,
    },
    "&:before": {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main)
      )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
      left: 12,
    },
    "&:after": {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main)
      )}" d="M19,13H5V11H19V13Z" /></svg>')`,
      right: 12,
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "none",
    width: 16,
    height: 16,
    margin: 2,
  },
}));
