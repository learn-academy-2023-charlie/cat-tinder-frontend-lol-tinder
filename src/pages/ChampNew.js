import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
import MockData from '../championsData';


const ChampNew = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [characterName, setCharacterName] = useState('');
  const [characterAge, setCharacterAge] = useState('');
  const [characterGender, setCharacterGender] = useState('');
  const [characterImage, setCharacterImage] = useState('');
  const [characterDescription, setCharacterDescription] = useState('');


  const navigate = useNavigate();

  useEffect(() => {
    setModalOpen(true); // Open the modal when the component mounts
  }, []);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newCharacter = {
      id: MockData.length + 1, // Generate a unique ID for the new character
      name: characterName,
      age: characterAge,
      gender: characterGender,
      description: characterDescription,
      image: characterImage, // Add the image URL to the new character
    };
    MockData.push(newCharacter);

    // Reset the form fields and close the modal
    setCharacterName('');
    setCharacterAge('');
    setCharacterGender('');
    setCharacterDescription('');
    setCharacterImage('');
    setModalOpen(false);
  };

  const handleAdded = () => {
    navigate('/champIndex');
  };

  const handleCancel = () => {
    navigate('/champIndex');
  };

  return (
    <Modal isOpen={modalOpen} toggle={toggleModal}>
      <ModalHeader toggle={toggleModal}>Add Character</ModalHeader>
      <ModalBody>
        <Form onSubmit={handleFormSubmit}>
          <FormGroup>
            <Label for="characterName">Name</Label>
            <Input
              type="text"
              name="characterName"
              id="characterName"
              value={characterName}
              onChange={(e) => setCharacterName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="characterAge">Age</Label>
            <Input
              type="number"
              name="characterAge"
              id="characterAge"
              value={characterAge}
              onChange={(e) => setCharacterAge(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="characterGender">Gender</Label>
            <Input
              type="select"
              name="characterGender"
              id="characterGender"
              value={characterGender}
              onChange={(e) => setCharacterGender(e.target.value)}
            >
              <option value="">Select Gender</option> {/* Added empty option */}
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="characterImage">Image URL</Label>
            <Input
              type="text"
              name="characterImage"
              id="characterImage"
              value={characterImage}
              onChange={(e) => setCharacterImage(e.target.value)}
            />
            <FormGroup>
            <Label for="characterDescription">Description</Label>
            <Input
                type="textarea"
                name="characterDescription"
                id="characterDescription"
                value={characterDescription}
                onChange={(e) => setCharacterDescription(e.target.value)}
            />
            </FormGroup>
          </FormGroup>
          <ModalFooter>
            <Button color="primary" type="submit" onClick={handleAdded}>
              Add
            </Button>
            <Button color="secondary" onClick={handleCancel}>
              Cancel
            </Button>
          </ModalFooter>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default ChampNew;
