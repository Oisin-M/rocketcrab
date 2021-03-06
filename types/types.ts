import { PartyStatus, GameStatus } from "./enums";
import WebSocket from "ws";

export type RocketCrab = {
    partyList: Array<Party>;
};

export type Party = {
    status: PartyStatus;
    playerList: Array<Player>;
    code: string;
    uuid?: string;
    selectedGameId: string;
    gameState: GameState;
    nextPlayerId: number;
    idealHostId: number;
    me?: Player;
};

export type ClientParty = {
    status: PartyStatus;
    playerList: Array<Player>;
    me: Player;
    selectedGameId: "";
    gameState: GameState;
};

export type Player = {
    id: number;
    name: string;
    socket?: SocketIO.Socket;
    isHost: boolean;
};

export type ClientGame = {
    id: string;
    name: string;
    author?: string;
    basedOn?: BasedOn;
    description?: string;
    displayUrlText: string;
    displayUrlHref: string;
    donationUrlText?: string;
    donationUrlHref?: string;
    guideId?: string;
    guide?: string;
    guideUrl?: string;
    pictures?: Array<string>;
    category?: Array<string>;
    players?: string;
    familyFriendly: boolean;
    minPlayers?: number;
    maxPlayers?: number;
    renameParams?: Record<string, string>;
};

export type BasedOn = {
    game: string;
    author?: string;
    link?: string;
};

export type ServerGame = ClientGame & {
    getJoinGameUrl: () => Promise<JoinGameURL>;
};

export type JoinGameURL = {
    playerURL: string;
    hostURL?: string;
    code?: string;
};

export type GameCategory = {
    id: string;
    name: string;
    color: string;
    backgroundColor: string;
};

export type ClientGameLibrary = {
    categories: Array<GameCategory>;
    gameList: Array<ClientGame>;
};

export type ServerGameLibrary = {
    categories: Array<GameCategory>;
    gameList: Array<ServerGame>;
};

export type GameState = {
    status: GameStatus;
    error?: string;
    joinGameURL?: JoinGameURL;
};

export type JoinPartyResponse = {
    code: string;
    id?: number;
    name?: string;
};

export type PromiseWebSocket = WebSocket & {
    onOpen: () => Promise<void>;
    onMessage: () => Promise<string>;
    untilMessage: (msgChecker: (msg: string) => boolean) => Promise<string>;
};

export type MenuButton = {
    label: string;
    hostOnly: boolean;
    onClick: () => void;
};
