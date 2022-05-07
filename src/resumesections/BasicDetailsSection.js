import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import { useStore } from "./../store";
import Stack from "@mui/material/Stack";
import { useMoralis } from "react-moralis";

const Input = styled("input")({
  display: "none",
});

const BasicDetailsSection = () => {
  const incrementTab = useStore((state) => state.incrementTab);
  const setBasics = useStore((state) => state.setBasics);
  const basics = useStore((state) => state.basics);

  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [label, setLabel] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [url, setUrl] = useState("");
  const [summary, setSummary] = useState("");

  const { Moralis, user, isAuthenticated } = useMoralis();

  const handlePhoto = async (e) => {
    if (!isAuthenticated) {
      alert("Please connect to the network to upload a photo");
      return;
    }
    const data = e.target.files[0];
    const file = new Moralis.File(
      `${user.get("ethAddress")}_profilephoto`,
      data
    );
    await file.saveIPFS();
    setImage(file._ipfs);
  };

  const handleSave = () => {
    const template = {
      name,
      label,
      image,
      email,
      phone,
      url,
      summary,
    };
    setBasics(template);
    incrementTab();
  };
  useEffect(() => {
    setName(basics.name);
    setLabel(basics.label);
    setEmail(basics.email);
    setPhone(basics.phone);
    setUrl(basics.url);
    setSummary(basics.summary);
    setImage(basics.image);
  }, [basics]);

  return (
    <>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ marginBottom: 1 }}
      >
        <Avatar
          alt="Profile Image"
          src={image}
          sx={{ width: 80, height: 80 }}
        />
        <label htmlFor="profile_picture">
          <Input
            accept="image/*"
            id="profile_picture"
            type="file"
            multiple={false}
            onChange={handlePhoto}
          />
          <Button
            variant="contained"
            component="span"
            size="small"
            color="secondary"
          >
            Upload Image
          </Button>
        </label>
      </Stack>
      <TextField
        id="name"
        label="Name"
        variant="outlined"
        fullWidth
        size="small"
        sx={{ my: 1 }}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        id="label"
        label="Label"
        variant="outlined"
        fullWidth
        size="small"
        sx={{ my: 1 }}
        value={label}
        onChange={(e) => setLabel(e.target.value)}
      />
      <TextField
        id="email"
        label="Email"
        type="email"
        variant="outlined"
        fullWidth
        size="small"
        sx={{ my: 1 }}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        id="phone"
        label="Phone Number"
        type="tel"
        variant="outlined"
        fullWidth
        size="small"
        sx={{ my: 1 }}
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
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
      <TextField
        id="summary"
        label="Summary"
        variant="outlined"
        fullWidth
        size="small"
        sx={{ my: 1 }}
        rows={3}
        multiline
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
      />
      <Button variant="contained" fullWidth onClick={handleSave}>
        Save & Next
      </Button>
    </>
  );
};

export default BasicDetailsSection;
