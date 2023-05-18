import { Button, HStack, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, SimpleOption, SimpleSelect, Textarea, VStack } from "@hope-ui/solid";
import { useContext } from "solid-js";
import { ModalContext } from "../../providers/ModalProvider";
import { CurrentPredictionContext } from "../../providers/CurrentPredictionProvider";

export default function PredictionModal() {

    const [{ isOpen, onOpen, onClose }] = useContext(ModalContext);

    const [state] = useContext(CurrentPredictionContext);

    return (
        <Modal opened={isOpen()} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalCloseButton />
                <ModalHeader>
                    Создание Прогноза
                </ModalHeader>
                <ModalBody>
                    <HStack justifyContent={"center"} gap={"$1"} fontSize={"14px"}>
                        <Heading fontWeight={"normal"}>
                            {state.fixture.dateTime.date}
                        </Heading>
                        <Heading>
                            {state.fixture.dateTime.time}
                        </Heading>
                    </HStack>
                    <HStack justifyContent={"center"} gap={"$1"} borderBottomWidth={"2px"} borderBottomStyle={"dotted"} borderBottomColor={"$blackAlpha7"} pb={"$3"}>
                        <Heading>
                            {state.fixture.teams.home.name}
                        </Heading> 
                        <Heading>
                            -
                        </Heading>
                        <Heading>
                            {state.fixture.teams.away.name}
                        </Heading> 
                    </HStack>
                    <HStack fullWidth justifyContent={"space-between"} py={"$3"}>
                        <Heading fontWeight={"normal"}>
                            Исход
                        </Heading>
                        <SimpleSelect placeholder="Выбери" w={"250px"}>
                            <SimpleOption value={"home"}>
                                П1
                            </SimpleOption>
                            <SimpleOption value={"draw"}>
                                X
                            </SimpleOption>
                            <SimpleOption value={"away"}>
                                П2
                            </SimpleOption>
                        </SimpleSelect>
                    </HStack>
                    <VStack alignItems={"start"}>
                        <Heading fontWeight={"normal"}>
                            Обоснование
                        </Heading>
                        <Textarea>
                            {state.text}
                        </Textarea>
                    </VStack>
                </ModalBody>
                <ModalFooter>
                    <Button fullWidth onClick={onClose}>
                        Создать прогноз
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}