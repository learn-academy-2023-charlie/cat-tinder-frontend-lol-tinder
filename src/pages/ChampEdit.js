// ChampEdit.js

import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  Form,
  FormGroup,
  Button,
} from 'reactstrap';
import champions from '../championsData';

import '../styles/ChampEdit.css';

const ChampEdit = ({ setChampions }) => {
  const { id } = useParams();
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [image, setImage] = useState('');
  const [ability, setAbility] = useState('');
  const navigate = useNavigate();

  const [updatedChampions, setUpdatedChampions] = useState([...champions]);

  useEffect(() => {
    setModalOpen(true);

    const champion = updatedChampions.find((champ) => champ.id === +id);

    if (champion) {
      setName(champion.name);
      setAge(champion.age);
      setGender(champion.gender);
      setImage(champion.image);
      setAbility(champion.ability);
    }
  }, [id, updatedChampions]);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedChampion = {
      id: +id,
      name,
      age,
      gender,
      image,
      ability,
    };

    const updatedChampionsData = updatedChampions.map((champ) =>
      champ.id === +id ? updatedChampion : champ
    );

    setUpdatedChampions(updatedChampionsData);
    setChampions(updatedChampionsData);
    setModalOpen(false);
  };

  const handleUpdate = () => {
    navigate(`/champshow/${id}`);
  };

  const handleCancel = () => {
    navigate(`/champshow/${id}`);
  };

  return (
    <Modal isOpen={modalOpen} toggle={toggleModal}>
      <ModalHeader toggle={toggleModal}>Edit Character</ModalHeader>
      <ModalBody>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="age">Age</Label>
            <Input
              type="number"
              name="age"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="gender">Gender</Label>
            <Input
              type="select"
              name="gender"
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="image">Image</Label>
            <Input
              type="text"
              name="image"
              id="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="ability">Ability</Label>
            <Input
              type="text"
              name="ability"
              id="ability"
              value={ability}
              onChange={(e) => setAbility(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Button color="primary" type="submit" onClick={handleUpdate}>
              Update
            </Button>
            <Button color="secondary" onClick={handleCancel}>
              Cancel
            </Button>
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter></ModalFooter>
    </Modal>
  );
};

export default ChampEdit;
