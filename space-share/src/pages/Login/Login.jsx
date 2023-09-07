import { useState, useEffect } from "react";
import Web3 from "web3";
import "./Login.css";
import MetamaskLogo from "../../assets/Space_Share_logo.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ML from '../../assets/mm.png';
import Install from '../../assets/install.png';
import { Link } from "react-router-dom";
// import { Alert } from "@mui/material";
import { useNavigate} from 'react-router-dom';


function Login() {
  const [isConnected, setIsConnected] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    function checkConnectedWallet() {
      const userData = JSON.parse(localStorage.getItem("userAccount"));
      if (userData != null) {
        setUserInfo(userData);
        setIsConnected(true);
      }
    }
    checkConnectedWallet();
  }, []);

  const detectCurrentProvider = () => {
    let provider;
    if (window.ethereum) {
      provider = window.ethereum;
    } else if (window.web3) {
      // eslint-disable-next-line
      provider = window.web3.currentProvider;
    } else {
      console.log(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
    return provider;
  };

  const navigateHome = () => {
    // 👇️ navigate to /
    navigate('/');
  };

  const onConnect = async () => {
    try {
      const currentProvider = detectCurrentProvider();
      if (currentProvider) {
        if (currentProvider !== window.ethereum) {
          console.log(
            "Non-Ethereum browser detected. You should consider trying MetaMask!"
          );
        }
        await currentProvider.request({ method: "eth_requestAccounts" });
        const web3 = new Web3(currentProvider);
        const userAccount = await web3.eth.getAccounts();
        const chainId = await web3.eth.getChainId();
        const account = userAccount[0];
        let ethBalance = await web3.eth.getBalance(account); // Get wallet balance
        ethBalance = web3.utils.fromWei(ethBalance, "ether"); //Convert balance to wei
        saveUserInfo(ethBalance, account, chainId);
        if (userAccount.length === 0) {
          console.log("Please connect to meta mask");
        }
      }
    } catch (err) {
      console.log(
        "There was an error fetching your accounts. Make sure your Ethereum client is configured correctly."
      );
    }
  };

  const onDisconnect = () => {
    window.localStorage.removeItem("userAccount");
    setUserInfo({});
    setIsConnected(false);
  };

  const saveUserInfo = (ethBalance, account, chainId) => {
    const userAccount = {
      account: account,
      balance: ethBalance,
      connectionid: chainId,
    };
    window.localStorage.setItem("userAccount", JSON.stringify(userAccount)); //user persisted data
    const userData = JSON.parse(localStorage.getItem("userAccount"));
    setUserInfo(userData);
    setIsConnected(true);
  };

  return (
    <Container className="app">
      <Row className="contains">
        <div className="box-1" >
        <Col className="section-1" >
          <h1 style={{ textAlign:"center"}}>Login With Metamask</h1>
          
          <div className="button1">
            {!isConnected && (
              <div className="button-1">
                
                <button className="app-buttons__login" onClick={() => {onConnect(); navigateHome()}}>
                  <img src={ML} alt="ml" className="logom"></img>
                  Connect to MetaMask
                </button>
                <br/>
                <Link to="https://metamask.io/download/" target="_blank">
                <button className="app-buttons__login">
                  <img src={Install} alt="install" className="logom"></img>
                  Install Metamask
                </button>
                </Link>
              </div>
            )}
          </div>
        </Col>
        </div>
        <Col lg={3}  className="float-center">
                <div className="glow vert-move">
          <img src={MetamaskLogo} alt="meta mask logo" className="nameimg img-fluid" />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          {isConnected && (
            <div className="app-wrapper">
              <div className="app-details">
                
             
              <h2>✅ You are connected to metamask.</h2>
               
                <div className="app-account">
                  <span>Account number:</span>
                  {userInfo.account}
                </div>
                <div className="app-balance">
                  <span>Balance:</span>
                  {userInfo.balance}
                </div>
                <div className="app-connectionid">
                  <span>Connection ID:</span>
                  {userInfo.connectionid}
                </div>
              </div>
              <div>
                <button className="app-buttons__logout" onClick={onDisconnect}>
                  Disconnect
                </button>  


                
              </div>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
