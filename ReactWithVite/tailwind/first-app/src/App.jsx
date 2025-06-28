import './App.css'
import QuoteBox from './components/QuoteBox'
import { isNumber, logIfEqual } from './tools/tools.ts'
import {getArea, Shape} from './tools/type-narrowing-type.ts'

function App() {
  const shape : Shape = {
    radius : 12,
    type: "circle"
  };

  


  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center p-4">
      <QuoteBox />
    </div>
  )
}

export default App
