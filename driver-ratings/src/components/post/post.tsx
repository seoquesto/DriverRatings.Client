import React, {
  FC,
  memo,
  useState,
  ReactElement,
  useReducer,
  useCallback,
} from "react";
import { Post as PostDto, PostComment } from "@http/responsesDto";
import { MDBCard, MDBCardBody, MDBCardHeader } from "mdbreact";
import ReactPlayer from "react-player";
import { CreatePostComment } from "@http/requestsCommand";
import { httpClient } from "@http/axios";
import { AxiosResponse } from "axios";
import { cloneDeep } from "lodash";
import { useToasts } from "react-toast-notifications";
import { Comment } from "@components";
import {
  PostReactions,
  SendComment,
  PostHeader,
  addPostComment,
  addPostCommentError,
  addPostCommentSuccess,
  postReducer,
} from ".";

interface Props {
  post: PostDto;
}

const _Post: FC<Props> = (props: Props): ReactElement => {
  const { content, comments: postComments, postId } = props.post;
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

        addToast("Comment created successfully.", {
          appearance: "success",
          autoDismiss: true,
        });
        dispatch(addPostCommentSuccess(data));
      } catch {
        addToast("Something went wrong. Comment has not been created.", {
          appearance: "error",
          autoDismiss: true,
        });
        dispatch(addPostCommentError());
      }
    },
    [dispatch, postId]
  );
  console.log(state.comments);
  return (
    <MDBCard className="my-2 px-0">
      <MDBCardHeader transparent className={"m-0 p-0 px-3 py-1"}>
        <PostHeader post={props.post} />
      </MDBCardHeader>
      <MDBCardBody className="m-0 p-0 px-3 py-3">
        <p className="dark-grey-text">{content}</p>
        {/* <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(137).jpg" className="img-fluid z-depth-1 mx-n3" alt="" /> */}
        <div className="player-wrapper mx-n3">
          <ReactPlayer
            className="react-player"
            controls
            light
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            width="100%"
            height="100%"
          />
        </div>
        <PostReactions
          commentsLength={state.comments.length}
          setShowComments={setShowComments}
        />
        {showComments ? (
          <>
            <hr className={"my-2 p-0"} />
            <SendComment
              onPostComment={onPostComment}
              loading={state.loading}
            />
            {state.comments.map((comment: PostComment) => {
              return (
                <>
                  <hr className={"my-2 p-0"} />
                  <Comment comment={comment} />
                </>
              );
            })}
          </>
        ) : null}
      </MDBCardBody>
    </MDBCard>
  );
};

export const Post = memo(_Post);
