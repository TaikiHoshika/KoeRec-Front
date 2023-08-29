
import style from "./ColorPicker.module.css";

const ColorPicker = ({colors, onChangeColor}) => {

    const handlerChangeColor = (event) => {
        onChangeColor(event.target.value);
    }

    return (
        <div className={style.container}>
            {colors.map((color) => (
                <div className={style.colorPicker} style={{"background-color": color}}>
                    <div className={style.button}>
                        <input type="radio" name="color" value={color} onChange={handlerChangeColor} checked />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ColorPicker;