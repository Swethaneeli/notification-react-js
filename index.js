const Notification = (props) => {
  //  Write your code here.
  const { imageSrc, text, className } = props;
  return (
    <div className={className}>
      <img src={imageSrc} className="image" /> <p className="content">{text}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Notifications</h1>
    <div>
      <Notification
        imageSrc="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        text="Information Message"
        className="info-message"
      />
    </div>
    <div>
      <Notification
        imageSrc="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        text="Success Message"
        className="success-message"
      />
    </div>
    <div>
      <Notification
        imageSrc="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        text="Warning Message"
        className="warning-message"
      />
    </div>
    <div>
      <Notification
        imageSrc="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        text="Error Message"
        className="error-message"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
