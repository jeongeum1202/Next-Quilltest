import styled, { css } from 'styled-components';

export const QuillWrapper = styled.div`
  ${({ theme }) => css`
    .quill {
      width: 345px;
      height: 155px;
    }

    .ql-toolbar {
      border: 1px solid #eee;
      border-radius: 5px 5px 0 0;

      & > .ql-formats {
        margin-right: 5px;

        & > button {
          width: 20px;
          height: 20px;
        }
      }
    }

    .ql-container {
      border: 1px solid #eee;
      border-radius: 0 0 5px 5px;
      font-size: 11px;

      & > .ql-editor {
        &::-webkit-scrollbar {
          width: 4px;
        }
        &::-webkit-scrollbar-thumb {
          border-radius: 2px;
          background-color: #ccc;
        }
      }
    }

    .ql-picker {
      font-size: 10px;
    }
  `}
`;
