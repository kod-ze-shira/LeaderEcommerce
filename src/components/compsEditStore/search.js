import React,{useState} from 'react'
import $ from 'jquery'
// import aService from '../services/product.service'
 function Search (props) 
  {

(function(){
	debugger;
	var search = $('.js-search');
	if (search.length) {
		var open = search.find('.js-search-open'),
				input = search.find('.js-search-input'),
				dropdown = search.find('.js-search-dropdown'),
				results = search.find('.js-search-results'),
				backdrop = search.find('.js-search-backdrop');

		// open.on('click', function(){
			search.addClass('open');
			input.focus();
		// });

		input.on('keyup', function(){
			if ($(this).val().length >= 3) {
				results.addClass('visible');
			} else {
				results.removeClass('visible');
			}
		});

		// backdrop.on('click', function(){
			search.removeClass('open');
		// });
	}
}());

  return(
	  <input type="search" placeholder="Start typing…"/>
/* <div className="container__search search js-search">
<button className="search__action action js-search-open">


<i className="la la-search "></i></button>
<div className="search__dropdown js-search-dropdown">
<div className="search__field">
  <input className="search__input js-search-input" type="search" placeholder="Start typing…" />
<div className="search__icon"><i className="la la-search "></i></div>
</div>
<div className="search__results js-search-results"><a className="search__result" href="#">
<div className="search__cell">
<div className="search__preview color-red"><i className="lab la-dribbble "></i></div>
</div>
<div className="search__cell">
<div className="search__title">Dribble Redesign</div>
<div className="search__text">Webdesign</div>
</div>
<div className="search__cell mobile-hide">
<div className="search__tag tag gray">24 Feb 2019</div>
</div>
</a><a className="search__result" href="#">
<div className="search__cell">
<div className="search__preview color-green"><i className="lab la-evernote "></i></div>
</div>
<div className="search__cell">
<div className="search__title">New HTML Theme</div>
<div className="search__text">Theme</div>
</div>
<div className="search__cell mobile-hide">
<div className="search__tag tag gray">20 May 2019</div>
</div>
</a><a className="search__result" href="#">
<div className="search__cell">
<div className="search__preview"><img className="search__pic" src="../pages/img/user-1.jpg" alt="User" /></div>
</div>
<div className="search__cell">
<div className="search__title">Bradley Wilkins</div>
<div className="search__text">b.wilkins@gmail.com</div>
</div>
<div className="search__cell mobile-hide">
<div className="search__tag tag gray">Designer</div>
</div>
</a>
</div>
</div>
<div className="search__backdrop backdrop js-search-backdrop"></div>
</div> */
     )
  }
      export default Search;