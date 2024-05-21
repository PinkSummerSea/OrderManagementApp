import { Outlet } from "react-router-dom";
import NavBar from "./nav/NavBar";
import { Container } from "@mui/material";

const Layout = () => {
  return (
    <>
        <NavBar />
        <Container sx={{p: "2rem"}}>
            <Outlet />
        </Container>
    </>
  )
}

export default Layout