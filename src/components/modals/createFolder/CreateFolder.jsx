import { useState } from "react";
import { createPortal } from "react-dom";
import ColorPicker from "../../colorPicker/ColorPicker";

import IconClose from "@mui/icons-material/CloseRounded";
import IconAdd from "@mui/icons-material/AddCircleRounded";
import IconInfo from "@mui/icons-material/Info";

import style from "./CreateFolder.module.css"

const CreateFolder = ({isShow, handlerToggleShow}) => {
    const [showNoNameError, setShowNoNameError] = useState(false);
    const [showNoColorError, setShowNoColorError] = useState(false);

    const [name, setName] = useState("");
    const handlerChangeText = (event) => {
        setName(event.target.value);
    }

    const [color, setColor] = useState("");
    const handleChangeColor = (color) => {
        setColor(color);
    }

    const closeWindow = () => {
        setName("");
        setColor("");
        handlerToggleShow(!isShow);
    }

    const handlerCreateFolder = () => {
        if(name === "") {
            setShowNoNameError(true);
            setTimeout(() => {
                setShowNoNameError(false);
            }, 3000);
            return;
        }
        if(color === "") {
            setShowNoColorError(true);
            setTimeout(() => {
                setShowNoColorError(false);
            }, 3000);
            return;
        }
        console.log(name);
        console.log(color);
        closeWindow();
    }

    const colors = [
        "#E91E63",
        "#FF9800",
        "#FFD147",
        "#CDDC39",
        "#009688",
        "#03A9F4",
        "#3A52D7",
        "#9C27B0",
    ];

    if(isShow) {
        return createPortal((
            <div className={style.background}>
                <div className={style.container}>
                    <div className={style.header}>
                        <span>フォルダを作成</span>
                        <button type="button" onClick={closeWindow}>
                            <IconClose fontSize="large" />
                        </button>
                    </div>
                    <div className={style.body}>
                        <input
                            type="text"
                            placeholder="フォルダ名"
                            onChange={handlerChangeText}
                        />
                        <ColorPicker
                            colors={colors}
                            onChangeColor={handleChangeColor}
                        />
                    </div>
                    <div className={style.button}>
                        <button type="button" onClick={handlerCreateFolder}>
                            <IconAdd />
                            <span>作成</span>
                        </button>
                    </div>
                </div>
                <div className={style.errors}>
                    { showNoNameError &&
                        <div>
                            <IconInfo />
                            <span>名前を入力してください</span>
                        </div>
                    }
                    { showNoColorError &&
                        <div>
                            <IconInfo />
                            <span>色を選択してください</span>
                        </div>
                    }
                </div>
            </div>
        ), document.getElementById("modal"));
    }
}

export default CreateFolder;