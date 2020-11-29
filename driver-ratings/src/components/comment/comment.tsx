import React, { FC, memo, ReactElement } from "react";
import { CommentBase } from "@http/responsesDto";
import { MDBIcon } from "mdbreact";

interface Props {
  comment: CommentBase;
}

const _Comment: FC<Props> = (props: Props): ReactElement => {
  const { comment } = props;
  return (
    <div className="d-flex flex-column">
      <div className="d-flex justify-content-between " key={comment.commentId}>
        <a href="#!" className={"font-weight-bold m-0"}>
          @{comment.creatorInfo.username}
        </a>
        <p
          className="grey-text text-right pt-0 m-0"
          style={{ fontSize: "0.8rem" }}
        >
          <MDBIcon far icon="clock" className="pr-2" />
          {new Date(comment.createdAt).toLocaleString()}
        </p>
      </div>
      <p className="dark-grey-text my-1">{comment.content}</p>
    </div>
  );
};

export const Comment = memo(_Comment);
