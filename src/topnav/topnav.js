var TopNav = React.createClass({
  handleSearch: function () {
    var query = $('#searchInput').val();
    $.ajax({
      url: 'https://demo1601615.mockable.io/results?query=' + query.toLowerCase().split(' ').join('+'),
      type: 'GET',
      success: function (response) {
        ReactDOM.render(<CardContainer products={response.result} query={query}/>, document.getElementById('cardContainer'));
      },
      error: function (error) {
        console.log(error);
      }
    });
  },
  render: function () {
    return (
      <nav>
        <img className="logo" src={'https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'}/>
        <div>
          <div className="searchBoxWrap">
            <div className="input-group">
              <input id="searchInput" type="search" className="form-control" placeholder="iphone 7"/>
              <span className="input-group-btn">
                <button className="btn btn-primary" type="button" onClick={this.handleSearch}>
                  <i className="glyphicon glyphicon-search"></i>
                </button>
              </span>
            </div>
          </div>
          <div className="optionsWrap">
            <div className="icon-wrapper">
              <a href="#"> <i className="glyphicon glyphicon-envelope"></i></a>
            </div>
            <div className="icon-wrapper">
              <a href="#"> <i className="glyphicon glyphicon-bell"></i></a>
            </div>
            <div className="dropdown">
              <img className="img img-circle" id="myAccount" data-toggle="dropdown" src={'https://lh3.googleusercontent.com/-00ANqsA2xXo/AAAAAAAAAAI/AAAAAAAAAAA/AKTaeK9tFkMHBO8TVc1zziGIbK9MU9GREQ/s32-c-mo/photo.jpg'}/>
              <ul className="dropdown-menu pull-right">
                <li>
                  <div className="myAccount">
                    <div className="profilePic">
                      <img className="img img-circle" src={'//lh3.googleusercontent.com/-00ANqsA2xXo/AAAAAAAAAAI/AAAAAAAAAAA/AKTaeK9tFkMHBO8TVc1zziGIbK9MU9GREQ/s96-c-mo/photo.jpg'}/>
                    </div>
                    <div className="myAccountInfo">
                      <div className="name">Vibhanshu Chaturvedi</div>
                      <div className="email">vibhanshu86@gmail.com</div>
                      <div className="privacy">
                        <a href="#">Privacy</a>
                      </div>
                      <button className="btn btn-primary">My Account</button>
                    </div>
                  </div>
                </li>
                <li className="footer">
                  <a href="#" className="btn btn-default">Add Account</a>
                  <a href="#" className="btn btn-default">Sign Out</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
});
