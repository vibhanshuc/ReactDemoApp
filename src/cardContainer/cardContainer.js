var CardContainer = React.createClass({
  render: function () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 card-container">
            <h3>Shop for {this.props.query} on Google </h3>
            <div className="row">
              {this.props.products.map(function (product) {
                return (
                  <Card key={product.id} name={product.name} imageUrl={product.imageUrl} price={product.price} company={product.company}/>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
});
