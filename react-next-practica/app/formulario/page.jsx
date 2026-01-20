"use client";

import { useState } from "react";
import {
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  FormFeedback,
} from "reactstrap";

export function Formulario() {
  const initialForm = {
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    edad: "",
    genero: "",
    rol: "",
    opciones: false,
    notas: "",
    fecha: "",
  };

  const [formulario, setFormulario] = useState(initialForm);
  const [modal, setModal] = useState(false);
  const [errores, setErrores] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormulario({
      ...formulario,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validarFormulario = () => {
    const nuevosErrores = {
      nombre: !formulario.nombre.trim(),
      apellido: !formulario.apellido.trim(),
      email: !formulario.email.includes("@"),
      password: formulario.password.length < 6,
      edad: !formulario.edad || formulario.edad <= 0,
      genero: !formulario.genero,
      rol: !formulario.rol,
      opciones: !formulario.opciones,
    };

    setErrores(nuevosErrores);

    return !Object.values(nuevosErrores).includes(true);
  };

  return (
    <>
      <h1>Formulario de Registro</h1>
      <Form>
        {/* Nombre */}
        <FormGroup>
          <Label>Nombre</Label>
          <Input
            type="text"
            name="nombre"
            value={formulario.nombre}
            onChange={handleChange}
            invalid={errores.nombre}
          />
          <FormFeedback>El nombre es obligatorio</FormFeedback>
        </FormGroup>

        {/* Apellido */}
        <FormGroup>
          <Label for="exampleEmail">Apellido</Label>
          <Input
            type="text"
            name="apellido"
            value={formulario.apellido}
            onChange={handleChange}
            invalid={errores.apellido}
          />
          <FormFeedback>El apellido es obligatorio</FormFeedback>
        </FormGroup>

        {/* Correo */}
        <FormGroup>
          <Label for="exampleEmail">Correo</Label>
          <Input
            type="email"
            name="email"
            value={formulario.email}
            onChange={handleChange}
            invalid={errores.email}
          />
          <FormFeedback>El correo no es válido</FormFeedback>
        </FormGroup>

        {/* Contraseña */}
        <FormGroup>
          <Label>Contraseña</Label>
          <Input
            type="password"
            name="password"
            value={formulario.password}
            onChange={handleChange}
            invalid={errores.password}
          />
          <FormFeedback>La contraseña está muy corta</FormFeedback>
        </FormGroup>

        {/* Edad */}
        <FormGroup>
          <Label>Edad</Label>
          <Input
            type="number"
            name="edad"
            value={formulario.edad}
            onChange={handleChange}
          />
        </FormGroup>

        {/* Género */}
        <FormGroup>
          <Label>Género</Label>

          <FormGroup check>
            <Input
              type="radio"
              name="genero"
              value="Masculino"
              checked={formulario.genero === "Masculino"}
              onChange={handleChange}
            />
            <Label check>Masculino</Label>
          </FormGroup>

          <FormGroup check>
            <Input
              type="radio"
              name="genero"
              value="Femenino"
              checked={formulario.genero === "Femenino"}
              onChange={handleChange}
            />
            <Label check>Femenino</Label>
          </FormGroup>
        </FormGroup>

        {/* Rol */}
        <FormGroup>
          <Label>Rol</Label>
          <Input
            type="select"
            name="rol"
            value={formulario.rol}
            onChange={handleChange}
          >
            <option value="">Selecciona</option>
            <option value="admin">Admin</option>
            <option value="user">Usuario</option>
          </Input>
        </FormGroup>

        {/* Opciones */}
        <FormGroup check>
          <Input
            type="checkbox"
            name="opciones"
            checked={formulario.opciones}
            onChange={handleChange}
          />
          <Label check>Aceptar opciones</Label>
        </FormGroup>

        {/* Notas */}
        <FormGroup>
          <Label>Notas</Label>
          <Input
            type="textarea"
            name="notas"
            value={formulario.notas}
            onChange={handleChange}
          />
        </FormGroup>

        {/* Fecha de registro */}
        <FormGroup>
          <Label>Fecha de registro</Label>
          <Input
            type="date"
            name="fecha"
            value={formulario.fecha}
            onChange={handleChange}
          />
        </FormGroup>

        <Button
          type="button"
          color="primary"
          onClick={() => {
            if (validarFormulario()) {
              setModal(true);
            }
          }}
        >
          Mostrar
        </Button>

        <Button
          type="button"
          color="secondary"
          onClick={() => setFormulario(initialForm)}
        >
          Reiniciar
        </Button>
      </Form>

      <Modal isOpen={modal} toggle={() => setModal(!modal)}>
        <ModalHeader toggle={() => setModal(!modal)}>
          Información registrada
        </ModalHeader>

        <ModalBody>
          <p>Nombre: {formulario.nombre}</p>
          <p>Apellido: {formulario.apellido}</p>
          <p>Email: {formulario.email}</p>
          <p>Edad: {formulario.edad}</p>
          <p>Género: {formulario.genero}</p>
          <p>Opciones: {formulario.opciones ? "Aceptadas" : "No aceptadas"}</p>
          <p>Rol: {formulario.rol}</p>
          <p>Notas: {formulario.notas}</p>
        </ModalBody>
      </Modal>
    </>
  );
}
