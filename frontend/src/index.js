
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import {store} from './redux/store'


let root = document.getElementById('root')

let parent = ReactDOM.createRoot(root)

parent.render(
     <Provider store={store}>
        <App/>  
     </Provider>
)