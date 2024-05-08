import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import useUi from "../../../contexts/ui/useUi";
import useUser from "../../../contexts/user/useUser";

import {
  ChosePhotoButton,
  ChosePhotoLabel,
  Container,
  Content,
  UserImage,
} from "./styles";

import Spacer from "../../../components/Spacer";
import Button from "../../../components/Button";
import TextField from "../../../components/TextField";
import AppBar from "../../../components/AppBar";

import countries from "../../../utils/countries.json";
import positions from "../../../utils/positions.json";
import isDateValid from "../../../utils/isDateValid";
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

const EditAccount: React.FC = () => {
  const { user, editUserData, logout } = useUser();
  const { strings, loading, theme } = useUi();
  const navigate = useNavigate();

  const photoRef = useRef<HTMLInputElement>(null);

  const [name, setName] = useState(user ? user!.name : "");
  const [bornDay, setBornDay] = useState(user ? user.bornDay : "");
  const [country, setCountry] = useState(user ? user.country : "");
  const [position, setPosition] = useState<Position>(user ? user.position : "");
  const [photo, setPhoto] = useState<any>(user ? user.photoUrl : "");
  const [dataChanged, setDataChanged] = useState(false);

  useEffect(() => {
    if (!user) return;
    setDataChanged(
      name !== user.name ||
        bornDay !== user.bornDay ||
        country !== user.country ||
        position !== user.position ||
        photo !== user.photoUrl
    );
  }, [name, bornDay, country, position, photo]);

  const isFormFilled = () =>
    name.trim() &&
    bornDay &&
    country &&
    position &&
    isDateValid(bornDay) &&
    photo &&
    dataChanged;

  const handlePickImage = async (img: File | null) => {
    setPhoto(
      img
        ? {
            file: img,
            url: URL.createObjectURL(img),
          }
        : user!.photoUrl
    );
  };

  const handleEditProfile = () => {
    if (!user) return;

    editUserData({
      photo: photo !== user.photoUrl ? photo.file : undefined,
      name: name !== user.name ? name : undefined,
      bornDay: bornDay !== user.bornDay ? bornDay : undefined,
      position: country !== user.country ? position : undefined,
      country: position !== user.position ? country : undefined,
    });
  };

  return (
    <AuthLayout>
      <Container>
          <AppBar
            onBack={() => navigate(-1)}
            primaryAction={() => (
              <MdLogout size={24} color={theme.colors.action} />
            )}
            onPrimaryAction={logout}
          />
          <Content>
            <UserImage src={typeof photo !== "string" ? photo.url : photo} />
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
                <ChosePhotoLabel>{strings.editImage}</ChosePhotoLabel>
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
              onChange={(value) =>
                typeof value === "string" && setCountry(value)
              }
              value={country}
            />
            <Spacer height={40} />
            <Button
              label={strings.save}
              disabled={loading || !isFormFilled()}
              loading={loading}
              onClick={handleEditProfile}
            />
          </Content>
      </Container>
    </AuthLayout>
  );
};

export default EditAccount;
