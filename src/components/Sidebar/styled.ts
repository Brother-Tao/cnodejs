import styled from 'styled-components'

export const SidebarStyled = styled.div`
  width: 290px;
  height: 100%;

  .login {
    background: #fff;
    padding: 10px;
    border-radius: 3px;
    p:first-child {
      padding-bottom: 10px;
    }
    p span {
      color: #80bd01;
    }
  }

  .panle {
    overflow: hidden;
    background: #fff;
    margin-top: 10px;
    border-radius: 3px;
    .title {
      padding-left: 10px;
      line-height: 30px;
      background: #f6f6f6;
    }
    .inner {
      padding: 10px;
    }
  }
`
