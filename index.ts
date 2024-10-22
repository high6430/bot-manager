import { CacheType, Client, CommandInteractionOption } from "discord.js";
import { Axios } from "axios";
import { WebSocketServer } from "ws";
//ここには各disocordユーティリティーからpingを受取、uuidを管理しいろいろやる
//監視部分を書く
//uuid hanlerとかは別途libを用意

function main() {
    const port = 1193;//展開ポート
    try {
        const server = new WebSocketServer({ port: port })
        //ここからエントリ
        server.on('connection', (ws) => {
            ws.on("message", (msg) => {
                //ここのパース処理で分岐させる
                //msgは原則json
                //状況に応じてクラスを引っ張ってくる
            })
        });
    } catch (error) {
        //server crashed
    }
}
main();