// import CommentForm from "./CommentForm";

import CommentForm from "./CommentForm";
import useToggle from "../../hooks/useToggle";
import {
  KeyboardArrowDownOutlined,
  KeyboardArrowUpOutlined,
} from "@mui/icons-material/";
import { Tooltip } from "@mui/material";

const Comment = ({
  comment,
  replies,
  setActiveComment,
  activeComment,
  //   updateComment,
  //   deleteComment,
  addComment,
  parentId = null,
  currentUserId,
}) => {
  const [showAllComment, setShowAllComment] = useToggle(false);
  // const isEditing =
  //   activeComment &&
  //   activeComment.id === comment.id &&
  //   activeComment.type === "editing";

  const isReplying =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === "replying";
  // const fiveMinutes = 300000;
  // const timePassed = new Date() - new Date(comment.createdAt) > fiveMinutes;
  // const canDelete =
  //   currentUserId === comment.userId && replies.length === 0 && !timePassed;
  // const canReply = Boolean(currentUserId);
  // const canEdit = currentUserId === comment.userId && !timePassed;
  const replyId = parentId ? parentId : comment.id;
  // const createdAt = new Date(comment.createdAt).toLocaleDateString();
  return (
    <>
      <div key={comment.id} className="comment">
        <div className="comment__img">
          <img src="/User.png" alt="" />
        </div>
        <div className="comment__mid-part">
          <div className="comment__content">
            <div className="comment__author">{comment.username}</div>
            <div className="comment__text">{comment.body}</div>
            <div className="comment__sub">
              <span className="comment__time">1 giờ trước</span>
              <span
                className="comment__reply-btn"
                onClick={() =>
                  setActiveComment({ id: comment.id, type: "replying" })
                }
              >
                Trả lời
              </span>
            </div>
          </div>
          {replies.length > 0 &&
            (showAllComment ? (
              <p className="comment__show-reply" onClick={setShowAllComment}>
                Ẩn câu trả lời <KeyboardArrowUpOutlined />
              </p>
            ) : (
              <p className="comment__show-reply" onClick={setShowAllComment}>
                Xem thêm câu trả lời khác (4) <KeyboardArrowDownOutlined />
              </p>
            ))}

          {/* {isEditing && (
          <CommentForm
            submitLabel="Update"
            hasCancelButton
            initialText={comment.body}
            handleSubmit={(text) => updateComment(text, comment.id)}
            handleCancel={() => {
              setActiveComment(null);
            }}
          />
        )} */}

          {/* {canReply && (
            <div
              className="comment-action"
              onClick={() =>
                setActiveComment({ id: comment.id, type: "replying" })
              }
            >
              Reply
            </div>
          )} */}
          {/* {canEdit && (
            <div
              className="comment-action"
              onClick={() =>
                setActiveComment({ id: comment.id, type: "editing" })
              }
            >
              Edit
            </div>
          )}
          {canDelete && (
            <div
              className="comment-action"
              onClick={() => deleteComment(comment.id)}
            >
              Delete
            </div>
          )} */}

          {/* {isReplying && (
          <CommentForm
            submitLabel="Reply"
            handleSubmit={(text) => addComment(text, replyId)}
          />
        )} */}
        </div>
        <div className="comment__actions">
          <Tooltip
            componentsProps={{
              tooltip: {
                sx: {
                  bgcolor: "#1A1D2A",
                  "& .MuiTooltip-arrow": {
                    color: "#1A1D2A",
                  },
                },
              },
            }}
            title={
              <div className="comment__actions__deleteComment">
                <img src="bin.svg" alt="" />
                <span>Xóa bình luận</span>
              </div>
            }
            placement="bottom-start"
          >
            <img
              src="/ThreeDot.svg"
              alt=""
              className="comment__actions-option"
            />
          </Tooltip>

          <img src="Liked.svg" alt="" />
          <span>12</span>
        </div>
      </div>
      {isReplying && (
        <CommentForm
          submitLabel="Reply"
          handleSubmit={(text) => addComment(text, replyId)}
        />
      )}
      {replies.length > 0 && showAllComment && (
        <div className="replies">
          {replies.map((reply) => (
            <Comment
              comment={reply}
              key={reply.id}
              setActiveComment={setActiveComment}
              activeComment={activeComment}
              // updateComment={updateComment}
              // deleteComment={deleteComment}
              addComment={addComment}
              parentId={comment.id}
              replies={[]}
              currentUserId={currentUserId}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Comment;
