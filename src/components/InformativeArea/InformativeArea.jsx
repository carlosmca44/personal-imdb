import { Typography } from "@material-ui/core";
import { useState } from "react";
import { Alert, RootContainer } from "./styles";

const rQuery = ["Movie not found!", "Incorrect IMDb ID."];

const emoji = ["🤷‍♀️", "🔍", "🧐"];
const feedback = [
  "No hemos encontrado lo que buscas, prueba con algo diferente",
  "Danos algo para buscar, así tal vez te podamos ayudar",
  "Descubre género, sinopsis, puntuaciones y más de tus series, películas y videojuegos favoritos",
];

const InformativeArea = ({ errorI }) => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <RootContainer>
        <Typography variant="h2">
          {errorI === rQuery[0]
            ? emoji[0]
            : errorI === rQuery[1]
              ? emoji[1]
              : emoji[2]}
        </Typography>
        <Typography component="p" style={{ maxWidth: 300 }}>
          {errorI === rQuery[0]
            ? feedback[0]
            : errorI === rQuery[1]
              ? feedback[1]
              : feedback[2]}
        </Typography>
      </RootContainer>
      <Alert
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={open}
        onClose={handleClose}
        onChange={handleClose}
        message={
          "🧏‍♂️ Los datos empleados en este sitio son tomados de la base de datos proveida por IMDb mediante su interfaz de programación de aplicaciones OMDb API. Si realizando una búsqueda correcta no encuentra resultados satisfactorios, lo mas posible es que lo que busca no se haya en la base de datos"
        }
      />
    </>
  );
};

export default InformativeArea;
