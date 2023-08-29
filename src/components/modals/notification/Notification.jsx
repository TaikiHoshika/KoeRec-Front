import { createPortal } from "react-dom";

import IconClose from "@mui/icons-material/CloseRounded";
import IconLoading from '@mui/material/CircularProgress';

import style from "./Notification.module.css";

const Notification = ({isShow, handlerToggleShow}) => {
    const closeWindow = () => {
        handlerToggleShow(!isShow);
    }

    if(isShow) {
        return createPortal((
            <div className={style.background}>
                <div className={style.container}>
                    <div className={style.header}>
                        <span>通知</span>
                        <button type="button" onClick={closeWindow}>
                            <IconClose fontSize="large" />
                        </button>
                    </div>
                    <div className={style.loading}>
                        <IconLoading size={30} />
                        <span>読み込んでいます...</span>
                    </div>
                </div>
            </div>
        ), document.getElementById("modal"));
    }
}

export default Notification;