import { useState } from "react";
import Switch from "@mui/material/Switch";

import IconName from "@mui/icons-material/CreateRounded";
import IconColor from "@mui/icons-material/ColorLensRounded";
import IconFolder from "@mui/icons-material/FolderRounded";
import IronRecord from "@mui/icons-material/FiberManualRecordRounded";
import IconStop from "@mui/icons-material/StopRounded";
import IconLock from "@mui/icons-material/HttpsRounded";
import IconNoLock from "@mui/icons-material/LockOpenRounded";

import style from "./Recorder.module.scss";

const Recorder = () => {
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
            <span className={style.header}>録音</span>
            <div className={style.description}>
                <div className={`${style.title} ${isRecording ? style.isRecording : style.isNotRecording}`}>
                    <input
                        type="text"
                        placeholder="タイトル"
                        disabled={isRecording}
                    />
                    <IconName />
                </div>
                <div className={style.buttons}>
                    <button type="button">
                        <IconColor />
                    </button>
                    <button type="button">
                        <IconFolder />
                    </button>
                </div>
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
    );
}

export default Recorder;