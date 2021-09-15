import {Button, Layout} from 'antd'

const Body = () => {
  const {Content} = Layout

  return (
    <div>
      <Content style={{verticalAlign: 'center'}}>
        <p>First line</p>
        <p>asdasdasdddddddddddddddddddd</p>

        <Button style={{float:"right"}} href= '/dashboard'>Dashboard</Button>

        <p>Last Line</p>
      </Content>
    </div>
  );
};

export default Body;