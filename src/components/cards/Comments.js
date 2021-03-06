import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import PropTypes from "prop-types";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import jwtDecode from "jwt-decode";

Comments.propTypes = {
  id: PropTypes.string,
  showComments: PropTypes.bool,
  handleDelete: PropTypes.func,
  handleEdit: PropTypes.func
};

export default function Comments({
  id,
  showComments,
  comments,
  handleDelete,
  handleEdit
}) {
  const [editFormDialog, setEditFormDialog] = useState(false);
  const [editComment, setEditComment] = useState("");
  const [cardID, setCardID] = useState("");
  const [commentID, setCommentID] = useState("");
  const [loggeduserID, setLoggedUserID] = useState("");

  useEffect(() => {
    if (localStorage.getItem("jwtToken")) {
      const token = localStorage.getItem("jwtToken");
      const decoded = jwtDecode(token);
      const userID = decoded.user.id;
      setLoggedUserID(userID);
    }
  }, [loggeduserID]);

  return (
    <div>
      <CommentsSectionStyled className={showComments ? "visible" : null}>
        {comments.map((item, index) => (
          <div key={item._id}>
            <CommentsStyled key={item._id}>
              <img src={item.avatar} alt="img-1" />

              <p>
                <strong>{item.name}: </strong> {item.comment}
              </p>
            </CommentsStyled>

            {loggeduserID === item.user && (
              <EditDeleteStyled>
                <div>
                  <EditButtonStyled onClick={() => handleEditClick(id, item)}>
                    edit
                  </EditButtonStyled>
                  {editForm()}
                </div>
                <DeleteButtonStyled onClick={() => handleDeleteClick(id, item)}>
                  delete
                </DeleteButtonStyled>
              </EditDeleteStyled>
            )}
          </div>
        ))}
      </CommentsSectionStyled>
    </div>
  );

  function handleDeleteClick(id, deleteComment) {
    handleDelete(id, deleteComment);
  }

  function handleEditClick(id, commentData) {
    setCommentID(commentData._id);
    setEditComment(commentData.comment);
    setCardID(id);
    setEditFormDialog(true);
  }

  function handleEditCommentSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    data._id = commentID;
    handleEdit(cardID, data);
  }

  function handleClose() {
    setEditFormDialog(false);
  }

  function editForm() {
    return (
      <Dialog
        open={editFormDialog}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit Comment</DialogTitle>
        <DialogContent>
          <form onSubmit={handleEditCommentSubmit}>
            <textarea
              name="comment"
              value={editComment}
              rows="12"
              cols="80vw"
              onChange={event => setEditComment(event.target.value)}
            ></textarea>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <button onClick={handleClose} color="primary">
                Cancel
              </button>
              <button onClick={handleClose} color="primary" type="submit">
                Submit
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    );
  }
}

const CommentsSectionStyled = styled.section`
  max-height: 0;
  overflow: hidden;
  margin: 2px;
  border-radius: 1rem;
  transition: all 0.5s ease;

  &.visible {
    max-height: 100vh;
    transition: all 1.5s ease;
  }
`;

const CommentsStyled = styled.section`
  display: grid;
  grid-template-columns: 1fr 6fr;
  margin: 2px;
  padding: 3px;
  font-size: 1.1rem;
  p {
    overflow-wrap: break-word;
    width: 100%;
    padding: 10px 5px 5px 10px;
    margin: auto 0;
    color: ${props => (props.theme.mode === "dark" ? "black" : "black")};
    background: ${props => (props.theme.mode === "dark" ? "white" : "wheat")};
    border-radius: 0.5rem 0.5rem 0 0.5rem;
  }
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;

const EditDeleteStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 0;
  margin-top: -6px;
  margin-right: 5px;
`;

const EditButtonStyled = styled.button`
  border: 0;
  background-color: ${props =>
    props.theme.mode === "dark" ? "white" : "wheat"};
  border-radius: 0 0 0 0.5rem;
  text-decoration: underline;
  color: ${props => (props.theme.mode === "dark" ? "#ffb930" : "#721313")};
  outline: none;
`;

const DeleteButtonStyled = styled.button`
  padding-right: 20px;
  border: 0;
  background-color: ${props =>
    props.theme.mode === "dark" ? "white" : "wheat"};
  border-radius: 0 0 0.5rem 0;
  text-decoration: underline;
  color: ${props => (props.theme.mode === "dark" ? "#ffb930" : "#721313")};
  outline: none;
`;
