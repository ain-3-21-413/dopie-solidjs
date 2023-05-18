import { Button, HStack, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, SimpleOption, SimpleSelect, Textarea, VStack } from "@hope-ui/solid";
import { onMount, useContext } from "solid-js";
import { ModalContext } from "../../providers/ModalProvider";
import { CurrentPredictionContext } from "../../providers/CurrentPredictionProvider";

export default function PredictionModal() {

    const [{ isOpen, onOpen, onClose }] = useContext(ModalContext);

    const [state, { setDate, setTime, setHome, setAway, setOutcomeName, setOutcomeCoefficient, setText, clear }] = useContext(CurrentPredictionContext);

    onMount(() => {
        setDate("date");
        setTime("time");
        setHome("home");
        setAway("away");
    })

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
                        <SimpleSelect placeholder="Выбери" w={"250px"} onChange={(v) => {setOutcomeName(v)}}>
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
                        <Textarea onInput={(e) => setText(e.currentTarget.value)}>
                            {state.text}
                        </Textarea>
                    </VStack>
                </ModalBody>
                <ModalFooter>
                    <Button fullWidth onClick={() => {
                        console.log({
                            userId: "userId", 
                            fixtureId: state.fixture.id, 
                            outcomeName: state.outcome.name, 
                            outcomeCoefficient: state.outcome.coefficient, 
                            text: state.text
                        }); 
                        onClose();
                        clear();
                    }}>
                        Создать прогноз
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}