import { Server, WebSocketServer } from "ws";

/**
 * あとでサーバー内のUUID解釈とかもろもろを行う
 * コンフリクト防止用のlib
 */
class serverhandler {
    private port: number;
    constructor(port: number) {
        this.port = port;
    };
    /**
     * あとでanyは定義する
     * @param callback 
     */
    public startserver(callback: (oppai: any) => void) {

    }

    private crashtrigger() {

    }
};