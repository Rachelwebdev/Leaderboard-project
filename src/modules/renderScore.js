import { result } from "lodash";
import getUserScore from "./refresh.js";

const listContainer = document.querySelector(".names-score-list-container");

const renderUserScores = async () => {
  const data = await getUserScore();
  data.forEach((item) => {
    const tableData = `
           <tr>
               <td>${item.user}</td>
               <td>${item.score}</td>
           </tr>`;
    listContainer.insertAdjacentHTML("beforeend", tableData);
  });
};

export default renderUserScores;
