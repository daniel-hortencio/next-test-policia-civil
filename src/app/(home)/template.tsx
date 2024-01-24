"use client";

import { ReactNode } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

import { Box } from "@/components";
import { Grid } from "@/components";

export default function RootTemplate({ children }: { children: ReactNode }) {
  const xs = useMediaQuery("(max-width:900px)");

  return (
    <Grid.Container sx={{ width: "100%", overflowY: "auto" }}>
      <Grid.Item
        xs={12}
        md={6}
        sx={{
          minHeight: "100vh",
          boxShadow: "10px 10px 76px 1px rgba(0,0,0,0.5);",
          position: "relative",
          zIndex: 2,
        }}
      >
        <Box height="100%" display="flex" flexDirection="column">
          <Box
            component="header"
            height="8rem"
            padding="2rem"
            width="100%"
            display="flex"
            alignItems="center"
            marginLeft={xs ? 0 : "auto"}
            maxWidth={xs ? "initial" : 1240 / 2}
          >
            <img
              alt="Governo do Estado do Ceará"
              src="https://www.ceara.gov.br/wp-content/uploads/2023/10/logotipo-governo-do-ceara-2023.svg"
              style={{
                height: "4rem",
                width: "100%",
                objectPosition: "left",
                objectFit: "contain",
              }}
            />
          </Box>

          <Box
            padding="2rem"
            maxWidth={1240 / 2}
            width="100%"
            marginLeft="auto"
            marginRight={xs ? "auto" : 0}
            display="flex"
            flex="auto"
            flexDirection="column"
            justifyContent="center"
            sx={{ height: "calc(100%-8rem)" }}
          >
            {children}
          </Box>
        </Box>
      </Grid.Item>
      <Grid.Item xs={0} md={6} sx={{ minHeight: "100vh", overflowY: "hidden" }}>
        <img
          alt="CISP - Policia Civil"
          src="https://www.policiacivil.ce.gov.br/wp-content/uploads/sites/26/2023/12/Texto-Lidiane-3-de-dezembro-O-papel-do-delegado-de-Policia-como-o-primeiro-garantidor-da-Justica-em-prol-a-Sociedade-2.jpeg"
          style={{
            objectFit: "cover",
            objectPosition: "40% center",
            width: "100%",
            height: "100%",
          }}
        />
      </Grid.Item>
    </Grid.Container>
  );
}
