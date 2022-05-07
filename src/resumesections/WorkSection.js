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

const WorkSection = () => {
  const incrementTab = useStore((state) => state.incrementTab);
  const setWork = useStore((state) => state.setWork);
  const work = useStore((state) => state.work);

  const [workValues, setWorkValues] = useState([]);
  const [defaultWork, setDefaultWork] = useState({
    name: "",
    position: "",
    startDate: "",
    endDate: "",
    url: "",
    highlights: "",
  });

  const handleAddNew = () => {
    const template = {
      name: "",
      position: "",
      startDate: "",
      endDate: "",
      url: "",
      highlights: "",
    };
    setWorkValues([...workValues, template]);
  };
  const removeEducation = (index) => {
    setWorkValues((values) => values.filter((_, i) => i !== index));
  };

  const handleChange = (e, index, key) => {
    const value = e.target.value;
    let values = workValues;
    values[index][key] = value;
    setWorkValues([...values]);
  };

  const handleSave = () => {
    setWork([defaultWork, ...workValues]);
    incrementTab();
  };

  useEffect(() => {
    if (work.length > 0) {
      setDefaultWork(work[0]);
      setWorkValues(work.slice(1));
    }
  }, [work]);

  return (
    <>
      <div>
        <TextField
          label="Company"
          variant="outlined"
          fullWidth
          size="small"
          sx={{ my: 1 }}
          value={defaultWork.name}
          onChange={(e) =>
            setDefaultWork({
              ...defaultWork,
              name: e.target.value,
            })
          }
        />
        <TextField
          label="Position"
          variant="outlined"
          fullWidth
          size="small"
          sx={{ my: 1 }}
          value={defaultWork.position}
          onChange={(e) =>
            setDefaultWork({
              ...defaultWork,
              position: e.target.value,
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
            value={defaultWork.startDate}
            onChange={(e) =>
              setDefaultWork({
                ...defaultWork,
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
            value={defaultWork.endDate}
            onChange={(e) =>
              setDefaultWork({
                ...defaultWork,
                endDate: e.target.value,
              })
            }
          />
        </Stack>

        <TextField
          label="URL"
          variant="outlined"
          fullWidth
          size="small"
          sx={{ my: 1 }}
          value={defaultWork.url}
          onChange={(e) =>
            setDefaultWork({ ...defaultWork, url: e.target.value })
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
          value={defaultWork.highlights}
          onChange={(e) =>
            setDefaultWork({ ...defaultWork, highlights: e.target.value })
          }
        />
      </div>
      {workValues.length > 0 && <Divider />}

      <Stack direction="column" divider={<Divider />} spacing={2}>
        {workValues.map((education, index) => {
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
                label="Company"
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
              <TextField
                label="Position"
                variant="outlined"
                fullWidth
                size="small"
                sx={{ my: 1 }}
                value={education["position"]}
                onChange={(e) => {
                  handleChange(e, index, "position");
                }}
                key={key + "position"}
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

export default WorkSection;
