import { Color } from "./Color"
import { Colors } from "./Colors"

export function App() {
  return (
    <div>
      <Color color={[
        { id: 1, name: "Francesco" },
      ]} />
      <Colors color={[
        { id: 1, name: "Francesco" },
        { id: 2, name: "Luigi" },
        { id: 3, name: "Francesco" },
        { id: 4, name: "Francesca" },
        { id: 5, name: "Daniele" },
        { id: 6, name: "Sergio" },
      ]} />
    </div>
  )
}