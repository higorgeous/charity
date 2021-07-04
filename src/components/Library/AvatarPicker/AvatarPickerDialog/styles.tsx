import styled from '@emotion/styled';

export const AvatarPickerViewWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 339px;
`;

export const ModalHeader = styled.div`
  margin: 15px;
  font-weight: 500;
  font-size: 20px;
`;

export const CroppingWrapper = styled.div`
  display: inline-block;
  user-select: none;
  * {
    user-select: none;
  }
`;

export const ModalFooterButtons = styled.div`
  text-align: right;
  width: 100%;
  button:first-of-type {
    margin-right: 3px;
  }
`;
