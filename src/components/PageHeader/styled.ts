import styled from 'styled-components'

export const PageHeaderStyled = styled.div`
  height: 50px;
  background-color: #444;

  .main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    min-width: 960px;
    margin: 0 auto;
    max-width: 1400px;
    text-align: center;
    box-sizing: border-box;

    .left {
      display: flex;
      align-items: center;

      .search {
        width: 206px;
        margin-left: 20px;
      }
      .search.ant-input-outlined {
        background: #888 !important;
        border: none;
      }
    }
    .right {
      .navs {
        display: flex;
        align-items: center;
        .nav {
          font-size: 13px;
          color: #ccc;
          padding: 10px 15px;
          cursor: pointer;
        }
      }
    }
  }
`
