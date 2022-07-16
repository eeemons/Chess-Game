import styles from "../Styles/Board.module.css";

import Wpawn from "../Icons/W-Pawn.svg";
import Wknight from "../Icons/W-Knight.svg";
import Wking from "../Icons/W-King.svg";
import Wbishop from "../Icons/W-Bishop.svg";
import Wrook from "../Icons/W-Rook.svg";
import Wqueen from "../Icons/W-Queen.svg";

import Bpawn from "../Icons/B-Pawn.svg";
import Bknight from "../Icons/B-Knight.svg";
import Bking from "../Icons/B-King.svg";
import Bbishop from "../Icons/B-Bishop.svg";
import Brook from "../Icons/B-Rook.svg";
import Bqueen from "../Icons/B-Queen.svg";

function Board() {
  return (
    <div className={styles.boardContainer}>
      <table>
        <tr>
          <td className={styles.white}>
            <img src={Brook} alt="Rook"></img>
          </td>
          <td className={styles.black}>
            <img src={Bknight} alt="Knight"></img>
          </td>
          <td className={styles.white}>
            <img src={Bbishop} alt="Bishop"></img>
          </td>
          <td className={styles.black}>
            <img src={Bqueen} alt="Queen"></img>
          </td>
          <td className={styles.white}>
            <img src={Bking} alt="King"></img>
          </td>
          <td className={styles.black}>
            <img src={Bbishop} alt="Bishop"></img>
          </td>
          <td className={styles.white}>
            <img src={Bknight} alt="Knight"></img>
          </td>
          <td className={styles.black}>
            <img src={Brook} alt="Rook"></img>
          </td>
        </tr>
        <tr>
          <td className={styles.black}>
            <img src={Bpawn} alt="Pawn"></img>
          </td>
          <td className={styles.white}>
            <img src={Bpawn} alt="Pawn"></img>
          </td>
          <td className={styles.black}>
            <img src={Bpawn} alt="Pawn"></img>
          </td>
          <td className={styles.white}>
            <img src={Bpawn} alt="Pawn"></img>
          </td>
          <td className={styles.black}>
            <img src={Bpawn} alt="Pawn"></img>
          </td>
          <td className={styles.white}>
            <img src={Bpawn} alt="Pawn"></img>
          </td>
          <td className={styles.black}>
            <img src={Bpawn} alt="Pawn"></img>
          </td>
          <td className={styles.white}>
            <img src={Bpawn} alt="Pawn"></img>
          </td>
        </tr>
        <tr>
          <td className={styles.white}></td>
          <td className={styles.black}></td>
          <td className={styles.white}></td>
          <td className={styles.black}></td>
          <td className={styles.white}></td>
          <td className={styles.black}></td>
          <td className={styles.white}></td>
          <td className={styles.black}></td>
        </tr>
        <tr>
          <td className={styles.black}></td>
          <td className={styles.white}></td>
          <td className={styles.black}></td>
          <td className={styles.white}></td>
          <td className={styles.black}></td>
          <td className={styles.white}></td>
          <td className={styles.black}></td>
          <td className={styles.white}></td>
        </tr>
        <tr>
          <td className={styles.white}></td>
          <td className={styles.black}></td>
          <td className={styles.white}></td>
          <td className={styles.black}></td>
          <td className={styles.white}></td>
          <td className={styles.black}></td>
          <td className={styles.white}></td>
          <td className={styles.black}></td>
        </tr>
        <tr>
          <td className={styles.black}></td>
          <td className={styles.white}></td>
          <td className={styles.black}></td>
          <td className={styles.white}></td>
          <td className={styles.black}></td>
          <td className={styles.white}></td>
          <td className={styles.black}></td>
          <td className={styles.white}></td>
        </tr>
        <tr>
          <td className={styles.white}>
            <img src={Wpawn} alt="Pawn"></img>
          </td>
          <td className={styles.black}>
            <img src={Wpawn} alt="Pawn"></img>
          </td>
          <td className={styles.white}>
            <img src={Wpawn} alt="Pawn"></img>
          </td>
          <td className={styles.black}>
            <img src={Wpawn} alt="Pawn"></img>
          </td>
          <td className={styles.white}>
            <img src={Wpawn} alt="Pawn"></img>
          </td>
          <td className={styles.black}>
            <img src={Wpawn} alt="Pawn"></img>
          </td>
          <td className={styles.white}>
            <img src={Wpawn} alt="Pawn"></img>
          </td>
          <td className={styles.black}>
            <img src={Wpawn} alt="Pawn"></img>
          </td>
        </tr>
        <tr>
          <td className={styles.black}>
            <img src={Wrook} alt="Rook"></img>
          </td>
          <td className={styles.white}>
            <img src={Wknight} alt="Queen"></img>
          </td>
          <td className={styles.black}>
            <img src={Wbishop} alt="Bishop"></img>
          </td>
          <td className={styles.white}>
            <img src={Wqueen} alt="Queen"></img>
          </td>
          <td className={styles.black}>
            <img src={Wking} alt="King"></img>
          </td>
          <td className={styles.white}>
            <img src={Wbishop} alt="Bishop"></img>
          </td>
          <td className={styles.black}>
            <img src={Wknight} alt="Knight"></img>
          </td>
          <td className={styles.white}>
            <img src={Wrook} alt="Rook"></img>
          </td>
        </tr>
      </table>
    </div>
  );
}
export default Board;
