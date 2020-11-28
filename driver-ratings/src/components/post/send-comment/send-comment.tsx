import React, {
  FC,
  memo,
  useState,
  ReactElement,
  FormEvent,
  useCallback,
  SyntheticEvent,
} from "react";
import { MDBIcon, MDBInput, MDBBtn, MDBBox } from "mdbreact";
const MAX_COMMENT_LENGTH: number = 250;

interface Props {
  loading: boolean;
  onPostComment: (value: string) => void;
}

const isValid = (value: string): boolean => {
  if (value.trim().length === 0) {
    return false;
  }
  return value.length < MAX_COMMENT_LENGTH;
};

const inputFormatter = (value: string): string => {
  if (value.length > MAX_COMMENT_LENGTH) {
    return value.slice(0, MAX_COMMENT_LENGTH);
  }
  return value;
};

const _SendComment: FC<Props> = (props: Props): ReactElement => {
  const [value, setValue] = useState<string>("");

  const onInputChange = useCallback(
    (e: FormEvent<HTMLInputElement>): void => {
      setValue(inputFormatter(e.currentTarget.value));
    },
    [setValue]
  );

  const onPostComment = useCallback(
    (e: SyntheticEvent<HTMLButtonElement>): void => {
      props.onPostComment(value);
    },
    [props.onPostComment, value]
  );

  return (
    <MDBBox>
      <MDBInput
        type="textarea"
        label="Comment"
        rows="2"
        icon="pencil-alt"
        value={value}
        onChange={onInputChange}
      />
      <MDBBtn
        block
        color="success"
        disabled={!isValid(value)}
        onClick={onPostComment}
      >
        {props.loading ? (
          <div className="spinner-border spinner-border-sm" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          <MDBIcon icon="paper-plane" className="mr-1" />
        )}{" "}
        {MAX_COMMENT_LENGTH - value.length >= 0
          ? MAX_COMMENT_LENGTH - value.length
          : 0}
      </MDBBtn>
    </MDBBox>
  );
};

export const SendComment = memo(_SendComment);
