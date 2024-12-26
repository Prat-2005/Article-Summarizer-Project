import React, { Component } from 'react';
import axios from 'axios';

class ArticleSummarizer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      summary: ''
    };
  }

  handleSummarize = async () => {
    const options = {
      method: 'GET',
      url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
      params: {
        url: this.state.url,
        lang: 'en',
        engine: '2'
      },
      headers: {
        'x-rapidapi-key': 'ccb26b9fc1mshc151083cb1001bcp103609jsn9e32e3a5dcf6',
        'x-rapidapi-host': 'article-extractor-and-summarizer.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      this.setState({ summary: response.data.summary });
    } catch (error) {
      console.error('Error fetching the summary:', error);
    }
  };

  handleChange = (event) => {
    this.setState({ url: event.target.value });
  };

  render() {
    return (
      <div className='container text-center mt-5'>
        <h1>Article Summarizer</h1>
        <div className='input-group my-4'>
          <input
            type='text'
            className='form-control'
            placeholder='Enter article URL'
            value={this.state.url}
            onChange={this.handleChange}
          />
          <button className='btn btn-primary' onClick={this.handleSummarize}>
            <b>Summarize</b>
          </button>
        </div>
        {this.state.summary && (
          <div className='container mt-5'>
            <h2>Summary</h2>
            <p>{this.state.summary}</p>
          </div>
        )}
      </div>
    );
  }
}

export default ArticleSummarizer;