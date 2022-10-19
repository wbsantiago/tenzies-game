import './toggle.css'


// const toggle = document.getElementById('toggle');
// toggle.onclick = function() {
//   toggle.classList.toggle('active');
// }

export default function Toggle(props) {
    
  return <div id="toggle" onClick={props.toggleDarkMode}>
    <i className={props.darkMode ? "dark" : ""}></i>
  </div>
}