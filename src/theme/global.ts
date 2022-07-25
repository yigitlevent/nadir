import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	@font-face {
        font-family: "Text";
        src: url("/fonts/literata.ttf");
		font-display: block;
    };

	@font-face {
        font-family: "Title";
        src: url("/fonts/thryromanes.ttf");
		font-display: block;
    };

	@font-face {
        font-family: "Hand";
        src: url("/fonts/CormorantUpright-SemiBold.ttf");
		font-display: block;
    };

	@font-face {
        font-family: "Code";
        src: url("/fonts/SourceCodePro-SemiBold.ttf");
		font-display: block;
    };

	* {
		box-sizing: border-box;
		tab-size: 4;

		font-size: 0.97em;

		font-family: "Text";
		color: ${(props: nadir.style.Props) => props.theme.text.main};
	}

	html {
		height: 100vh;
		width: 100vw;
	}

	html,
	body {
		overflow: hidden;
	}

	body, 
	#root {
		height: 100%;
		width: 100%;
	}

	html,
	body,
	#root {
		background: ${(props: nadir.style.Props) => props.theme.background.surface};
		margin: 0;
		padding: 0;
	}

	#root {
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		align-items: flex-start;
		align-content: flex-start;
		overflow: hidden scroll;
		margin: 0;
		padding: 30px 0;
	}

	// Dependency Styles

	//// React-Select-Search
	/////// Main wrapper
	.select-search {
		width: min-content;
		min-width: 160px;
		max-width: 300px;
		position: relative;
		font-family: "Text";
		box-sizing: border-box;
		margin: 2px;

		flex: 1 1 auto;
	}

	.select-search *,
	.select-search *::after,
	.select-search *::before {
		box-sizing: inherit;
	}

	/**
	* Value wrapper
	*/
	.select-search__value {
		position: relative;
		z-index: 1;
	}

	.select-search__value::after {
		content: '';
		display: inline-block;
		position: absolute;
		top: calc(50% - 9px);
		right: 10px;
		width: 11px;
		height: 11px;
	}

	/**
	* Input
	*/
	.select-search__input {
		display: block;
		height: 26px;
		width: 100%;
		padding: 0 10px 0 10px;
		background: ${(props: nadir.style.Props) => props.theme.background.input};
		border: 1px solid transparent;
		box-shadow: 0 .0625rem .125rem rgba(0, 0, 0, 0.15);
		outline: none;
		font-family: "Text";
		font-size: 14px;
		text-align: left;
		text-overflow: ellipsis;
		line-height: 36px;
		-webkit-appearance: none;
	}

	.select-search__input::-webkit-search-decoration,
	.select-search__input::-webkit-search-cancel-button,
	.select-search__input::-webkit-search-results-button,
	.select-search__input::-webkit-search-results-decoration {
		-webkit-appearance:none;
	}

	.select-search__input:not([readonly]):focus {
		cursor: initial;
	}

	/**
	* Options wrapper
	*/
	.select-search__select {
		background: ${(props: nadir.style.Props) => props.theme.background.input};
		box-shadow: 0 .0625rem .125rem rgba(0, 0, 0, 0.15);
	}

	/**
	* Options
	*/
	.select-search__options {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	/**
	* Option row
	*/
	.select-search__row:not(:first-child) {
		border-top: ${(props: nadir.style.Props) => props.theme.border.soft};
	}

	/**
	* Option
	*/
	.select-search__option,
	.select-search__not-found {
		display: block;
		height: 24px;
		width: 100%;
		padding: 0 6px;
		background: ${(props: nadir.style.Props) => props.theme.background.subelement};
		border: none;
		outline: none;
		font-family: "Text";
		font-size: 14px;
		text-align: left;
		cursor: pointer;
	}

	.select-search--multiple .select-search__option {
		height: 48px;
	}

	.select-search__option.is-selected {
		background: ${(props: nadir.style.Props) => props.theme.accents.super};
		color: ${(props: nadir.style.Props) => props.theme.text.main};
	}

	.select-search__option.is-highlighted,
	.select-search__option:not(.is-selected):hover {
		background: ${(props: nadir.style.Props) => props.theme.accents.main};
	}

	.select-search__option.is-highlighted.is-selected,
	.select-search__option.is-selected:hover {
		background: ${(props: nadir.style.Props) => props.theme.accents.main};
		color: ${(props: nadir.style.Props) => props.theme.text.main};
	}

	/**
	* Group
	*/
	.select-search__group-header {
		font-size: 10px;
		text-transform: uppercase;
		background: ${(props: nadir.style.Props) => props.theme.background.subelement};
		padding: 8px 16px;
	}

	/**
	* States
	*/
	.select-search.is-disabled {
		opacity: 0.5;
	}

	.select-search.is-loading .select-search__value::after {
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'%3E%3Cpath fill='%232F2D37' d='M25,5A20.14,20.14,0,0,1,45,22.88a2.51,2.51,0,0,0,2.49,2.26h0A2.52,2.52,0,0,0,50,22.33a25.14,25.14,0,0,0-50,0,2.52,2.52,0,0,0,2.5,2.81h0A2.51,2.51,0,0,0,5,22.88,20.14,20.14,0,0,1,25,5Z'%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 25 25' to='360 25 25' dur='0.6s' repeatCount='indefinite'/%3E%3C/path%3E%3C/svg%3E");
		background-size: 11px;
	}

	.select-search:not(.is-disabled) .select-search__input {
		cursor: pointer;
	}

	/**
	* Modifiers
	*/
	.select-search--multiple {
		overflow: hidden;
	}

	.select-search:not(.is-loading):not(.select-search--multiple) .select-search__value::after {
		transform: rotate(45deg);
		border-right: 1px solid #000;
		border-bottom: 1px solid #000;
		pointer-events: none;
	}

	.select-search--multiple .select-search__input {
		cursor: initial;
	}

	.select-search--multiple .select-search__input {
	}

	.select-search--multiple:not(.select-search--search) .select-search__input {
		cursor: default;
	}

	.select-search:not(.select-search--multiple) .select-search__input:hover {
		border: ${(props: nadir.style.Props) => props.theme.border.hard};
	}

	.select-search:not(.select-search--multiple) .select-search__select {
		position: absolute;
		z-index: 2;
		right: 0;
		left: 0;
		overflow: auto;
		max-height: 360px;
	}

	.select-search--multiple .select-search__select {
		position: relative;
		overflow: auto;
		max-height: 260px;
		border-top: 1px solid #eee;
		border-radius: 0 0 3px 3px;
	}

	.select-search__not-found {
		height: auto;
		padding: 16px;
		text-align: center;
		color: #888;
	}
`;