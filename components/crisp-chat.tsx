import { Crisp } from "crisp-sdk-web";
import  { useEffect } from "react";

const CrispChat = () => {
    useEffect(() => {
    Crisp.configure("4154c789-b377-421c-92af-d5f9357124ab");
  }, []);
  return null;
};

export default CrispChat;
