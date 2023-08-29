import ColorPicker from "../../colorPicker/ColorPicker";

import IconClose from "@mui/icons-material/CloseRounded";
import IconCreateFolder from "@mui/icons-material/CreateNewFolderRounded";

import style from "./CreateFolder.module.css"
import { useState } from 'react';

const CreateFolder = ({isShow, handlerToggleShow}) => {

    const [name, setName] = useState("");
    const handlerChangeText = (event) => {
        setName(event.target.value);
    }

    const [color, setColor] = useState("#ffffff");
    const handleChangeColor = (color) => {
        setColor(color);
        console.log(color);
    }

    const closeWindow = () => {
        handlerToggleShow(!isShow);
    }

    const handlerCreateFolder = () => {
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

    if (isShow) {
        return (
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
                            <IconCreateFolder />
                            <span>作成</span>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateFolder;