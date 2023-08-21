import { useEffect, useState } from "react";
import Badge from '@mui/material/Badge';

import IconNotifications from '@mui/icons-material/NotificationsRounded';
import IconSettings from '@mui/icons-material/SettingsRounded';

import style from "./Header.module.css";

const Header = () => {
    const [invisible, setInvisible] = useState(false);

    const handleBadgeVisibility = () => {
        setInvisible(!invisible);
    };

    useEffect(() => {
        handleBadgeVisibility();
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className={style.header}>
            <div className={style.button}>
                <Badge color="warning" variant="dot" overlap="circular" invisible={invisible}>
                    <IconNotifications color="action" />
                </Badge>
            </div>
            <div className={style.logo}>
                KoeREC
            </div>
            <div className={style.button}>
                <IconSettings />
            </div>
        </div>
    );
}

export default Header;