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

const EducationSection = () => {
  const incrementTab = useStore((state) => state.incrementTab);
  const setEducation = useStore((state) => state.setEducation);
  const education = useStore((state) => state.education);

  const [educationValues, setEducationValues] = useState([]);
  const [defaultEducation, setDefaultEducation] = useState({
    institution: "",
    studyType: "",
    area: "",
    startDate: "",
    endDate: "",
    score: "",
    url: "",
  });

  const handleAddNew = () => {
    const template = {
      institution: "",
      studyType: "",
      area: "",
      startDate: "",
      endDate: "",
      score: "",
      url: "",
    };
    setEducationValues([...educationValues, template]);
  };
  const removeEducation = (index) => {
    setEducationValues((values) => values.filter((_, i) => i !== index));
  };

  const handleChange = (e, index, key) => {
    const value = e.target.value;
    let values = educationValues;
    values[index][key] = value;
    setEducationValues([...values]);
  };

  const handleSave = () => {
    setEducation([defaultEducation, ...educationValues]);
    incrementTab();
  };

  useEffect(() => {
    if (education.length > 0) {
      setDefaultEducation(education[0]);
      setEducationValues(education.slice(1));
    }
  }, [education]);

  return (
    <>
      <div>
        <TextField
          label="Institution"
          variant="outlined"
          fullWidth
          size="small"
          sx={{ my: 1 }}
          value={defaultEducation.institution}
          onChange={(e) =>
            setDefaultEducation({
              ...defaultEducation,
              institution: e.target.value,
            })
          }
        />
        <TextField
          label="Study Type"
          variant="outlined"
          fullWidth
          size="small"
          sx={{ my: 1 }}
          value={defaultEducation.studyType}
          onChange={(e) =>
            setDefaultEducation({
              ...defaultEducation,
              studyType: e.target.value,
            })
          }
        />
        <TextField
          label="Area"
          variant="outlined"
          fullWidth
          size="small"
          sx={{ my: 1 }}
          value={defaultEducation.area}
          onChange={(e) =>
            setDefaultEducation({ ...defaultEducation, area: e.target.value })
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
            value={defaultEducation.startDate}
            onChange={(e) =>
              setDefaultEducation({
                ...defaultEducation,
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
            value={defaultEducation.endDate}
            onChange={(e) =>
              setDefaultEducation({
                ...defaultEducation,
                endDate: e.target.value,
              })
            }
          />
        </Stack>
        <TextField
          label="Score"
          variant="outlined"
          fullWidth
          size="small"
          sx={{ my: 1 }}
          value={defaultEducation.score}
          onChange={(e) =>
            setDefaultEducation({ ...defaultEducation, score: e.target.value })
          }
        />
        <TextField
          label="URL"
          variant="outlined"
          fullWidth
          size="small"
          sx={{ my: 1 }}
          value={defaultEducation.url}
          onChange={(e) =>
            setDefaultEducation({ ...defaultEducation, url: e.target.value })
          }
        />
      </div>
      {educationValues.length > 0 && <Divider />}

      <Stack direction="column" divider={<Divider />} spacing={2}>
        {educationValues.map((education, index) => {
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
                label="Institution"
                variant="outlined"
                fullWidth
                size="small"
                sx={{ my: 1 }}
                value={education["institution"]}
                onChange={(e) => {
                  handleChange(e, index, "institution");
                }}
                key={key + "institution"}
              />
              <TextField
                label="Study Type"
                variant="outlined"
                fullWidth
                size="small"
                sx={{ my: 1 }}
                value={education["studyType"]}
                onChange={(e) => {
                  handleChange(e, index, "studyType");
                }}
                key={key + "studyType"}
              />
              <TextField
                label="Area"
                variant="outlined"
                fullWidth
                size="small"
                sx={{ my: 1 }}
                value={education["area"]}
                onChange={(e) => {
                  handleChange(e, index, "area");
                }}
                key={key + "area"}
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
                label="Score"
                variant="outlined"
                fullWidth
                size="small"
                sx={{ my: 1 }}
                value={education["score"]}
                onChange={(e) => {
                  handleChange(e, index, "score");
                }}
                key={key + "score"}
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

export default EducationSection;
