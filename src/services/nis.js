import React from 'react';
import { render } from 'react-dom';
import Pager from 'react-pager';
 
export default class App extends React.Component {
    constructor(props) {
        super(props);
 
        this.handlePageChanged = this.handlePageChanged.bind(this);
 
        this.state = {
            total:       11,
            current:     7,
            visiblePage: 3,
        };
    }
 
    handlePageChanged(newPage) {
        this.setState({ current : newPage });
    }
 
    render() {
        return (
            <Pager
                total={this.state.total}
                current={this.state.current}
                visiblePages={this.state.visiblePage}
                titles={{ first: '<|', last: '>|' }}
                className="pagination-sm pull-right"
                onPageChanged={this.handlePageChanged}
            />
        );
    }
}
 
// window.onload = () => {
//     render(React.createElement(App), document.querySelector('#app'));
// };


// import React from 'react';
// import Slider from 'material-ui/Slider';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import { MuiThemeProvider } from 'material-ui';

// const muiTheme = getMuiTheme({
//   slider: {
//     trackColor: "yellow",
//     selectionColor: "red"
//   }
// });

// export default function V0Slider() {


//   return (
//     <MuiThemeProvider muiTheme={muiTheme}>
//     <Slider
//     min={18}
//     max={90}
//     ValueLabelComponent={0} 
//     defaultValue={40}
//     />
//    </MuiThemeProvider>
//   );
// }
// import React from 'react'
// import { SketchPicker } from 'react-color'
 
// export default class Component extends React.Component {
 
//   render() {
//     return <SketchPicker />
//   }
// }