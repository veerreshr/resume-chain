import React, { useState, useEffect } from "react";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useStore } from "./../store";

const SkillsSection = () => {
  const incrementTab = useStore((state) => state.incrementTab);
  const setSkillsAction = useStore((state) => state.setSkills);
  const skillsFromStore = useStore((state) => state.skills);

  const [skills, setSkills] = useState([]);

  const handleSave = () => {
    setSkillsAction(skills);
    incrementTab();
  };

  useEffect(() => {
    setSkills(skillsFromStore);
  }, [skillsFromStore]);
  return (
    <>
      <Autocomplete
        multiple
        fullWidth
        id="skills"
        options={[]}
        defaultValue={skills}
        freeSolo
        value={skills}
        onChange={(_, value) => {
          setSkills(value);
        }}
        renderTags={(value, getTagProps) => {
          return value.map((option, index) => (
            <Chip
              variant="outlined"
              label={option}
              {...getTagProps({ index })}
            />
          ));
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Skills"
            placeholder="Skills"
            helperText="Add your skill and press enter"
          />
        )}
      />
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

export default SkillsSection;
