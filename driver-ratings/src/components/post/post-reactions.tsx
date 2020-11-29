import React, { FC, memo, ReactElement, useState } from "react";
import { useEffect } from "react";

interface Props {
  commentsLength: number;
  setShowComments: (show: boolean) => void;
}

const _PostReactions: FC<Props> = (props: Props): ReactElement => {
  const [showComments, setShowComments] = useState<boolean>(false);
  useEffect(() => {
    console.log('changed');
    props.setShowComments(showComments);
  }, [showComments, props.setShowComments]);
  return (
    <div className="d-flex justify-content-between mt-3">
      <div className="d-flex flex-row">
        <p className="mb-0">
          <i className="grey-text fa fa-angry mr-2" aria-hidden="true" />1
        </p>
        <p className="ml-3 mb-0">
          <i className="grey-text fa fa fa-heart mr-2" aria-hidden="true" />2
        </p>
      </div>
      <p className="mb-0" onClick={(e) => setShowComments(!showComments)}>
        <i
          className="grey-text fa fab fa-comment-alt mr-2"
          aria-hidden="true"
        />
        {props.commentsLength}
      </p>
    </div>
  );
};

export const PostReactions = memo(_PostReactions);
