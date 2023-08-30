import { useState } from "react";

import CreateFolder from "../../components/modals/createFolder/CreateFolder";
import MediaPlayer from "../../components/modals/mediaPlayer/MediaPlayer";

import IconCreateFolder from "@mui/icons-material/CreateNewFolderRounded";
import IconFolder from "@mui/icons-material/FolderRounded";
import IconFile from "@mui/icons-material/AudioFileRounded";
import IconSearch from "@mui/icons-material/SearchRounded";

import style from "./Listen.module.css";

const Listen = () => {
    const [showCreateFolder, setShowCreateFolder] = useState(false);
    const handlerShowCreateFolder = () => {
        setShowCreateFolder((prev) => !prev);
    };

    const [showMediaPlayer, setShowMediaPlayer] = useState(false);
    const handlerShowMediaPlayer = () => {
        setShowMediaPlayer((prev) => !prev);
    }

    return (
        <div className={style.container}>
            <CreateFolder
                isShow={showCreateFolder}
                handlerToggleShow={handlerShowCreateFolder}
            />
            <MediaPlayer
                isShow={showMediaPlayer}
                handlerToggleShow={handlerShowMediaPlayer}
            />
            <div className={style.search}>
                <div className={style.search}>
                    <input type="text" placeholder="ファイルを検索" />
                    <IconSearch />
                </div>
            </div>
            
            <div className={style.item}>
                <div
                    className={style.color}
                    style={{backgroundColor: "#FFD147"}}
                >
                </div>
                <div className={style.description}>
                    <IconFolder />
                    <div className={style.description}>
                        <span className={style.title}>会議</span>
                        <span>8個のファイル</span>
                    </div>
                </div>
            </div>

            <div className={style.item}>
                <div
                    className={style.color}
                    style={{backgroundColor: "#FFD147"}}
                >
                </div>
                <div className={style.description}>
                    <IconFile />
                    <div className={style.description}>
                        <span className={style.title}>中間報告会</span>
                        <div className={style.time}>
                            <span className={style.date}>2023/05/02</span>
                            <span className={style.length}>12:03</span>
                        </div>
                    </div>
                </div>
            </div>

            <button type="button" className={style.button} onClick={handlerShowCreateFolder}>
                <IconCreateFolder/>
            </button>
        </div>
    );
}

export default Listen;