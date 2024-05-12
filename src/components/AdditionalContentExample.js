import Alert from 'react-bootstrap/Alert';

function AdditionalContentExample() {
  return (
    <div className="alert-container">
      <Alert className="custom-alert">
        <Alert.Heading>Hey, nice to see you</Alert.Heading>
        <p>
          Aww yeah, You can buy anything and it will reach you quickly and with very high accuracy 
          <br></br> We are pleased to provide a very special service.
        </p>
        <hr />
        <p>
          Take a look at Our products.
        </p>
      </Alert>
    </div>
  );
}

export default AdditionalContentExample;

