import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function App() {
  return (
    <main>

      <h2> TikTok Scraper </h2>
      <TextField id="outlined-basic" label="Keywords" variant="outlined" className="TextField-root" />
      <Button variant="contained" style={{ marginTop: '16px', textAlign: 'left' }}>Submit</Button>

    </main>
  );
}
