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

const AwardsSection = () => {
  const incrementTab = useStore((state) => state.incrementTab);
  const setAwards = useStore((state) => state.setAwards);
  const awards = useStore((state) => state.awards);

  const [awardValues, setAwardValues] = useState([]);
  const [defaultAward, setDefaultAward] = useState({
    title: "",
    awarder: "",
    date: "",
    url: "",
    summary: "",
  });

  const handleAddNew = () => {
    const template = {
      title: "",
      awarder: "",
      date: "",
      url: "",
      summary: "",
    };
    setAwardValues([...awardValues, template]);
  };
  const removeEducation = (index) => {
    setAwardValues((values) => values.filter((_, i) => i !== index));
  };

  const handleChange = (e, index, key) => {
    const value = e.target.value;
    let values = awardValues;
    values[index][key] = value;
    setAwardValues([...values]);
  };

  const handleSave = () => {
    setAwards([defaultAward, ...awardValues]);
    incrementTab();
  };

  useEffect(() => {
    if (awards && awards.length > 0) {
      setDefaultAward(awards[0]);
      setAwardValues(awards.slice(1));
    }
  }, [awards]);

  return (
    <>
      <div>
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          size="small"
          sx={{ my: 1 }}
          value={defaultAward.title}
          onChange={(e) =>
            setDefaultAward({
              ...defaultAward,
              title: e.target.value,
            })
          }
        />
        <TextField
          label="Date"
          variant="outlined"
          fullWidth
          size="small"
          helperText="format : dd/mm/yyyy"
          value={defaultAward.date}
          onChange={(e) =>
            setDefaultAward({
              ...defaultAward,
              date: e.target.value,
            })
          }
        />
        <TextField
          label="Awarder"
          variant="outlined"
          fullWidth
          size="small"
          sx={{ my: 1 }}
          value={defaultAward.awarder}
          onChange={(e) =>
            setDefaultAward({
              ...defaultAward,
              awarder: e.target.value,
            })
          }
        />

        <TextField
          label="URL"
          variant="outlined"
          fullWidth
          size="small"
          sx={{ my: 1 }}
          value={defaultAward.url}
          onChange={(e) =>
            setDefaultAward({ ...defaultAward, url: e.target.value })
          }
        />
        <TextField
          label="Summary"
          variant="outlined"
          fullWidth
          size="small"
          sx={{ my: 1 }}
          rows={3}
          multiline
          value={defaultAward.summary}
          onChange={(e) =>
            setDefaultAward({ ...defaultAward, summary: e.target.value })
          }
        />
      </div>
      {awardValues.length > 0 && <Divider />}

      <Stack direction="column" divider={<Divider />} spacing={2}>
        {awardValues.map((education, index) => {
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
                label="Title"
                variant="outlined"
                fullWidth
                size="small"
                sx={{ my: 1 }}
                value={education["title"]}
                onChange={(e) => {
                  handleChange(e, index, "title");
                }}
                key={key + "title"}
              />

              <TextField
                label="Date"
                variant="outlined"
                fullWidth
                size="small"
                helperText="format : dd/mm/yyyy"
                value={education["date"]}
                onChange={(e) => {
                  handleChange(e, index, "date");
                }}
                key={key + "date"}
              />
              <TextField
                label="Awarder"
                variant="outlined"
                fullWidth
                size="small"
                sx={{ my: 1 }}
                value={education["awarder"]}
                onChange={(e) => {
                  handleChange(e, index, "awarder");
                }}
                key={key + "awarder"}
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
              <TextField
                label="Summary"
                variant="outlined"
                fullWidth
                size="small"
                sx={{ my: 1 }}
                rows={3}
                multiline
                value={education["summary"]}
                onChange={(e) => handleChange(e, index, "summary")}
                key={key + "summary"}
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

export default AwardsSection;
