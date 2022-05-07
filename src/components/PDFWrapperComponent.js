import React from "react";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import PreviewComponent from "./PreviewComponent";
import Box from "@mui/material/Box";
import { useStore } from "./../store";
import Button from "@mui/material/Button";

const PDFWrapperComponent = () => {
  const basics = useStore((state) => state.basics);
  const education = useStore((state) => state.education);
  const experience = useStore((state) => state.experience);
  const skills = useStore((state) => state.skills);
  const awards = useStore((state) => state.awards);
  const projects = useStore((state) => state.projects);
  const work = useStore((state) => state.work);
  return (
    <Box sx={{ my: 1, marginRight: 1, height: "94%" }}>
      <Button variant="contained" fullWidth>
        <PDFDownloadLink
          document={
            <PreviewComponent
              basics={basics}
              education={education}
              experience={experience}
              skills={skills}
              awards={awards}
              projects={projects}
              work={work}
            />
          }
          fileName={`${basics.name}_Resume.pdf`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download now!"
          }
        </PDFDownloadLink>
      </Button>

      <PDFViewer width="100%" height="100%" showToolbar={false}>
        <PreviewComponent
          basics={basics}
          education={education}
          experience={experience}
          skills={skills}
          awards={awards}
          projects={projects}
          work={work}
        />
      </PDFViewer>
    </Box>
  );
};

export default PDFWrapperComponent;
