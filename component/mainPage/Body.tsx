import {Button, Layout} from 'antd'

const Body = () => {
  const {Content} = Layout

  return (
    <div>
      <Content style={{verticalAlign: 'center'}}>
        <p>First Line</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>

        <Button style={{float: 'right'}} href={'/dashboard'}>Dashboard</Button>
        <p>asdasdasdddddddddddddddddddd</p>
      </Content>
    </div>
  );
};

export default Body;