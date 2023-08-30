import { useState } from "react";
import Switch from "@mui/material/Switch";

import IconName from "@mui/icons-material/CreateRounded";
import IconColor from "@mui/icons-material/ColorLensRounded";
import IconFolder from "@mui/icons-material/FolderRounded";
import IronRecord from "@mui/icons-material/FiberManualRecordRounded";
import IconStop from "@mui/icons-material/StopRounded";
import IconLock from "@mui/icons-material/HttpsRounded";
import IconNoLock from "@mui/icons-material/LockOpenRounded";

import style from "./Record.module.css";

const Record = () => {
    const [isRecording, setIsRecording] = useState(false);
    const handlerToggleRecording = () => {
        setIsRecording((prev) => !prev);
    }

    const [isRecordButtonDisalbed, setIsRecordButtonDisalbed] = useState(false);
    const handlerToggleRecordButton = () => {
        setIsRecordButtonDisalbed((prev) => !prev);
    }

    return (
        <div className={style.container}>
            <div className={style.item}>
                <span className={style.header}>ストレージ</span>
                <div className={style.storage}>
                    <div className={style.progressBar}>
                        <div
                            className={style.bar}
                            style={{width: "67%"}}
                        >
                        </div>
                    </div>
                    <div className={style.using}>
                        <span>67GB / 100GB</span>
                        <a href={false}>ストレージを拡張する</a>
                    </div>
                </div>
            </div>

            <div className={`${style.item} ${style.record}`}>
                <span className={style.header}>録音</span>
                <div className={style.description}>
                    <div className={style.title}>
                        <IconName />
                        <input
                            type="text"
                            placeholder="タイトル"
                        />
                    </div>
                    <button type="button">
                        <IconColor />
                    </button>
                    <button type="button">
                        <IconFolder />
                    </button>
                </div>
                <div className={style.recorder}>
                    <div className={style.switch}>
                        {!isRecordButtonDisalbed ? (<IconNoLock />) : (<IconLock />)}
                        <Switch
                            onChange={handlerToggleRecordButton}
                            sx={{color: "#fff"}}
                        />
                    </div>
                    <button
                        type="button"
                        onClick={handlerToggleRecording}
                        disabled={isRecordButtonDisalbed}
                    >
                        {!isRecording ? (<IronRecord />) : (<IconStop />)}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Record;