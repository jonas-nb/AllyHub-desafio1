import React from "react";
import { TextField, Box } from "@mui/material";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import { useState } from "react";
import { useEffect } from "react";

const MainComponent = () => {
  let [Recebe_String, setRecebe_String] = useState("");
  let [String_Invertida, setString_Invertida] = useState("");

  function Inverte() {
    let saida = "";
    for (let i = Recebe_String.length - 1; i >= 0; i--) {
      saida += Recebe_String[i];
    }
    console.log(saida);
    String_Invertida = saida;
    return saida;
  }

  Inverte();
  console.log(String_Invertida);
  return (
    <div>
      {/* Explicação do programa */}
      <p className="m-auto w-72 mt-5 text-center text-lg text-[#6a6a6a] font-[600] italic">
        Digite algum carácter no campo abaixo e confira a inversão em tempo real
        🔃.
      </p>
      {/* Container entrada */}
      <div className="flex flex-col items-center mt-10">
        <label className="text-2xl #222222" htmlFor="entrada">
          Digite Aqui 👇🏽
        </label>
        <Box
          className="mt-4 mr-7 "
          sx={{ display: "flex", alignItems: "flex-end" }}
        >
          <AutorenewIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            className="md:w-96"
            id="entrada"
            label="Digite qualquer coisa"
            variant="standard"
            onChange={(e) => setRecebe_String(e.target.value)}
          />
        </Box>
      </div>
      {/* container saida */}
      <div className="mt-10">
        <div
          className={`${
            Recebe_String !== ""
              ? "text-[#1bcc8b] animate-bounce transition-colors duration-300"
              : "text-[#2784da] "
          } text-center text-sm italic font-[600]`}
        >
          String invertida ⬇
        </div>
        <div className="m-auto w-max-[11rem] h-36 text-ellipsis overflow-y-auto p-3 text-center  text-[#0000ff] font-[600]">
          {String_Invertida}
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
