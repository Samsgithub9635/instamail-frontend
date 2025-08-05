import { useState } from 'react';
import axios from 'axios';
import {
  Container,
  TextField,
  Typography,
  Box,
  CircularProgress,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper,
  Alert
} from '@mui/material';

// FIX: This URL now points to your live backend server on Render.
const API_URL = 'https://instamail-ai.onrender.com/api/email/generate';

function App() {
  const [emailContent, setEmailContent] = useState('');
  const [tone, setTone] = useState('Professional');
  const [generatedReply, setGeneratedReply] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setGeneratedReply('');

    try {
      const response = await axios.post(API_URL, {
        emailContent,
        tone
      });
      setGeneratedReply(response.data);
    } catch (err) {
      console.error(err);
      setError('Failed to generate reply. Please check the API endpoint and backend server status.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 2, px: 2 }}>
      <Paper elevation={0} sx={{ p: 2 }}>
        <Typography variant="h5" component="h1" align="center" sx={{ fontWeight: 'bold' }}>
          InstaMail AI
        </Typography>
        <Typography variant="body2" align="center" color="text.secondary" sx={{ mb: 3 }}>
          Communicate with Confidence and Clarity
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            fullWidth
            multiline
            rows={8}
            variant='outlined'
            label="Original Email Content"
            value={emailContent}
            onChange={(e) => setEmailContent(e.target.value)}
            sx={{ mb: 2 }} />

          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel id="tone-select-label">Tone</InputLabel>
            <Select
              labelId="tone-select-label"
              value={tone}
              label="Tone"
              onChange={(e) => setTone(e.target.value)}>
              <MenuItem value="Professional">Professional</MenuItem>
              <MenuItem value="Friendly">Friendly</MenuItem>
              <MenuItem value="Casual">Casual</MenuItem>
              <MenuItem value="Formal">Formal</MenuItem>
              <MenuItem value="Concise">Concise</MenuItem>
            </Select>
          </FormControl>

          <Button
            type="submit"
            variant='contained'
            // Use trim() to ensure whitespace doesn't enable the button
            disabled={!emailContent.trim() || loading}
            fullWidth
            sx={{
              py: 1.5,
              fontSize: '1rem',
              // This style applies when the button is disabled
              '&.Mui-disabled': {
                backgroundColor: '#E0E0E0', // A light grey color
                color: '#A0A0A0' // A lighter text color
              }
            }}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : "✨ GENERATE INSTAMAIL REPLY"}
          </Button>
        </Box>

        {error && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {error}
          </Alert>
        )}

        {generatedReply && (
          <Box sx={{ mt: 3 }}>
            <Typography variant="h6" component="h2" gutterBottom>
              Generated Reply
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={8}
              variant='outlined'
              value={generatedReply}
              InputProps={{ readOnly: true }}
            />
            <Button
              variant='outlined'
              sx={{ mt: 2 }}
              onClick={() => navigator.clipboard.writeText(generatedReply)}>
              Copy to Clipboard
            </Button>
          </Box>
        )}
      </Paper>
    </Container>
  );
}

export default App;
