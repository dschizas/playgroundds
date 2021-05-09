import fetch from 'isomorphic-fetch';
import React from 'react';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import { Container, Row, Col } from 'react-bootstrap';

const PER_PAGE = 50;
const SEARCH_URI = 'http://localhost:4001/locations'

function makeAndHandleRequest(query, page = 1) {
  return fetch(`${SEARCH_URI}?q=${query}`)
    .then(resp => resp.json())
    .then(({ locations, total_count }) => {
      const options = locations.map(l => ({
        country_code: l.country_code,
        id: l.id,
        name: l.name,
      }));
      return { options, total_count };
    });
}

class LocationSearch extends React.Component {
  state = {
    isLoading: false,
    options: [],
    query: '',
  };

  render() {
    return (

      <Container>
        <Row>
          <Col className="my-5 text-center bold">Welcome to Location Search</Col>
        </Row>
        <Row>
          <AsyncTypeahead
          {...this.state}
          id="location-example"
          className="p3"
          labelKey="name"
          maxResults={PER_PAGE - 1}
          minLength={1}
          onInputChange={this._handleInputChange}
          onPaginate={this._handlePagination}
          onSearch={this._handleSearch}
          paginate
          placeholder="Search for a location"
          renderMenuItemChildren={option => (
            <div key={option.id}>
              <span>{option.name}</span>
            </div>
          )}
        />
        </Row>
      </Container>
      
    );
  }

  _handleInputChange = query => {
    this.setState({ query });
  };

  _handleSearch = query => {
    
    this.setState({ isLoading: true });
    makeAndHandleRequest(query).then(resp => {
      this.setState({
        isLoading: false,
        options: resp.options,
      });
    });
  };
}

export default LocationSearch;
