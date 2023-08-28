import { useState } from "react";

import CreateFolder from "../../components/modals/createFolder/CreateFolder";
import IconCreateFolder from "@mui/icons-material/CreateNewFolderRounded";

import iconFolder from "../../resources/icons/folder.png"
import style from "./Listen.module.css";

const Listen = () => {
    const [showCreateFolder, setShowCreateFolder] = useState(false);

    const handlerShowCreateFolder = () => {
        setShowCreateFolder((prev) => !prev);
    };

    return (
        <div className={style.container}>
            <CreateFolder
                isShow={showCreateFolder}
                handlerToggleShow={handlerShowCreateFolder}
            />
            <div className={style.search}>
                <input type="text" placeholder="ファイルを検索" />
            </div>
            <div className={style.folder}>
                <img src={iconFolder} alt="" />
                <div className={style.description}>
                    <div className={style.title}>
                        <span>会議</span>
                    </div>
                    <div className={style.files}>
                        <span>8個のファイル</span>
                    </div>
                </div>
            </div>

            <div className={style.folder}>
                <img src={iconFolder} alt="" />
                <div className={style.description}>
                    <div className={style.title}>
                        <span>セミナー</span>
                    </div>
                    <div className={style.files}>
                        <span>4個のファイル</span>
                    </div>
                </div>
            </div>

            <div className={style.item}>
                <div className={style.title}>
                    <span>中間報告会</span>
                </div>
                <div className={style.time}>
                    <span className={style.date}>2023/05/02</span>
                    <span className={style.time}>12:03</span>
                </div>
            </div>

            <div className={style.item}>
                <div className={style.title}>
                    <span>レポート報告</span>
                </div>
                <div className={style.time}>
                    <span className={style.date}>2023/04/05</span>
                    <span className={style.time}>15:12</span>
                </div>
            </div>

            <div className={style.item}>
                <div className={style.title}>
                    <span>勉強会</span>
                </div>
                <div className={style.time}>
                    <span className={style.date}>2023/04/02</span>
                    <span className={style.time}>22:53</span>
                </div>
            </div>

            <div className={style.item}>
                <div className={style.title}>
                    <span>勉強会</span>
                </div>
                <div className={style.time}>
                    <span className={style.date}>2023/04/02</span>
                    <span className={style.time}>22:53</span>
                </div>
            </div>

            <div className={style.item}>
                <div className={style.title}>
                    <span>勉強会</span>
                </div>
                <div className={style.time}>
                    <span className={style.date}>2023/04/02</span>
                    <span className={style.time}>22:53</span>
                </div>
            </div>

            <div className={style.item}>
                <div className={style.title}>
                    <span>勉強会</span>
                </div>
                <div className={style.time}>
                    <span className={style.date}>2023/04/02</span>
                    <span className={style.time}>22:53</span>
                </div>
            </div>

            <div className={style.item}>
                <div className={style.title}>
                    <span>勉強会</span>
                </div>
                <div className={style.time}>
                    <span className={style.date}>2023/04/02</span>
                    <span className={style.time}>22:53</span>
                </div>
            </div>

            <button type="button" className={style.button} onClick={handlerShowCreateFolder}>
                <IconCreateFolder fontSize="large" />
            </button>
        </div>
    );
}

export default Listen;