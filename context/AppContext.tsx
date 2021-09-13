import React from "react";
import {useState, useContext} from "react";

interface ModalContext {
  modalVisibility: boolean;
  modalName: string;
}

const ModalCtx = React.createContext<ModalContext | undefined>(undefined);
const ModalCtxUpdate = React.createContext({});

export function useModalUpdate(){
  return useContext(ModalCtxUpdate)
}
// Provider in your app

const AppContext = ({children}:any) => {
  const [modalState, setModalState] = useState<ModalContext>()
  function updateModalInfo(){
    // setModalState(...modalState, {modalName: "register"})
  }


  return (
    <ModalCtx.Provider value={modalState}>
      <ModalCtxUpdate.Provider value={updateModalInfo}>
        {children}
      </ModalCtxUpdate.Provider>
    </ModalCtx.Provider>
  );
};

export default AppContext;
