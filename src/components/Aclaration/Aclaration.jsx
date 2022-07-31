import { Drawer, Typography } from "@material-ui/core";
import { useState } from "react";
import { Content, Button, RootContainer } from "./styles";

const Aclaration = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <RootContainer>
      <Button onClick={handleDrawerToggle}>
        <Typography>❗❗</Typography>
      </Button>
      <Drawer
        onClick={handleDrawerToggle}
        elevation={0}
        PaperProps={{ style: { backgroundColor: "transparent" } }}
        anchor={window.screen.width < 768 ? "bottom" : "right"}
        open={open}
        onClose={handleDrawerToggle}
      >
        <Content>
          <Typography variant="h2">🧏‍♂️</Typography>
          <Typography component="p">
            Los datos empleados en este sitio son tomados de la base de datos
            proveida por IMDb mediante su API OMDb. Si realizando una búsqueda
            correcta no encuentra resultados satisfactorios, lo mas posible es
            que lo que busca no se haya en la base de datos anteriormente
            mencionada
          </Typography>
        </Content>
      </Drawer>
    </RootContainer>
  );
};

export default Aclaration;
