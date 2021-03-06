import { Card, Spacer } from "@geist-ui/react";
import React from "react";
import { JellyfishSpinner } from "react-spinners-kit";
import { ClientGame, Player } from "../../types/types";
import PrimaryButton from "../atoms/PrimaryButton";
import ButtonGroup from "./ButtonGroup";

const PartyStatus = ({
    selectedGame,
    host: { name: hostName },
    onShowGameInfo,
}: PartyStatusProps): JSX.Element => (
    <Card
        style={{
            border: "1pt solid #ddd",
            borderRadius: "0",
        }}
    >
        <Card.Content style={{ padding: "1em" }}>
            {selectedGame ? (
                <>
                    <div>Ready to play:</div>
                    <h3
                        style={{
                            marginTop: ".2em",
                            lineHeight: "1.2em",
                        }}
                    >
                        {selectedGame.name}
                    </h3>
                    <div>Waiting for {hostName} to start...</div>
                    <Spacer y={1} />
                    <ButtonGroup>
                        <PrimaryButton onClick={onShowGameInfo} size="small">
                            What is {selectedGame.name}?
                        </PrimaryButton>
                    </ButtonGroup>
                </>
            ) : (
                <div style={{ display: "flex" }}>
                    <span style={{ minWidth: "4em" }}>
                        <JellyfishSpinner size={4} sizeUnit="em" color="Grey" />
                    </span>

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            lineHeight: "1.2em",
                        }}
                    >
                        {"Waiting for " + hostName + " to select a game..."}
                    </div>
                </div>
            )}
        </Card.Content>
    </Card>
);

type PartyStatusProps = {
    selectedGame: ClientGame;
    host: Player;
    onShowGameInfo: () => void;
};

export default PartyStatus;
