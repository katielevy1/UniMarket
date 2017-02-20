import React from 'react';
require('../scss/header.scss');
import AutoComplete from 'material-ui/AutoComplete';

export default class Search extends React.Component {
  state = {
    dataSource: [],
  };

  handleUpdateInput = (value) => {
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
    });
  };

  render() {
    return (
      <div>
        <AutoComplete
          hintText="What are you looking to buy?"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
          floatingLabelText="Search"
          fullWidth={true}
        />
      </div>
    );
  }
}
