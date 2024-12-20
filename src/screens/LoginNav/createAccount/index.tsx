import React, { useRef, useState } from "react";

import useUi from "../../../contexts/ui/useUi";
import useUser from "../../../contexts/user/useUser";

import {
  ChosePhotoButton,
  ChosePhotoLabel,
  Container,
  Content,
  UserImage,
} from "./styles";

import defaultUser from "../../../assets/user.jpg";

import Spacer from "../../../components/Spacer";
import Button from "../../../components/Button";
import TextField from "../../../components/TextField";

import countries from "../../../utils/countries.json";
import positions from "../../../utils/positions.json";
import isDateValid from "../../../utils/isDateValid";
import AppBar from "../../../components/AppBar";
import { MdLogout } from "react-icons/md";
import Select from "../../../components/Select";
import AuthLayout from "../../../layouts/authLyt";

const POSITIONS: string[] = [
  "GOL",
  "ZAG",
  "LD",
  "LE",
  "VOL",
  "MD",
  "ME",
  "SA",
  "PD",
  "PE",
  "ATA",
  "LB",
  "ADD",
  "ADE",
  "MC",
  "MEI",
];

const CreateAccount: React.FC = () => {
  const { createUserData, logout } = useUser();
  const { strings, loading, theme } = useUi();

  const photoRef = useRef<HTMLInputElement>(null);

  const [name, setName] = useState("");
  const [bornDay, setBornDay] = useState("");
  const [country, setCountry] = useState("cb");
  const [position, setPosition] = useState<Position>();
  const [photo, setPhoto] = useState<any>();

  const isFormFilled = () =>
    name.trim() &&
    bornDay &&
    country &&
    position &&
    isDateValid(bornDay) &&
    photo;

  const handlePickImage = async (img: File | null) => {
    setPhoto(
      img
        ? {
            file: img,
            url: URL.createObjectURL(img),
          }
        : defaultUser
    );
  };

  const handleCreateUserData = () =>
    createUserData(photo.file, name, bornDay, position!, country);

  return (
    <AuthLayout>
      <Container>
        <AppBar
          primaryAction={() => (
            <MdLogout size={24} color={theme.colors.action} />
          )}
          onPrimaryAction={logout}
        />
        <Content>
          <UserImage src={photo ? photo.url : defaultUser} />
          <Spacer height={16} />
          <input
            name='logo-inpt'
            accept='image/png, image/jpeg'
            style={{ display: "none" }}
            type='file'
            onChange={({ target: { files } }) =>
              handlePickImage(files ? files[0] : null)
            }
            ref={photoRef}
          />
          <label htmlFor='logo-inpt'>
            <ChosePhotoButton
              onClick={() => photoRef.current && photoRef.current.click()}
            >
              <ChosePhotoLabel>{strings.addImage}</ChosePhotoLabel>
            </ChosePhotoButton>
          </label>
          <Spacer height={16} />
          <TextField
            label={strings.name}
            value={name}
            onChange={setName}
            id='nameInput'
            type='text'
          />
          <TextField
            label={strings.bornDay}
            value={bornDay}
            onChange={setBornDay}
            placeholder='dd/mm/yyyy'
            id='bornDayInput'
            type='text'
          />
          <Select
            label={strings.position}
            data={positions}
            onChange={(value) =>
              typeof value === "string" &&
              POSITIONS.includes(value) &&
              setPosition(value)
            }
            value={position || ""}
          />
          <Select
            label={strings.flag}
            data={countries}
            onChange={(value) => typeof value === "string" && setCountry(value)}
            value={country}
          />
          <Spacer height={40} />
          <Button
            label={strings.createProfile}
            disabled={loading || !isFormFilled()}
            loading={loading}
            onClick={handleCreateUserData}
          />
        </Content>
      </Container>
    </AuthLayout>
  );
};

export default CreateAccount;
