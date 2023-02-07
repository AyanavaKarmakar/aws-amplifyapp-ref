import logo from './logo.svg';
import "@aws-amplify/ui-react/styles.css";
import { withAuthenticator, Button, View, Heading, Image, Card } from '@aws-amplify/ui-react';

function App({ signOut }) {
  return (
    <View className="App">
      <Card>
        <Image src={logo} className='App-logo' alt="logo" />
        <Heading level={1}>We know have Auth!</Heading>
      </Card>

      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

export default withAuthenticator(App);
