import './MenuPrincipal.css'
import logo from '../logo.svg';
import Nav from 'react-bootstrap/Nav';


function TabsExample() {
  return (
    <Nav variant="tabs" defaultActiveKey="/home" style={{alignItems:'center'}} className="NabvarPrincipal">
        <Nav.Item>
            <Nav.Link eventKey="link-3"><img src={logo} className="App-logo" alt="logo" /></Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <h5 className="TittlePrincipal">Wines Atomic</h5>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-1">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-2">Option 2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
            Disabled
            </Nav.Link>
        </Nav.Item>
    </Nav>
  );
}

export default TabsExample;