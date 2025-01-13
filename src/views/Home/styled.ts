import styled from 'styled-components'

export const HomeStyled = styled.div`
  padding: 15px 0;
  background-color: #e1e1e1;
  .main {
    display: flex;
    width: 90%;
    max-width: 1400px;
    min-width: 960px;
    margin: 0 auto;
    margin-bottom: 25px;
    min-height: 400px;

    .content {
      flex: 1;
      position: relative;
      background-color: #fff;
      margin-right: 10px;
      border-radius: 4px;
      .topNav {
        padding: 10px;
        background-color: #f6f6f6;
        border-radius: 3px 3px 0 0;
        .topNavItem {
          margin: 0 10px;
          color: #80bd01;
          cursor: pointer;
        }
        .active {
          background-color: #80bd01;
          color: #fff;
          padding: 3px 4px;
          border-radius: 3px;
        }
      }
      .topics {
        .ant-spin {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
      .pagination {
        height: 40px;
        margin: 10px 0 0 10px;
      }
    }
    .sidebar {
      width: 290px;
      height: 100%;
      background-color: #b2b2b2;
    }
  }
`
