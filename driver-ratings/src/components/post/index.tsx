import React, { FC, memo } from "react";
import { Plate, Post as PostDto } from "@http/responsesDto";
import {
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCol,
  MDBIcon,
  MDBRow,
  MDBCardHeader,
} from "mdbreact";
import ReactPlayer from "react-player";
import { ReactElement } from "react";

interface Props {
  post: PostDto;
}

const plateTitle = (plate: Plate): string =>
  `${plate.identifier} ${plate.number}`;

const _Post: FC<Props> = (props: Props): ReactElement => {
  const { createdAt, content, plate, creatorInfo } = props.post;
  return (
    <MDBCard className="my-5 px-5 mx-auto">
      <MDBCardHeader transparent>
        <div className="d-flex justify-content-between">
          <a href="#!" className="pink-text">
            <h3 className="font-weight-bold">
              <MDBIcon icon="car" className="pr-2" />
              {plateTitle(plate)}
            </h3>
          </a>
          <p className="font-weight-bold dark-grey-text m-0">
            <MDBIcon far icon="clock" className="pr-2" />
            {new Date(createdAt).toLocaleString()}
            <p
              className={"grey-text text-right pt-0 m-0"}
              style={{ fontSize: "0.8rem" }}
            >
              @{creatorInfo.username}
            </p>
          </p>
        </div>
      </MDBCardHeader>
      <MDBCardBody>
        <MDBRow>
          <MDBCol>
            <p className="dark-grey-text">{content}</p>
            {/* <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(137).jpg" className="img-fluid z-depth-1" alt="" /> */}
            <div className="player-wrapper">
              <ReactPlayer
                className="react-player"
                controls
                light
                url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                width="100%"
                height="100%"
              />
            </div>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
      <MDBCardFooter transparent className="">
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-row">
            <p>
              <i className="grey-text fa fa-angry mr-2" aria-hidden="true" />1
            </p>
            <p className="ml-4">
              <i className="grey-text fa fa fa-heart mr-2" aria-hidden="true" />
              2
            </p>
          </div>
          <p>
            <i
              className="grey-text fa fa fa-comment-alt mr-2"
              aria-hidden="true"
            />
            3
          </p>
        </div>
      </MDBCardFooter>
    </MDBCard>
  );
};

export const Post = memo(_Post);
