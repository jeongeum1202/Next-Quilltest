import React from 'react';

export default function CustomToolbar() {
  return (
    <div id="toolbar">
      <span className="ql-formats ql-dropdown">
        <select className="ql-font" />
        <select className="ql-size" defaultValue="normal">
          <option value="small">본문 1</option>
          <option value="normal">본문 2</option>
          <option value="large">본문 3</option>
          <option value="huge">본문 4</option>
        </select>
        {/* <select className="ql-header">
          <option value="1">제목 1</option>
          <option value="2">제목 2</option>
          <option value="3">제목 3</option>
          <option value="4">제목 4</option>
        </select> */}
      </span>

      <span className="ql-formats">
        <select className="ql-color" />
        <select className="ql-background" />
      </span>

      <span className="ql-formats">
        <button type="button" className="ql-link" />
        <button type="button" className="ql-image" />
      </span>

      <span className="ql-formats">
        <select className="ql-align" />
        <button
          type="button"
          className="ql-list"
          value="ordered"
          aria-label="ordered"
        />
        <button
          type="button"
          className="ql-list"
          value="bullet"
          aria-label="bullet"
        />
      </span>

      <span className="ql-formats">
        <button type="button" className="ql-bold" />
        <button type="button" className="ql-italic" />
        <button type="button" className="ql-underline" />
        <button type="button" className="ql-strike" />
        <button type="button" className="ql-blockquote" />
      </span>
    </div>
  );
}
