import "./styles.css";
import Button from "./Button";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      width: 400
    }
  })
);

const handleButtonClick = () => {
  alert("ボタンです");
}

export default function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Button size="large" color="primary" variant="contained" className={classes.button}　onClick={handleButtonClick}/>
    </div>
  );
}
