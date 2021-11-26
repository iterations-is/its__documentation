import React, { useEffect } from 'react';
import mermaid from 'mermaid';

mermaid.initialize({
	startOnLoad: true,
	theme: 'forest',
	themeCSS: '.node rect { fill: white; }',
});

const Mermaid = ({ chart }) => {
	useEffect(() => {
		mermaid.contentLoaded();
	}, []);
	return (
		<div style={{ margin: '0 auto', textAlign: 'center' }} className="mermaid">
			{chart}
		</div>
	);
};

export default Mermaid;
