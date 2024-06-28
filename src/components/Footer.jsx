import React from 'react'

export const Footer = () => {
  return (
	<footer className="w3l-footer-16">
		<div className="footer-content py-lg-5 py-4 text-center">
			<div className="container">
				<div className="copy-right">
					<h6>Made with <span className="fa fa-heart" aria-hidden="true"></span> 
                        love Designed by <a	href="https://w3layouts.com">W3layouts</a> 
                    </h6>
					<ul className="footer-gd-16">
						<li>© 2020 Usance. </li>
						<li><a href="#">Support</a></li>
						<li><a href="#">Privacy</a></li>
						<li><a href="#">Terms</a></li>
					</ul>
				</div>
				<button onclick="topFunction()"
                         id="movetop"
                         title="Go to top">
				    	<span className="fa fa-angle-up"></span>
				</button>
			</div>
		</div>
	</footer>
  )
}
