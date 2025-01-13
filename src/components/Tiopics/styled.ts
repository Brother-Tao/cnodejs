import styled from 'styled-components'

export const TiopicsStyled = styled.div`
  display: flex;
  position: relative;
  padding: 10px;
  align-items: center;
  border-bottom: 1px solid #f0f0f0;
  &:last-child {
    border-bottom: none;
  }
  .avatar {
    width: 30px;
    height: 30px;
    border-radius: 3px;
  }
  .reply_count {
    padding: 0 20px;
    text-align: center;
    .reply {
      color: #9e78c0;
    }
  }
  .title {
    cursor: pointer;
    &:hover {
      border-bottom: 1px solid #e3e3e3;
    }
  }
  .time {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
  }
`
