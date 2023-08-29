
import style from "./MediaPlayer.module.css"

const MediaPlayer = ({isShow, handlerToggleShow}) => {

    const closeWindow = () => {
        handlerToggleShow(!isShow);
    }

    if(isShow) {
        return (
            <div className={style.container}>
                <span>プレイヤー</span>
                <button type="button" onClick={closeWindow}>
                    閉じる
                </button>
            </div>
        );
    }
}

export default MediaPlayer;