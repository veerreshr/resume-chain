import React, { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useStore } from "./../store";

const ProjectsSection = () => {
  const incrementTab = useStore((state) => state.incrementTab);
  const setProjects = useStore((state) => state.setProjects);
  const projects = useStore((state) => state.projects);

  const [projectValues, setProjectValues] = useState([]);
  const [defaultProject, setDefaultProject] = useState({
    name: "",
    startDate: "",
    endDate: "",
    url: "",
    keywords: "",
    highlights: "",
  });

  const handleAddNew = () => {
    const template = {
      name: "",
      startDate: "",
      endDate: "",
      url: "",
      keywords: "",
      highlights: "",
    };
    setProjectValues([...projectValues, template]);
  };
  const removeEducation = (index) => {
    setProjectValues((values) => values.filter((_, i) => i !== index));
  };

  const handleChange = (e, index, key) => {
    const value = e.target.value;
    let values = projectValues;
    values[index][key] = value;
    setProjectValues([...values]);
  };

  const handleSave = () => {
    setProjects([defaultProject, ...projectValues]);
    incrementTab();
  };

  useEffect(() => {
    if (projects.length > 0) {
      setDefaultProject(projects[0]);
      setProjectValues(projects.slice(1));
    }
  }, [projects]);

  return (
    <>
      <div>
        <TextField
          label="Project Name"
          variant="outlined"
          fullWidth
          size="small"
          sx={{ my: 1 }}
          value={defaultProject.name}
          onChange={(e) =>
            setDefaultProject({
              ...defaultProject,
              name: e.target.value,
            })
          }
        />
        <Stack direction="row" spacing={2} sx={{ my: 1 }}>
          {" "}
          <TextField
            label="Start Date"
            variant="outlined"
            fullWidth
            size="small"
            helperText="format : dd/mm/yyyy"
            value={defaultProject.startDate}
            onChange={(e) =>
              setDefaultProject({
                ...defaultProject,
                startDate: e.target.value,
              })
            }
          />
          <TextField
            label="End Date"
            variant="outlined"
            fullWidth
            size="small"
            helperText="format : dd/mm/yyyy"
            value={defaultProject.endDate}
            onChange={(e) =>
              setDefaultProject({
                ...defaultProject,
                endDate: e.target.value,
              })
            }
          />
        </Stack>
        <TextField
          label="Keywords"
          variant="outlined"
          fullWidth
          size="small"
          sx={{ my: 1 }}
          minRows={2}
          multiline
          helperText="Enter Comma Separated Keywords"
          value={defaultProject.keywords}
          onChange={(e) =>
            setDefaultProject({ ...defaultProject, keywords: e.target.value })
          }
        />
        <TextField
          label="Highlights"
          variant="outlined"
          fullWidth
          size="small"
          sx={{ my: 1 }}
          rows={5}
          multiline
          helperText="New Line for each highlight"
          value={defaultProject.highlights}
          onChange={(e) =>
            setDefaultProject({ ...defaultProject, highlights: e.target.value })
          }
        />
        <TextField
          label="URL"
          variant="outlined"
          fullWidth
          size="small"
          sx={{ my: 1 }}
          value={defaultProject.url}
          onChange={(e) =>
            setDefaultProject({ ...defaultProject, url: e.target.value })
          }
        />
      </div>
      {projectValues.length > 0 && <Divider />}

      <Stack direction="column" divider={<Divider />} spacing={2}>
        {projectValues.map((education, index) => {
          let key = index;
          return (
            <Box sx={{ my: 2 }} key={key}>
              <Stack
                direction="row"
                spacing={2}
                sx={{ my: 1 }}
                justifyContent="space-between"
                alignItems="center"
                key={key + "delete"}
              >
                <Typography variant="h6">#{index + 1}</Typography>
                <IconButton
                  aria-label={`delete education #${index + 1}`}
                  color="error"
                  onClick={() => {
                    removeEducation(index);
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </Stack>
              <TextField
                label="Project Name"
                variant="outlined"
                fullWidth
                size="small"
                sx={{ my: 1 }}
                value={education["name"]}
                onChange={(e) => {
                  handleChange(e, index, "name");
                }}
                key={key + "name"}
              />
              <Stack
                direction="row"
                spacing={2}
                sx={{ my: 1 }}
                key={key + "dates"}
              >
                {" "}
                <TextField
                  label="Start Date"
                  variant="outlined"
                  fullWidth
                  size="small"
                  helperText="format : dd/mm/yyyy"
                  value={education["startDate"]}
                  onChange={(e) => {
                    handleChange(e, index, "startDate");
                  }}
                  key={key + "startDate"}
                />
                <TextField
                  label="End Date"
                  variant="outlined"
                  fullWidth
                  size="small"
                  helperText="format : dd/mm/yyyy"
                  value={education["endDate"]}
                  onChange={(e) => {
                    handleChange(e, index, "endDate");
                  }}
                  key={key + "endDate"}
                />
              </Stack>

              <TextField
                label="Keywords"
                variant="outlined"
                fullWidth
                size="small"
                sx={{ my: 1 }}
                minRows={2}
                multiline
                helperText="Enter Comma Separated Keywords"
                value={education["keywords"]}
                onChange={(e) => handleChange(e, index, "keywords")}
                key={key + "keywords"}
              />
              <TextField
                label="Highlights"
                variant="outlined"
                fullWidth
                size="small"
                sx={{ my: 1 }}
                rows={5}
                multiline
                helperText="New Line for each highlight"
                value={education["highlights"]}
                onChange={(e) => handleChange(e, index, "highlights")}
                key={key + "highlights"}
              />
              <TextField
                label="URL"
                variant="outlined"
                fullWidth
                size="small"
                sx={{ my: 1 }}
                value={education["url"]}
                onChange={(e) => {
                  handleChange(e, index, "url");
                }}
                key={key + "url"}
              />
            </Box>
          );
        })}
      </Stack>

      <Button color="secondary" fullWidth sx={{ my: 1 }} onClick={handleAddNew}>
        Add New
      </Button>
      <Button
        color="primary"
        variant="contained"
        fullWidth
        sx={{ my: 1 }}
        onClick={handleSave}
      >
        Save & Next
      </Button>
    </>
  );
};

export default ProjectsSection;
