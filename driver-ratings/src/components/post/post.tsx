import React, {
  FC,
  memo,
  useState,
  ReactElement,
  useReducer,
  useCallback,
} from "react";
import { Plate, Post as PostDto, PostComment } from "@http/responsesDto";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBIcon,
  MDBRow,
  MDBCardHeader,
} from "mdbreact";
import ReactPlayer from "react-player";
import { SendComment } from "./send-comment";
import { postReducer } from "./post-reducer";
import { CreatePostComment } from "@http/requestsCommand";
import { AxiosResponse } from "axios";
import { httpClient } from "@http/axios";
import {
  addPostComment,
  addPostCommentError,
  addPostCommentSuccess,
} from "./post-actions";
import { cloneDeep } from "lodash";
import { useToasts } from "react-toast-notifications";

interface Props {
  post: PostDto;
}

const plateTitle = (plate: Plate): string =>
  `${plate.identifier} ${plate.number}`;

const _Post: FC<Props> = (props: Props): ReactElement => {
  const {
    createdAt,
    content,
    plate,
    creatorInfo,
    comments: postComments,
    postId,
  } = props.post;
  const [showComments, setShowComments] = useState<boolean>(false);
  const { addToast } = useToasts();

  const [state, dispatch] = useReducer(postReducer, {
    comments: cloneDeep(postComments),
    loading: false,
  });

  const onPostComment = useCallback(
    async (content: string) => {
      dispatch(addPostComment());
      const command: CreatePostComment = {
        postId: postId,
        content: content,
      };

      try {
        let { headers }: AxiosResponse = await httpClient.post(
          "http://localhost:5000/posts/comment",
          command
        );
        let { data } = await httpClient.get<PostComment>(
          `http://localhost:5000/${headers["location"]}`
        );

        addToast('Comment created successfully.', { appearance: 'success', autoDismiss: true })
        dispatch(addPostCommentSuccess(data));
      } catch {
        addToast('Something went wrong. Comment has not been created.', { appearance: 'error', autoDismiss: true })
        dispatch(addPostCommentError());
      }
    },
    [dispatch, postId]
  );
  console.log(state.comments);
  return (
    <MDBCard className="my-1 px-0 mx-auto">
      <MDBCardHeader transparent>
        <div className="d-flex justify-content-between">
          <a href="#!" className="pink-text">
            <h3 className="font-weight-bold">
              <MDBIcon icon="car" className="pr-2" />
              {plateTitle(plate)}
            </h3>
          </a>
          <div className="text-right">
            <p
              className="font-weight-bold dark-grey-text m-0"
              style={{ fontSize: "0.8rem" }}
            >
              <MDBIcon far icon="clock" className="pr-2" />
              {new Date(createdAt).toLocaleString()}
            </p>
            <a className={"pt-0 m-0"} href="#!" style={{ fontSize: "0.8rem" }}>
              @{creatorInfo.username}
            </a>
          </div>
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
        <hr />
        <MDBRow>
          <MDBCol className="d-flex justify-content-between">
            <div className="d-flex flex-row">
              <p className="mb-0">
                <i className="grey-text fa fa-angry mr-2" aria-hidden="true" />1
              </p>
              <p className="ml-3 mb-0">
                <i
                  className="grey-text fa fa fa-heart mr-2"
                  aria-hidden="true"
                />
                2
              </p>
            </div>

            <p className="mb-0" onClick={(e) => setShowComments(!showComments)}>
              <i
                className="grey-text fa fab fa-comment-alt mr-2"
                aria-hidden="true"
              />
              {state.comments.length}
            </p>
          </MDBCol>
        </MDBRow>
        {showComments ? (
          <>
            <hr />
            <SendComment
              onPostComment={onPostComment}
              loading={state.loading}
            />
            {state.comments.map((comment: PostComment) => {
              return (
                <div>
                  <hr />
                  <div
                    className="d-flex justify-content-between "
                    key={comment.commentId}
                  >
                    <a href="#!" className={"font-weight-bold m-0"}>
                      @{creatorInfo.username}
                    </a>
                    <p
                      className="grey-text text-right pt-0 m-0"
                      style={{ fontSize: "0.8rem" }}
                    >
                      <MDBIcon far icon="clock" className="pr-2" />
                      {new Date(createdAt).toLocaleString()}
                    </p>
                  </div>
                  <p className="dark-grey-text mt-1">{comment.content}</p>
                </div>
              );
            })}
          </>
        ) : null}
      </MDBCardBody>
    </MDBCard>
  );
};

export const Post = memo(_Post);
