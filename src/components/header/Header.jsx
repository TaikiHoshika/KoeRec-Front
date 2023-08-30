import { useState } from "react";
import Badge from "@mui/material/Badge";

import IconNotifications from "@mui/icons-material/NotificationsRounded";
import IconSettings from "@mui/icons-material/SettingsRounded";

import style from "./Header.module.scss";
import Notification from "../modals/notification/Notification";

const Header = () => {
    const [invisible, setInvisible] = useState(false);
    const handleBadgeVisibility = () => {
        setInvisible((prev) => !prev);
    };

    const [showNotification, setShowNotification] = useState(false);
    const handlerShowNotification = () => {
        setShowNotification((prev) => !prev);
    };

    return (
        <div className={style.header}>
            <Notification
                isShow={showNotification}
                handlerToggleShow={handlerShowNotification}
            />
            <button type="button" className={style.button} onClick={handlerShowNotification}>
                <Badge color="warning" variant="dot" overlap="circular" invisible={invisible}>
                    <IconNotifications color="action" />
                </Badge>
            </button>
            <div className={style.logo}>
            </div>
            <button type="button" className={style.button}>
                <IconSettings />
            </button>
        </div>
    );
}

export default Header;