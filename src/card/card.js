var Card = React.createClass({
  render: function () {
    return (
      <div className="card col-xs-6 col-sm-3">
        <div className="displayPic">
          <img className="img" src={this.props.imageUrl}/>
        </div>
        <div className="details">
          <a href="#">{this.props.name}</a>
          <div className="price">&#8377; {this.props.price}</div>
          <div className="company">{this.props.company}</div>
        </div>
      </div>
    );
  }
});
