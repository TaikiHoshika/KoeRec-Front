import { NavLink } from "react-router-dom";

import IconRecord from '@mui/icons-material/KeyboardVoiceRounded';
import IconListen from '@mui/icons-material/HeadphonesRounded';

import style from "./Menu.module.css";

const Menu = () => {
    return (
        <div className={style.container}>
            <div className={style.button}>
                <NavLink to="/record">
                    <div>
                        <IconRecord fontSize="large" />
                        <span>録る</span>
                    </div>
                </NavLink>
            </div>
            <div className={style.button}>
                <NavLink to="/listen">
                    <div>
                        <IconListen fontSize="large" />
                        <span>聞く</span>
                    </div>
                </NavLink>
            </div>
        </div>
    );
}

export default Menu;