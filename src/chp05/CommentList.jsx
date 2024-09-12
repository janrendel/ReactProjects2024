import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name:"잔렌델",
        Comment:"추석연휴 잘 보내고 오세요.",
    },
    {
        name:"차기환",
        Comment:"집에 언제 가나 차 막혀서"
    },
    {
        name:"정구영",
        Comment:"프로젝트 예습용, 실습용을 나눌게요.",
    }
];

function CommentList(props) {
    return(
      <div>
          {
              comments.map((comment)=> {
                  return(
                      <Comment name={comment.name} comment={comment.Comment}/>
                  );
              })
          }
      </div>
    );
}

export default CommentList;