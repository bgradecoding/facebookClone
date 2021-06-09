import React, { Component } from 'react';

export default class WritePost extends Component {
  render() {
    return (
      <form className="write-form">
        <textarea
          className="form-control input-lg"
          placeholder="무슨 생각을 하고 계신가요?"
          spellCheck="false"></textarea>
        <button type="submit" className="btn btn-primary">
          공유하기
        </button>
      </form>
    );
  }
}
