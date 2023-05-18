import { createDisclosure } from "@hope-ui/solid";
import { createContext } from "solid-js";
import { createStore } from "solid-js/store";

export const ModalContext = createContext();

export default function ModalProvider(props) {
    
    const [state, setState] = createStore();

    const { isOpen, onOpen, onClose } = createDisclosure();

    const modalProviderValue = [
        { isOpen, onOpen, onClose }, 
    ]

    return (
        <ModalContext.Provider value={modalProviderValue}>
            {props.children}
        </ModalContext.Provider>
    )
} 