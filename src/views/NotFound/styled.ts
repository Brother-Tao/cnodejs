import styled from 'styled-components'

export const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8f9fa;

  .error-code {
    font-size: 120px;
    font-weight: bold;
    color: #2d3436;
    margin: 0;
    animation: bounce 1s ease-in-out;
  }

  .error-text {
    font-size: 24px;
    color: #636e72;
    margin: 20px 0;
  }

  .countdown {
    color: #636e72;
    margin: 10px 0;
  }

  .home-button {
    padding: 12px 24px;
    background-color: #0984e3;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 16px;
    transition: all 0.3s ease;

    &:hover {
      background-color: #0873c4;
      transform: translateY(-2px);
    }
  }

  @keyframes bounce {
    0% {
      transform: translateY(-50px);
      opacity: 0;
    }
    50% {
      transform: translateY(20px);
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`
