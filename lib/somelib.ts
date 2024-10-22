//両方で使う細かいライブラリ
//クライアント側のコードを含む
export interface basejson {
    //クライアントとサーバーの通信内容定義
    code: number,
    UUID: `${string}-${string}-${string}-${string}-${string}` | null
    msg: string
}
class somelib {

    constructor() { };
};