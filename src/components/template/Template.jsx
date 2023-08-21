import { Outlet } from "react-router-dom";
import Div100vh from "react-div-100vh";

import Menu from "../menu/Menu";
import Header from "../header/Header";

import style from "./Template.module.css"

const Base = () => {
    return (
        <Div100vh>
            <div className={style.container}>
                <div className={style.header}>
                    <Header />
                </div>
                <div className={style.main}>
                    <Outlet />
                </div>
                <div className={style.menu}>
                    <Menu/>
                </div>
            </div>
        </Div100vh>
    );
}

export default Base;