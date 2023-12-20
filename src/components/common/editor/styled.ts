import styled, { css } from 'styled-components';

export const QuillWrapper = styled.div`
  ${({ theme }) => css`
    margin-bottom: 20px;

    #toolbar {
      display: flex;
      flex-wrap: wrap;

      border: 1px solid #eee;
      border-radius: 5px 5px 0 0;

      .ql-formats {
        font-size: 10px;

        button {
          width: 20px;
          height: 20px;
        }
      }

      .ql-dropdown > span {
        width: 90px;
      }
    }
    .quill {
      width: 345px;
    }

    .ql-container {
      height: 330px;
      border: 1px solid #eee;
      border-radius: 0 0 5px 5px;

      & > .ql-editor {
        height: 320px;
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
