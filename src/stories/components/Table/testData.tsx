import { Button } from "../Button/Button";

export const testData = [
    ['Nombre', 'Edad', 'Acción'],
    ['Ana', '28', <button onClick={() => alert("Ana")}>Ver</button>],
    ['Luis', '32', <Button label="custom" onClick={() => alert("Ana")}/> ],
  ]