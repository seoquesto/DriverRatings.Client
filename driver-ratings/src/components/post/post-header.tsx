import React, { FC, memo, ReactElement } from "react";
import { Plate, Post as PostDto } from "@http/responsesDto";
import { MDBIcon } from "mdbreact";

interface Props {
  post: PostDto;
}

const plateTitle = (plate: Plate): string =>
  `${plate.identifier} ${plate.number}`;

const _PostHeader: FC<Props> = (props: Props): ReactElement => {
  return (
    <div className="d-flex justify-content-between">
      <a href="#!" className="pink-text">
        <h3 className="font-weight-bold">
          <MDBIcon icon="car" className="pr-2" />
          {plateTitle(props.post.plate)}
        </h3>
      </a>
      <div className="text-right">
        <p
          className="font-weight-bold dark-grey-text m-0"
          style={{ fontSize: "0.8rem" }}
        >
          <MDBIcon far icon="clock" className="pr-2" />
          {new Date(props.post.createdAt).toLocaleString()}
        </p>
        <a className={"pt-0 m-0"} href="#!" style={{ fontSize: "0.8rem" }}>
          @{props.post.creatorInfo.username}
        </a>
      </div>
    </div>
  );
};

export const PostHeader = memo(_PostHeader);
