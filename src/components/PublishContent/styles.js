import styled from "styled-components";

export const PublisherWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: fit-content;

  margin: 30px 0;
  padding: 10px;

  border: 2px solid ${({theme}) => theme.accent};
  border-radius: 15px;
`
export const PublisherInput = styled.input`
  width: 100%;
  height: 36px;

  padding: 10px 10px;

  font-size: 18px;
  line-height: 19px;
  color: ${({theme}) => theme.inverse};
  caret-color: ${({theme}) => theme.inverse};

  &::placeholder {
    color: ${({theme}) => theme.inverse};
    opacity: 0.7;
  }
`
export const PublisherArea = styled.textarea`
  width: 100%;
  resize: none;

  font-size: 18px;
  color: ${({theme}) => theme.inverse};

  caret-color: ${({theme}) => theme.inverse};

  padding: 10px 10px;

  &::placeholder {
    color: ${({theme}) => theme.inverse};
    opacity: 0.7;
  }
`

export const PublisherToolbar = styled.div`
  display: flex;

  gap: 15px;

  > button {
    cursor: pointer;

    > svg {
      font-size: 20px;
      color: ${({theme}) => theme.accent};
    }
  }
`

export const PublishButton = styled.button`
  margin-left: auto;
  padding: 5px 15px;

  color: ${({theme}) => theme.textAccent};
  font-weight: bold;
  background-color: ${({theme}) => theme.accent};

  font-size: 16px;

  border-radius: 15px;

  cursor: pointer;

  &:hover {
    color: ${({theme}) => theme.inverse};
  }
`