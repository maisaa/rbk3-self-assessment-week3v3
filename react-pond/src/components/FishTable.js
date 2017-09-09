
//[ ] Refactor the `FishTable` and `FishTableRow` components to dynamically render the passed in `fishData`

// I would change this compounent to be dynamically so i need to use map get the array  fishData (with three element ) 
var FishTable = (props) => (
  <table>
    <tbody>
      return props.fishData.map(element, function(){
      	<FishTableRow  {element.name }/>
      })
    </tbody>
  </table>
);


//Now after this change i need to render the fishData inside the Fish table  

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
FishTable.propTypes = {
  fishes: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.FishTable = FishTable;


// var FishTable = () => (
//   <table>
//     <tbody>
//       <FishTableRow />
//       <FishTableRow />
//       <FishTableRow />
//     </tbody>
//   </table>
// );

// // PropTypes tell other developers what `props` a component expects
// // Warnings will be shown in the console when the defined rules are violated
// FishTable.propTypes = {
//   fishes: React.PropTypes.array.isRequired
// };

// // In the ES6 spec, files are "modules" and do not share a top-level scope
// // `var` declarations will only exist globally where explicitly defined
// window.FishTable = FishTable;
